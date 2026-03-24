import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data";

export function Testimonials() {
  return (
    <div className="w-full bg-zinc-950">
      <section id="testimonials" className="max-w-7xl mx-auto px-6 py-28">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-gold font-mono text-xs tracking-[0.3em] uppercase mb-3">
            Word of Honour
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-white font-light leading-[0.95] mb-4">
            What Gentlemen
            <br />
            <span className="text-zinc-500">Are Saying</span>
          </h2>
          <div className="flex items-center gap-4 my-3 max-w-xs mx-auto">
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

        {/* 1 col on mobile, 3 col on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-zinc-950 p-10">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={13} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-zinc-400 font-mono text-xs leading-[1.9] mb-8 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-display text-lg text-white font-normal">
                {t.name}
              </p>
              <p className="font-mono text-xs text-zinc-600 tracking-widest mt-1">
                {t.since}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
