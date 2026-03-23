"use client";

import { useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useBookingStore } from "@/stores/booking-store";

function ZcalWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Remove any existing zcal script so it re-executes fresh
    const existing = document.querySelector(
      'script[src="https://static.zcal.co/embed/v1/embed.js"]',
    );
    if (existing) existing.remove();

    // Also clear any zcal global so it re-initialises
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;
    if (win.zcal) delete win.zcal;

    const script = document.createElement("script");
    script.src = "https://static.zcal.co/embed/v1/embed.js";
    script.async = true;

    // Only after script is fully loaded do we inject the anchor
    // so zcal's DOM scan runs against a ready element
    script.onload = () => {
      const anchor = document.createElement("a");
      anchor.href = "https://zcal.co/i/J1NBSeBf";
      container.appendChild(anchor);

      // Manually trigger zcal's init if it exposes one
      if (win.zcal?.init) win.zcal.init();
    };

    document.body.appendChild(script);

    return () => {
      script.remove();
      if (win.zcal) delete win.zcal;
      // Clear the container so next mount starts clean
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="zcal-inline-widget min-h-[600px]" ref={containerRef} />
  );
}

export function BookingModal() {
  const { toggleModal, isBooking } = useBookingStore();

  return (
    <Dialog open={isBooking} onOpenChange={() => toggleModal()}>
      <DialogContent className="z-[200] bg-zinc-950 border border-zinc-800 p-0 max-w-2xl w-full gap-0 [&>button]:text-zinc-500 [&>button]:hover:text-white">
        <DialogHeader className="px-8 py-5 border-b border-zinc-800">
          <DialogTitle className="text-gold font-mono text-xs tracking-[0.3em] uppercase font-normal">
            Book a Visit
          </DialogTitle>
          <DialogDescription className="text-zinc-500 font-mono text-xs mt-1">
            Select a date and time below
          </DialogDescription>
        </DialogHeader>

        <div className="overflow-y-auto max-h-[90vh]">
          {isBooking && <ZcalWidget />}
        </div>
      </DialogContent>
    </Dialog>
  );
}
