import { Clock } from "lucide-react";
import { SERVICES } from "@/app/data";
import { Service } from "@/app/types";

export function Services() {
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

        {/* Responsive grid: 1 col mobile → 2 col tablet → 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-700">
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
      </section>
    </div>
  );
}
