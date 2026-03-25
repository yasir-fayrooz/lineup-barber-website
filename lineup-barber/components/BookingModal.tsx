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
import { CALENDAR_A_HREF, CALENDAR_SCRIPT_SRC } from "@/data";

function ZcalWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;

    // 1. Inject the anchor FIRST so zcal finds it when the script executes
    const anchor = document.createElement("a");
    anchor.href = CALENDAR_A_HREF;
    container.appendChild(anchor);

    // 2. Remove stale script/global
    const existing = document.querySelector(
      `script[src="${CALENDAR_SCRIPT_SRC}"]`,
    );
    if (existing) existing.remove();
    if (win.zcal) delete win.zcal;

    // 3. Now load the script — it will scan and find the anchor
    const script = document.createElement("script");
    script.src = CALENDAR_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
      if (win.zcal) delete win.zcal;
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

        <div className="overflow-y-auto max-h-[90px]">
          {isBooking && <ZcalWidget />}
        </div>
      </DialogContent>
    </Dialog>
  );
}
