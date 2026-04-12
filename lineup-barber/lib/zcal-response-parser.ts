import type {
  WorkHours,
  BarberServiceSection,
  BarberService,
} from "@/stores/booking-store";

// ── Types matching the zcal API shape ────────────────────────────────────────
interface ZcalCustomQuestion {
  question: string;
  isRequired: boolean;
  format: string;
  options?: string[];
}

interface ZcalAvailability {
  duration: number; // minutes
  rrule: string;
}

interface Organizer {
  intro: ZcalIntro;
}

interface ZcalIntro {
  location: string;
  position: string;
}

interface ZcalInvite {
  customQuestions: ZcalCustomQuestion[];
  availability: ZcalAvailability[];
  organizer: Organizer;
}

// ── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Extracts price from a string like "Skin / Burst Fade ($40)" or "Cut ($12.50)"
 * Returns price in dollars as a number, or 0 if not found.
 */
function extractPrice(option: string): number {
  const match = option.match(/\(\$(\d+(?:\.\d{1,2})?)\)/);
  return match ? parseFloat(match[1]) : 0;
}

/**
 * Strips the price bracket from the option to get the service name.
 * "Skin / Burst Fade ($40)" → "Skin / Burst Fade"
 */
function extractServiceName(option: string): string {
  return option.replace(/\s*\(\$[\d.]+\)/, "").trim();
}

/**
 * Parses rrule string to extract BYDAY, BYHOUR, BYMINUTE.
 * e.g. "RRULE:FREQ=WEEKLY;BYDAY=MO;BYHOUR=11;BYMINUTE=30"
 */
function parseRRule(
  rrule: string,
): { days: string[]; hour: number; minute: number } | null {
  const rruleLine = rrule.split("\n").find((l) => l.startsWith("RRULE:"));
  if (!rruleLine) return null;

  const get = (key: string) => {
    const match = rruleLine.match(new RegExp(`${key}=([^;]+)`));
    return match ? match[1] : null;
  };

  const byday = get("BYDAY");
  const byhour = get("BYHOUR");
  const byminute = get("BYMINUTE");

  if (!byday || byhour === null || byminute === null) return null;

  return {
    days: byday.split(","),
    hour: parseInt(byhour, 10),
    minute: parseInt(byminute, 10),
  };
}

/**
 * Formats a start time + duration (minutes) into e.g. "11:30am - 7:30pm"
 */
function formatTimeRange(
  startHour: number,
  startMinute: number,
  durationMinutes: number,
): string {
  const format = (h: number, m: number): string => {
    const period = h >= 12 ? "pm" : "am";
    const displayHour = h % 12 === 0 ? 12 : h % 12;
    const displayMinute = m.toString().padStart(2, "0");
    return displayMinute === "00"
      ? `${displayHour}${period}`
      : `${displayHour}:${displayMinute}${period}`;
  };

  const totalStartMins = startHour * 60 + startMinute;
  const totalEndMins = totalStartMins + durationMinutes;
  const endHour = Math.floor(totalEndMins / 60) % 24;
  const endMinute = totalEndMins % 60;

  return `${format(startHour, startMinute)} - ${format(endHour, endMinute)}`;
}

const DAY_MAP: Record<string, keyof WorkHours> = {
  MO: "mo",
  TU: "tu",
  WE: "we",
  TH: "th",
  FR: "fr",
  SA: "sa",
  SU: "su",
};

// ── Main parser ───────────────────────────────────────────────────────────────

export function parseZcalInvite(invite: ZcalInvite): {
  serviceSections: BarberServiceSection[];
  workHours: WorkHours;
  location: string;
  phoneNumber: string;
} {
  const phoneNumber = invite.organizer.intro.position;
  const location = invite.organizer.intro.location;

  // 1-5. Extract checkbox questions → BarberServiceSection[]
  const serviceSections: BarberServiceSection[] = invite.customQuestions
    .filter((q) => q.format === "checkbox" && q.options?.length)
    .map((q) => ({
      serviceName: q.question,
      barberServices: (q.options ?? []).map(
        (option): BarberService => ({
          service: extractServiceName(option),
          price: extractPrice(option),
          description: option, // full original text as description
        }),
      ),
    }));

  // 6-7. Build workHours from availability rrules, default all days to "Closed"
  const workHours: WorkHours = {
    mo: "Closed",
    tu: "Closed",
    we: "Closed",
    th: "Closed",
    fr: "Closed",
    sa: "Closed",
    su: "Closed",
  };

  for (const slot of invite.availability) {
    const parsed = parseRRule(slot.rrule);
    if (!parsed) continue;

    const timeRange = formatTimeRange(
      parsed.hour,
      parsed.minute,
      slot.duration,
    );

    for (const day of parsed.days) {
      const key = DAY_MAP[day.toUpperCase()];
      if (key) workHours[key] = timeRange;
    }
  }

  return { serviceSections, workHours, location, phoneNumber };
}
