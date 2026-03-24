import { Clock, MapPin, Phone } from "lucide-react";
import type { Service, Testimonial, Barber } from "./app/types";

export const CALENDAR_SCRIPT_SRC = "https://static.zcal.co/embed/v1/embed.js";
export const CALENDAR_A_HREF = "https://zcal.co/i/J1NBSeBf";

export const SHOP_NAME = "Lineup Barbershop";
export const SHOP_ESTABLISHED_YEAR = 2025;
export const INSTAGRAM_URL = "https://www.instagram.com/line_upbarber";
export const SHOP_DESCRIPTION_1 = "✂️ Fresh Cuts, Sharp Styles ✂️";
export const SHOP_DESCRIPTION_2 = "💈 Precision fades & classic trims 💈";
export const SHOP_DESCRIPTION_3 = "Walk-ins & appointments welcome";

export const DIMCE_YEARS_EXPERIENCE = 8;
export const BARBERS: Barber[] = [
  {
    name: "Dimce Gjorgievski",
    title: "Master Barber & Founder",
    specialty: "Precision fades & classic trims",
    years: `${DIMCE_YEARS_EXPERIENCE} years`,
  },
];

export const CITY = "Melbourne";
export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Address",
    value: "17 N Haven Dr, Epping VIC 3076",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(+61) 410 436 447",
  },
  {
    icon: Clock,
    label: "Hours",
    value: `Mon: 12:30pm-7:30pm
  Tue: 3:30pm-8:00pm
  Wed: 12:30pm-7:00pm
  Thu: 12:30pm-7:30pm
  Fri: 11:30am-7:30pm
  Sat: 11:00am-6:30pm
  Sun: Closed`,
  },
];

export const SERVICES: Service[] = [
  {
    name: "Basic Cut",
    price: "$30",
    duration: "35 min",
    description: "Precision scissor or clipper cut, styled to perfection.",
  },
  {
    name: "Skin Fade",
    price: "$40",
    duration: "45 min",
    description:
      "Modern, high-contrast haircut technique where the hair on the sides and back tapers gradually from any length down to the bare skin",
  },
  {
    name: "Taper Fade",
    price: "$35",
    duration: "45 min",
    description:
      "Shortens hair on the sides and back—specifically at the neckline and temples—while leaving longer hair on top. It offers a cleaner, subtler, and more blended look than a standard fade",
  },
  {
    name: "Beard Trim",
    price: "$10",
    duration: "15 min",
    description: "Shape, line, and condition your beard to its finest form.",
  },
  {
    name: "Hot Towel Massage",
    price: "$10",
    duration: "20 min",
    description:
      "Heat and moisture to deeply condition, hydrate, and soften hair while relaxing the scalp",
  },
  {
    name: "Boys Hair Cut",
    price: "$25",
    duration: "35 min",
    description: "Hair cut for kids",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Yasir F.",
    rating: 5,
    text: "The most refined barbershop experience I've had in Melbourne. Dimce is an absolute artist and takes time with every piece of detail.",
    since: "Client since 2026",
  },
  {
    name: "Mark G.",
    rating: 5,
    text: "Was trying to find good barbers near me and couldn't find one until I finally found Jimmy. Guy is amazing, he makes sure every customer is happy and it shows.",
    since: "Client since 2025",
  },
  {
    name: "Jaskaran S.",
    rating: 5,
    text: "Best barber in Epping. Listens to you and also give recommendations. Never in hurry. Does everything with detailing. Good peaceful environment",
    since: "",
  },
];

export const GOLD = "#D4AF37";
