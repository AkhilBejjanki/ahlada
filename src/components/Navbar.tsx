import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Contact", id: "contact" },
];

const HEADER_OFFSET = 88;

const scrollToSection = (id: string, behavior: ScrollBehavior = "smooth") => {
  const el = document.getElementById(id);
  if (!el) return;

  const top = Math.max(0, el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET);
  window.scrollTo({ top, behavior });
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const scrollFromHash = () => {
      const id = window.location.hash.replace("#", "");
      if (id) {
        requestAnimationFrame(() => scrollToSection(id, "auto"));
      }
    };

    scrollFromHash();
    window.addEventListener("hashchange", scrollFromHash);

    return () => window.removeEventListener("hashchange", scrollFromHash);
  }, []);

  const handleNav = (id: string) => {
    setMobileOpen(false);
    window.history.pushState(null, "", `#${id}`);
    setTimeout(() => scrollToSection(id), 50);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "0 4%",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "all 0.4s ease",
          background: scrolled ? "rgba(250, 246, 240, 0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201, 146, 42, 0.4)" : "none",
          boxShadow: scrolled ? "0 2px 40px rgba(139, 26, 46, 0.08)" : "none",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNav("home"); }}
          style={{ textDecoration: "none", display: "flex", flexDirection: "column", lineHeight: 1 }}
        >
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <span style={{ fontFamily: "'Cinzel', serif", fontSize: "28px", color: "var(--crimson)", fontWeight: 700 }}>A</span>
            <span style={{ fontFamily: "'Cinzel', serif", fontSize: "22px", color: "var(--text-primary)", fontWeight: 600 }}>HLADA</span>
          </div>
          <span style={{ fontFamily: "'Cinzel', serif", fontSize: "12px", letterSpacing: "0.3em", color: "var(--gold)", marginTop: "-2px" }}>
            EVENTS
          </span>
        </a>

        {/* Desktop links */}
        <div className="nav-links-desktop" style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); handleNav(link.id); }}
              className="nav-link-hover"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "13px",
                letterSpacing: "0.15em",
                color: "var(--text-primary)",
                textDecoration: "none",
                position: "relative",
                paddingBottom: "4px",
                cursor: "pointer",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleNav("contact"); }}
          className="nav-cta-desktop"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "12px",
            letterSpacing: "0.1em",
            padding: "10px 22px",
            background: "var(--crimson)",
            color: "var(--cream)",
            textDecoration: "none",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "var(--gold)"; }}
          onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "var(--crimson)"; }}
        >
          Plan Your Event
        </a>

        {/* Mobile WhatsApp quick link */}
        <a
          href="https://wa.me/919381384834"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-mobile-whatsapp"
          aria-label="Chat on WhatsApp"
          style={{
            display: "none",
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "var(--crimson)",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 12,
          }}
        >
          <MessageCircle size={18} color="var(--gold)" />
        </a>

        {/* Mobile hamburger */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--crimson)",
          }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 999,
              background: "var(--crimson)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0",
              padding: "60px 32px",
            }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--cream)",
              }}
            >
              <X size={32} />
            </button>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={`#${link.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={(e) => { e.preventDefault(); handleNav(link.id); }}
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "20px",
                  color: "var(--cream)",
                  textDecoration: "none",
                  letterSpacing: "0.2em",
                  padding: "16px 0",
                  width: "100%",
                  textAlign: "center",
                  borderBottom: "1px solid rgba(250,246,240,0.1)",
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link-hover::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1.5px;
          background: var(--gold);
          transition: width 0.3s ease;
        }
        .nav-link-hover:hover::after { width: 100%; }
        @media (max-width: 768px) {
          .nav-links-desktop,
          .nav-cta-desktop { display: none !important; }
          .nav-mobile-toggle { display: block !important; }
          .nav-mobile-whatsapp { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
