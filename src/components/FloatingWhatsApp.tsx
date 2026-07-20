import { useState } from "react";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <button
        onClick={() => window.open("https://wa.me/919381384834", "_blank")}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Chat on WhatsApp"
        style={{
          position: "fixed",
          bottom: 28,
          right: 28,
          zIndex: 999,
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: hovered ? "var(--gold)" : "var(--crimson)",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          animation: "fwaPulse 2.5s ease-in-out infinite",
          transform: hovered ? "scale(1.1)" : "scale(1)",
          transition: "transform 0.2s ease, background 0.3s ease",
        }}
      >
        <MessageCircle size={24} color={hovered ? "var(--crimson)" : "var(--gold)"} />
        <span style={{
          position: "absolute",
          right: 68,
          top: "50%",
          transform: "translateY(-50%)",
          background: "#1A0A0A",
          color: "var(--cream)",
          fontFamily: "'Cinzel', serif",
          fontSize: 10,
          letterSpacing: "0.1em",
          padding: "6px 12px",
          whiteSpace: "nowrap",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.25s ease",
          pointerEvents: "none",
        }}>
          Chat on WhatsApp
        </span>
      </button>

      <style>{`
        @keyframes fwaPulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(139,26,46,0.4); }
          50% { box-shadow: 0 4px 32px rgba(201,146,42,0.5); }
        }
        @media (max-width: 640px) {
          button[aria-label="Chat on WhatsApp"] {
            bottom: 20px !important;
            right: 20px !important;
            width: 52px !important;
            height: 52px !important;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingWhatsApp;
