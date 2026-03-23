import { SHOP_NAME } from "@/app/data";
import { Scissors } from "lucide-react";

const GOLD = "#D4AF37";

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#09090b",
        borderTop: "1px solid #27272a",
        padding: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <Scissors size={16} color={GOLD} />
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.1rem",
            color: "#fff",
            letterSpacing: "0.15em",
          }}
        >
          {SHOP_NAME}
        </span>
      </div>
      <p
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.6rem",
          letterSpacing: "0.2em",
          color: "#bdbdc5",
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} {SHOP_NAME} · All rights reserved
      </p>
      <p
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.6rem",
          color: "#bdbdc5",
        }}
      >
        Melbourne, Australia
      </p>
    </footer>
  );
}
