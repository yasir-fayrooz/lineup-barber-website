import { GOLD } from "@/app/data";
import { useBookingStore } from "@/stores/booking-store";
import { ChevronDown } from "lucide-react";

const STATS = [
  { n: "8+", label: "Years" },
  { n: "1", label: "Barbers" },
  { n: "Many", label: "Clients" },
];

export function Hero() {
  const { toggleModal } = useBookingStore();
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "700px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#09090b",
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage: `
            linear-gradient(rgba(212,175,55,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gold side lines */}
      <div
        style={{
          position: "absolute",
          left: "2rem",
          top: 0,
          bottom: 0,
          width: "1px",
          background:
            "linear-gradient(to bottom, transparent, rgba(212,175,55,0.25), transparent)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "2rem",
          top: 0,
          bottom: 0,
          width: "1px",
          background:
            "linear-gradient(to bottom, transparent, rgba(212,175,55,0.25), transparent)",
        }}
      />

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 1.5rem",
          maxWidth: "900px",
          width: "100%",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-block",
            border: `1px solid rgba(212,175,55,0.5)`,
            color: GOLD,
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            padding: "0.4rem 1.25rem",
          }}
        >
          Established 2025 · Melbourne
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(4rem, 11vw, 8.5rem)",
            lineHeight: 0.9,
            letterSpacing: "-0.01em",
            color: "#ffffff",
            marginBottom: "1.5rem",
            fontWeight: 300,
          }}
        >
          LINE UP
          <br />
          <span style={{ color: GOLD }}>BARBER</span>
          <br />
          SHOP
        </h1>

        {/* Subtitle */}
        <p
          style={{
            color: "#71717a",
            fontSize: "0.9rem",
            maxWidth: "460px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.8,
            fontFamily: "'DM Mono', monospace",
            fontWeight: 300,
          }}
        >
          ✂️ Fresh Cuts, Sharp Styles ✂️ <br />
          💈 Precision fades & classic trims 💈
          <br />
          Walk-ins & appointments welcome
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
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
          <a
            href="#services"
            style={{
              backgroundColor: "transparent",
              color: "#a1a1aa",
              border: "1px solid #3f3f46",
              padding: "0.85rem 2rem",
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            View Services
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            marginTop: "4rem",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            backgroundColor: "#27272a",
            border: "1px solid #27272a",
            maxWidth: "420px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {STATS.map(({ n, label }) => (
            <div
              key={label}
              style={{
                backgroundColor: "#09090b",
                padding: "1.25rem 1rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.75rem",
                  color: GOLD,
                }}
              >
                {n}
              </div>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#52525b",
                  marginTop: "0.25rem",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue — pinned to bottom */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
          color: "#3f3f46",
          animation: "heroScroll 2s ease-in-out infinite",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.25em",
          }}
        >
          SCROLL
        </span>
        <ChevronDown size={14} />
      </div>

      <style>{`
        @keyframes heroScroll {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  );
}
