"use client";
import {
  MapPin,
  Phone,
  Clock,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { BookingForm } from "@/components/BookingForm";

const CONTACT_INFO = [
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
    value:
      "Mon: 12:30pm-7:30pm\nTue: 3:30pm-8:00pm\nWed: 12:30pm-7:00pm\nThu: 12:30pm-7:30pm\nFri: 11:30am-7:30pm\nSat: 11:00am-6:30pm\nSun: Closed",
  },
];

const SOCIALS = [Instagram];

export function Contact() {
  return (
    <div className="w-full bg-zinc-900">
      <div id="contact" className="max-w-7xl mx-auto px-6 py-28">
        {/* Stacks on mobile, side-by-side on lg+ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — info */}
          <div>
            <p className="text-gold font-mono text-xs tracking-[0.3em] uppercase mb-3">
              Find Us
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-white font-light leading-[0.95] mb-4">
              Visit the
              <br />
              <span className="text-zinc-500">Shop</span>
            </h2>
            <div className="flex items-center gap-4 my-3 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold" />
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="1.5"
                className="rotate-45 shrink-0"
              >
                <path d="M6 3l12 18M18 3L6 21" />
              </svg>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold" />
            </div>

            {/* Contact items */}
            <div className="flex flex-col gap-6">
              {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-10 h-10 border border-gold/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-zinc-600 tracking-widest uppercase mb-1">
                      {label}
                    </p>
                    {/* whitespace-pre-line preserves the \n line breaks in Hours */}
                    <span className="font-mono text-xs text-zinc-400 whitespace-pre-line">
                      {value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-10">
              {SOCIALS.map((Icon, i) => (
                <div className="flex items-center gap-2" key={i}>
                  <a
                    href="https://www.instagram.com/line_upbarber"
                    target="_blank"
                    className="w-10 h-10 border border-zinc-700 hover:border-gold flex items-center justify-center bg-transparent text-zinc-500 hover:text-gold transition-all duration-300 cursor-pointer"
                  >
                    <Icon size={16} />
                  </a>
                  <p className="font-mono text-xs text-zinc-600 tracking-widest uppercase mb-1">
                    Instagram
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — booking form */}
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
