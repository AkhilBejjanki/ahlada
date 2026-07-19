import { Instagram, Facebook, Youtube } from "lucide-react";

const LotusMini = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" opacity={0.6}>
    <path d="M12 3C12 3 8 8 8 13c0 3 2 5 4 5s4-2 4-5c0-5-4-10-4-10z" />
    <path d="M12 18c-2 0-6-1-8-5 2 4 5 6 8 6s6-2 8-6c-2 4-6 5-8 5z" />
    <path d="M5 13c0-4 3-8 4-9-3 2-7 6-7 9 0 2 1 4 3 5-1-1-0-3 0-5z" />
    <path d="M19 13c0-4-3-8-4-9 3 2 7 6 7 9 0 2-1 4-3 5 1-1 0-3 0-5z" />
  </svg>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="footer-link"
    style={{
      display: "block",
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 15,
      color: "rgba(250,246,240,0.65)",
      textDecoration: "none",
      marginBottom: 10,
      transition: "all 0.2s ease",
    }}
    onMouseEnter={(e) => {
      const el = e.currentTarget;
      el.style.color = "var(--gold)";
      el.style.transform = "translateX(4px)";
    }}
    onMouseLeave={(e) => {
      const el = e.currentTarget;
      el.style.color = "rgba(250,246,240,0.65)";
      el.style.transform = "translateX(0)";
    }}
  >
    {children}
  </a>
);

const columnHeading: React.CSSProperties = {
  fontFamily: "'Cinzel', serif",
  fontSize: 10,
  letterSpacing: "0.3em",
  color: "var(--gold)",
  marginBottom: 20,
  display: "block",
};

const Footer = () => (
  <footer className="footer-section" style={{
    background: "#4A0A16", color: "var(--cream)",
    padding: "72px 7% 0 7%",
  }}>
    <div className="footer-grid" style={{
      display: "grid", gap: 60, maxWidth: 1400, margin: "0 auto",
    }}>
      {/* Column 1 — Brand */}
      <div>
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: 28, color: "var(--cream)", lineHeight: 1 }}>
            AHLADA
          </div>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: 12, letterSpacing: "0.3em", color: "var(--gold)", marginTop: 4 }}>
            EVENTS
          </div>
        </div>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
          fontSize: 16, color: "rgba(250,246,240,0.65)",
          maxWidth: 220, lineHeight: 1.7, margin: 0,
        }}>
          Turning Your Emotions Into Celebrations.
        </p>
        <div style={{ margin: "24px 0" }}>
          <LotusMini />
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          {[Instagram, Facebook, Youtube].map((Icon, i) => (
            <a
              key={i}
              href="#"
              style={{
                width: 38, height: 38,
                border: "1px solid rgba(201,146,42,0.35)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--gold)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "var(--gold)";
                el.style.color = "#4A0A16";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "transparent";
                el.style.color = "var(--gold)";
              }}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      {/* Column 2 — Quick Links */}
      <div>
        <span style={columnHeading}>QUICK LINKS</span>
        {["Home", "About", "Services", "Portfolio", "Blog", "Contact"].map((l) => (
          <FooterLink key={l} href={`#${l.toLowerCase()}`}>{l}</FooterLink>
        ))}
      </div>

      {/* Column 3 — Services */}
      <div>
        <span style={columnHeading}>OUR SERVICES</span>
        {["Birthday Parties", "Wedding Planning", "Engagements", "Baby Showers", "Theme Parties", "Housewarming", "Anniversary", "Festive Decor"].map((l) => (
          <FooterLink key={l} href="#services">{l}</FooterLink>
        ))}
      </div>

      {/* Column 4 — Contact */}
      <div>
        <span style={columnHeading}>CONTACT US</span>

        {[
          { label: "PHONE", value: "+91 98765 43210" },
          { label: "EMAIL", value: "hello@ahladaevents.com" },
          { label: "LOCATION", value: "Hyderabad, Telangana" },
        ].map((c) => (
          <div key={c.label} style={{ marginBottom: 16 }}>
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: 9, letterSpacing: "0.2em", color: "rgba(201,146,42,0.7)" }}>
              {c.label}
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 15, color: "rgba(250,246,240,0.65)", lineHeight: 1.5, marginTop: 2 }}>
              {c.value}
            </div>
          </div>
        ))}

        <div style={{
          marginTop: 20,
          fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
          fontSize: 14, color: "rgba(250,246,240,0.5)",
        }}>
          Mon – Sat: 9am – 7pm
        </div>
      </div>
    </div>

    {/* Bottom strip */}
    <div className="footer-bottom" style={{
      maxWidth: 1400, margin: "60px auto 0 auto",
      borderTop: "1px solid rgba(201,146,42,0.15)",
      padding: "24px 0 32px 0",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      flexWrap: "wrap", gap: 16,
    }}>
      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 13, color: "rgba(250,246,240,0.4)" }}>
        © 2025 Ahlada Events. All rights reserved.
      </div>
      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 13, color: "rgba(250,246,240,0.4)" }}>
        Made with ❤️ in Hyderabad
      </div>
      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 13, color: "rgba(250,246,240,0.4)" }}>
        <a href="#" className="footer-legal">Privacy Policy</a>
        <span style={{ margin: "0 8px" }}>·</span>
        <a href="#" className="footer-legal">Terms of Service</a>
      </div>
    </div>

    <style>{`
      .footer-grid {
        grid-template-columns: 2fr 1fr 1fr 1.5fr;
      }
      .footer-legal {
        color: rgba(250,246,240,0.4);
        text-decoration: none;
        transition: color 0.2s ease;
      }
      .footer-legal:hover { color: var(--gold); }
      @media (max-width: 900px) {
        .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
      }
      @media (max-width: 560px) {
        .footer-section { padding: 56px 6% 0 6% !important; }
        .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        .footer-bottom { flex-direction: column !important; text-align: center !important; }
      }
    `}</style>
  </footer>
);

export default Footer;
