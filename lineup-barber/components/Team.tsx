"use client";
import { Scissors } from "lucide-react";
import { BARBERS } from "@/app/data";
import Image from "next/image";

const GOLD = "#D4AF37";

export function Team() {
  return (
    <div style={{ backgroundColor: "#111113", width: "100%" }}>
      <section
        id="team"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "7rem 2rem" }}
      >
        <div style={{ marginBottom: "3.5rem" }}>
          <p
            style={{
              color: GOLD,
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            The Craftsmen
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 0.95,
              color: "#fff",
              fontWeight: 300,
              marginBottom: "1rem",
            }}
          >
            Meet the
            <br />
            <span style={{ color: "#52525b" }}>Barber</span>
          </h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              margin: "0.75rem 0",
            }}
          >
            <div
              style={{
                flex: 1,
                height: "1px",
                background: `linear-gradient(to right, transparent, ${GOLD})`,
              }}
            />
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke={GOLD}
              strokeWidth="1.5"
              style={{ transform: "rotate(45deg)", flexShrink: 0 }}
            >
              <path d="M6 3l12 18M18 3L6 21" />
            </svg>
            <div
              style={{
                flex: 1,
                height: "1px",
                background: `linear-gradient(to left, transparent, ${GOLD})`,
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: "1.5rem",
          }}
        >
          {BARBERS.map((b) => (
            <div
              key={b.name}
              style={{
                border: "1px solid #27272a",
                transition: "border-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "rgba(212,175,55,0.4)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "#27272a")
              }
            >
              {/* Portrait */}
              <div
                style={{
                  height: "240px",
                  backgroundColor: "#1c1c1f",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.15,
                    backgroundImage:
                      "repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(212,175,55,0.15) 4px, rgba(212,175,55,0.15) 5px)",
                  }}
                />
                <Image
                  src="/dimce.webp"
                  alt="Lineup Signature"
                  objectFit="cover"
                  fill={true}
                  objectPosition="center 40%"
                />
              </div>
              {/* Info */}
              <div style={{ padding: "1.75rem" }}>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.5rem",
                    color: "#fff",
                    fontWeight: 400,
                    marginBottom: "0.25rem",
                  }}
                >
                  {b.name}
                </h3>
                <p
                  style={{
                    color: GOLD,
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                  }}
                >
                  {b.title}
                </p>
                <div
                  style={{
                    height: "1px",
                    backgroundColor: "#27272a",
                    marginBottom: "1rem",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: "#71717a",
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.7rem",
                    }}
                  >
                    {b.specialty}
                  </span>
                  <span
                    style={{
                      color: "#52525b",
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.65rem",
                    }}
                  >
                    {b.years}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
