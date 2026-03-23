import { Scissors } from "lucide-react";

export function GoldDivider() {
  return (
    <div className="flex items-center gap-4 my-2">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold" />
      <Scissors className="w-4 h-4 text-gold rotate-45" />
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold" />
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-gold font-mono text-xs tracking-[0.3em] uppercase mb-3">
      {children}
    </p>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-4">
      {children}
    </h2>
  );
}
