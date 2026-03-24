"use client";

import { useBookingStore } from "@/stores/booking-store";
import { GOLD } from "@/data";

export function BookingForm() {
  const { toggleModal } = useBookingStore();
  return (
    <div className="flex flex-col items-center border border-zinc-800 p-8 md:p-10">
      <p className="text-gold font-mono text-xs tracking-[0.3em] uppercase mb-6">
        Book a Visit
      </p>
      <div>
        <a
          onClick={toggleModal}
          style={{
            backgroundColor: GOLD,
            color: "#000",
            border: "none",
            padding: "0.85rem 2rem",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            cursor: "pointer",
            fontWeight: 500,
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Book an Appointment
        </a>
      </div>
    </div>
  );
}
