"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Loader2Icon } from "lucide-react";
import { useBookingStore } from "@/stores/booking-store";

const MAX_HEIGHT = 600;

export function Services() {
  const [expanded, setExpanded] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const { serviceSections } = useBookingStore();
  const [needsOverflow, setNeedsOverflow] = useState(false);

  // Count total individual services to decide if we need overflow
  useEffect(() => {
    if (!serviceSections) return;
    const total = serviceSections.reduce(
      (acc, s) => acc + s.barberServices.length,
      0,
    );
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNeedsOverflow(total > 6);
  }, [serviceSections]);

  return (
    <div className="w-full bg-zinc-900">
      <section id="services" className="max-w-7xl mx-auto px-6 py-28">
        {/* Header */}
        <div className="mb-14">
          <p className="text-gold font-mono text-xs tracking-[0.3em] uppercase mb-3">
            Our Craft
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-white font-light leading-[0.95] mb-4">
            Services
            <br />
            <span className="text-zinc-500">&amp; Treatments</span>
          </h2>
          <div className="flex items-center gap-4 my-3">
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
        </div>

        {/* Sections */}
        <div className="relative">
          {!serviceSections && (
            <Loader2Icon className="flex w-full justify-center animate-spin" />
          )}
          <div
            ref={gridRef}
            className="flex flex-col gap-10 overflow-hidden transition-[max-height] duration-700 ease-in-out"
            style={{
              maxHeight:
                needsOverflow && !expanded ? `${MAX_HEIGHT}px` : "none",
            }}
          >
            {serviceSections?.map((section) => (
              <div key={section.serviceName}>
                {/* Section label */}
                <div className="flex items-center gap-4 mb-4">
                  <p className="text-gold font-mono text-xs tracking-[0.25em] uppercase shrink-0">
                    {section.serviceName}
                  </p>
                  <div className="h-px flex-1 bg-zinc-800" />
                </div>

                {/* Service cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-700">
                  {section.barberServices.map((svc) => (
                    <div
                      key={svc.service}
                      className="bg-zinc-900 hover:bg-zinc-800 transition-colors duration-300 p-7 cursor-default group"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-display text-2xl text-white font-normal group-hover:text-gold transition-colors duration-300">
                          {svc.service}
                        </h3>
                        <span className="font-display text-2xl text-gold font-normal shrink-0 ml-4">
                          ${svc.price}
                        </span>
                      </div>
                      <p className="text-zinc-500 text-xs leading-relaxed font-mono">
                        {svc.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Fade + expand */}
          {needsOverflow && !expanded && (
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-zinc-900 via-zinc-900/70 to-transparent flex items-end justify-center pb-6 pointer-events-none">
              <button
                onClick={() => setExpanded(true)}
                className="pointer-events-auto flex items-center gap-2 border border-zinc-700 hover:border-gold text-zinc-400 hover:text-gold font-mono text-xs tracking-[0.2em] uppercase px-6 py-3 transition-all duration-300 bg-zinc-900 cursor-pointer"
              >
                View All Services
                <ChevronDown size={13} />
              </button>
            </div>
          )}
        </div>

        {/* Collapse */}
        {needsOverflow && expanded && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => {
                setExpanded(false);
                setTimeout(() => {
                  gridRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }, 50);
              }}
              className="flex items-center gap-2 border border-zinc-700 hover:border-gold text-zinc-400 hover:text-gold font-mono text-xs tracking-[0.2em] uppercase px-6 py-3 transition-all duration-300 cursor-pointer"
            >
              Show Less
              <ChevronDown size={13} className="rotate-180" />
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
