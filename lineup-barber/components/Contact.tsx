"use client";
import { BookingForm } from "@/components/BookingForm";
import { INSTAGRAM_URL } from "@/data";
import { useBookingStore } from "@/stores/booking-store";
import { Clock, Instagram, Loader2Icon, MapPin, Phone } from "lucide-react";

const SOCIALS = [Instagram];

export function Contact() {
  const { workHours, phoneNumber, location } = useBookingStore();

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
            {!workHours || !phoneNumber || !location ? (
              <Loader2Icon className="flex justify-center animate-spin" />
            ) : (
              <div className="flex flex-col gap-6">
                {/* LOCATION */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 border border-gold/30 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-zinc-600 tracking-widest uppercase mb-1">
                      Address
                    </p>
                    {/* whitespace-pre-line preserves the \n line breaks in Hours */}
                    <span className="font-mono text-xs text-zinc-400 whitespace-pre-line">
                      {location}
                    </span>
                  </div>
                </div>
                {/* PHONE */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 border border-gold/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-zinc-600 tracking-widest uppercase mb-1">
                      Phone
                    </p>
                    {/* whitespace-pre-line preserves the \n line breaks in Hours */}
                    <a
                      href={`tel:${phoneNumber}`}
                      className="font-mono text-xs text-zinc-400 whitespace-pre-line"
                    >
                      {phoneNumber}
                    </a>
                  </div>
                </div>
                {/* WORKING HOURS */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 border border-gold/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-zinc-600 tracking-widest uppercase mb-1">
                      Working Hours
                    </p>
                    {/* whitespace-pre-line preserves the \n line breaks in Hours */}
                    <span className="font-mono text-xs text-zinc-400 whitespace-pre-line">
                      {"Mon: " + workHours?.mo}
                      <br />
                      {"Tue: " + workHours?.tu}
                      <br />
                      {"Wed: " + workHours?.we}
                      <br />
                      {"Thu: " + workHours?.th}
                      <br />
                      {"Fri: " + workHours?.fr}
                      <br />
                      {"Sat: " + workHours?.sa}
                      <br />
                      {"Sun: " + workHours?.su}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Socials */}
            <div className="flex gap-3 mt-10">
              {SOCIALS.map((Icon, i) => (
                <div className="flex items-center gap-2" key={i}>
                  <a
                    href={INSTAGRAM_URL}
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
