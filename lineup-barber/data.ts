import type { Testimonial, Barber } from "./app/types";

export const CALENDAR_SCRIPT_SRC = "https://static.zcal.co/embed/v1/embed.js";
export const CALENDER_URL_ID = "YdLw5QPv";
export const CALENDAR_A_HREF = `https://zcal.co/i/${CALENDER_URL_ID}`;

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
