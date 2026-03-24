"use client";

import { useState, useEffect } from "react";
import { Scissors, Menu, X } from "lucide-react";
import { SHOP_NAME } from "@/data";
import { useBookingStore } from "@/stores/booking-store";

const GOLD = "#D4AF37";
const NAV_LINKS = ["Services", "Team", "Testimonials", "Contact"];

export function Navbar() {
  const { toggleModal } = useBookingStore();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "1rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "all 0.4s",
          backgroundColor: scrolled ? "rgba(9,9,11,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          borderBottom: scrolled
            ? "1px solid #27272a"
            : "1px solid transparent",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div
            style={{
              width: 32,
              height: 32,
              border: `1px solid ${GOLD}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Scissors size={14} color={GOLD} />
          </div>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.2rem",
              color: "#fff",
              letterSpacing: "0.15em",
            }}
          >
            {SHOP_NAME}.
          </span>
        </div>

        {/* Desktop links */}
        <div style={{ gap: "2.5rem" }} className="hidden md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                color: "#71717a",
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#71717a")}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          className="hidden md:block"
          onClick={toggleModal}
          style={{
            border: `1px solid ${GOLD}`,
            color: GOLD,
            backgroundColor: "transparent",
            padding: "0.5rem 1.25rem",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = GOLD;
            e.currentTarget.style.color = "#000";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = GOLD;
          }}
        >
          Book Now
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden ms-8 md:ms-0"
          style={{
            background: "none",
            border: "none",
            color: "#71717a",
            cursor: "pointer",
          }}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: 65,
            left: 0,
            right: 0,
            zIndex: 99,
            backgroundColor: "#09090b",
            borderTop: "1px solid #27272a",
            padding: "1.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{
                color: "#a1a1aa",
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.75rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              {link}
            </a>
          ))}
          <a
            onClick={toggleModal}
            style={{
              backgroundColor: GOLD,
              color: "#000",
              border: "none",
              padding: "0.65rem 1.25rem",
              alignSelf: "flex-start",
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Book Now
          </a>
        </div>
      )}
    </>
  );
}
