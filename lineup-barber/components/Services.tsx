import { Clock, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";
import { SERVICES } from "@/data";
import { Service } from "@/app/types";

const OVERFLOW_THRESHOLD = 6; // show overflow after this many services
const MAX_HEIGHT = 520; // px — roughly 2 rows of cards

export function Services() {
  const [expanded, setExpanded] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const [needsOverflow, setNeedsOverflow] = useState(
    SERVICES.length > OVERFLOW_THRESHOLD,
  );

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

        {/* Grid wrapper with overflow */}
        <div className="relative">
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-700 overflow-hidden transition-all duration-700 ease-in-out"
            style={{
              maxHeight:
                needsOverflow && !expanded ? `${MAX_HEIGHT}px` : "none",
            }}
          >
            {SERVICES.map((s: Service) => (
              <div
                key={s.name}
                className="bg-zinc-900 hover:bg-zinc-800 transition-colors duration-300 p-8 cursor-default"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-display text-2xl text-white font-normal">
                    {s.name}
                  </h3>
                  <span className="font-display text-2xl text-gold font-normal shrink-0 ml-4">
                    {s.price}
                  </span>
                </div>
                <p className="text-zinc-500 text-xs leading-relaxed mb-5 font-mono">
                  {s.description}
                </p>
                <div className="flex items-center gap-2 text-zinc-600">
                  <Clock size={13} />
                  <span className="font-mono text-xs tracking-widest">
                    {s.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Fade + expand button */}
          {needsOverflow && !expanded && (
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent flex items-end justify-center pb-6 pointer-events-none">
              <button
                onClick={() => setExpanded(true)}
                className="pointer-events-auto flex items-center gap-2 border border-zinc-700 hover:border-gold text-zinc-400 hover:text-gold font-mono text-xs tracking-[0.2em] uppercase px-5 py-3 transition-colors duration-300 bg-zinc-900"
              >
                View All Services
                <ChevronDown size={13} />
              </button>
            </div>
          )}
        </div>

        {/* Collapse button */}
        {needsOverflow && expanded && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => {
                setExpanded(false);
                gridRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className="flex items-center gap-2 border border-zinc-700 hover:border-gold text-zinc-400 hover:text-gold font-mono text-xs tracking-[0.2em] uppercase px-5 py-3 transition-colors duration-300"
            >
              Show Less
              <ChevronDown
                size={13}
                className="rotate-180 transition-transform"
              />
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
