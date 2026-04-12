"use client";

import { useEffect, useRef } from "react";
import { useBookingStore } from "@/stores/booking-store";
import { parseZcalInvite } from "@/lib/zcal-response-parser";

export function ZcalDataLoader() {
  const setZcalData = useBookingStore((s) => s.setZcalData);
  const hasFetched = useRef(false);

  useEffect(() => {
    const target = document.getElementById("services");
    if (!target) return;

    const observer = new IntersectionObserver(
      async (entries) => {
        if (!entries[0]?.isIntersecting || hasFetched.current) return;

        hasFetched.current = true;
        observer.disconnect();

        try {
          const res = await fetch("/api/zcal");
          if (!res.ok) throw new Error(`API error: ${res.status}`);
          const json = await res.json();
          const invite = json?.data?.invite;
          if (!invite) throw new Error("No invite in response");

          const { serviceSections, workHours, location, phoneNumber } =
            parseZcalInvite(invite);
          setZcalData({ serviceSections, workHours, location, phoneNumber });
        } catch (err) {
          console.error("Failed to load zcal data:", err);
        }
      },
      { rootMargin: "0px 0px -200px 0px", threshold: 0 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [setZcalData]);

  return null;
}
