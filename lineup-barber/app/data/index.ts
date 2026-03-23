import type { Service, Testimonial, Barber } from "../types";

export const SHOP_NAME = "Lineup Barbershop";

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

export const BARBERS: Barber[] = [
  {
    name: "Dimce Gjorgievski",
    title: "Master Barber & Founder",
    specialty: "Precision fades & classic trims",
    years: "8 years",
  },
];

export const GOLD = "#D4AF37";
