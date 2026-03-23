import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Star, Award, Heart } from "lucide-react";

const PETALS = [
  { size: 280, top: "10%", left: "8%", duration: "10s", delay: "0s" },
  { size: 180, top: "60%", left: "15%", duration: "14s", delay: "2s" },
  { size: 320, top: "20%", right: "5%", duration: "11s", delay: "4s" },
  { size: 150, bottom: "10%", right: "20%", duration: "16s", delay: "1s" },
  { size: 220, top: "45%", left: "45%", duration: "13s", delay: "3s" },
  { size: 120, bottom: "20%", left: "5%", duration: "9s", delay: "5s" },
];

const LotusPetalSVG = () => (
  <svg viewBox="0 0 200 200" fill="none" width="100%" height="100%">
    <path d="M100 20C100 20 130 70 100 140C70 70 100 20 100 20Z" stroke="#8B1A2E" strokeWidth="1.2" fill="none" />
    <path d="M100 25C100 25 160 60 140 130C115 60 100 25 100 25Z" stroke="#8B1A2E" strokeWidth="1.2" fill="none" />
    <path d="M100 25C100 25 40 60 60 130C85 60 100 25 100 25Z" stroke="#8B1A2E" strokeWidth="1.2" fill="none" />
    <path d="M100 30C100 30 175 70 150 135C120 70 100 30 100 30Z" stroke="#8B1A2E" strokeWidth="1.2" fill="none" />
    <path d="M100 30C100 30 25 70 50 135C80 70 100 30 100 30Z" stroke="#8B1A2E" strokeWidth="1.2" fill="none" />
  </svg>
);

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const petalsRef = useRef<HTMLDivElement[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const xOffset = (e.clientX / window.innerWidth - 0.5) * 12;
    const yOffset = (e.clientY / window.innerHeight - 0.5) * 12;
    setMousePos({ x: xOffset, y: yOffset });
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    hero.addEventListener("mousemove", handleMouseMove);
    return () => hero.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const clipReveal = {
    hidden: { clipPath: "inset(100% 0 0 0)" },
    visible: { clipPath: "inset(0% 0 0 0)" },
  };

  return (
    <section
      ref={heroRef}
      style={{
        minHeight: "100vh",
        background: "var(--cream)",
        position: "relative",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "54% 46%",
        alignItems: "center",
        paddingTop: "80px",
      }}
    >
      {/* LAYER 1 — Floating Lotus Petals */}
      {PETALS.map((p, i) => (
        <div
          key={i}
          ref={(el) => { if (el) petalsRef.current[i] = el; }}
          style={{
            position: "absolute",
            width: p.size,
            height: p.size,
            top: p.top,
            bottom: (p as any).bottom,
            left: p.left,
            right: (p as any).right,
            opacity: 0.07,
            zIndex: 0,
            animation: `floatPetal ${p.duration} ease-in-out ${p.delay} infinite`,
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
            transition: "transform 0.8s ease-out",
          }}
        >
          <LotusPetalSVG />
        </div>
      ))}

      {/* Left column */}
      <div
        className="hero-left"
        style={{
          paddingLeft: "7%",
          paddingRight: "4%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 3.7, duration: 0.6 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "28px",
          }}
        >
          <div style={{ width: 30, height: 1, background: "var(--gold)" }} />
          <span
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "11px",
              letterSpacing: "0.35em",
              color: "var(--gold)",
            }}
          >
            HYDERABAD'S PREMIER EVENT DESIGNERS
          </span>
        </motion.div>

        {/* Main headline */}
        <div>
          {[
            {
              text: "Turning",
              style: {
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic" as const,
                fontSize: "clamp(44px, 5.5vw, 78px)",
                color: "var(--text-primary)",
                fontWeight: 400,
                lineHeight: 1.1,
              },
            },
            {
              text: "Emotions Into",
              isShimmer: true,
              style: {
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(40px, 5vw, 76px)",
                fontWeight: 700,
                lineHeight: 1.1,
              },
            },
            {
              text: "Celebrations.",
              style: {
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic" as const,
                fontSize: "clamp(44px, 5.5vw, 78px)",
                color: "var(--text-primary)",
                fontWeight: 400,
                lineHeight: 1.1,
              },
            },
          ].map((line, i) => (
            <motion.div
              key={i}
              variants={clipReveal}
              initial="hidden"
              animate="visible"
              transition={{ delay: 3.9 + i * 0.15, duration: 0.8, ease: "easeOut" }}
            >
              <span
                style={
                  line.isShimmer
                    ? {
                        ...line.style,
                        background: "linear-gradient(90deg, #8B1A2E 30%, #C9922A 50%, #8B1A2E 70%)",
                        backgroundSize: "200% auto",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        animation: "textShimmer 5s ease-in-out infinite",
                      }
                    : line.style
                }
              >
                {line.text}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 4.4, duration: 0.6 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            margin: "28px 0",
            transformOrigin: "left",
          }}
        >
          <div style={{ width: 70, height: 1, background: "var(--gold)" }} />
          <svg width="12" height="12" viewBox="0 0 12 12" fill="var(--gold)">
            <rect x="6" y="0" width="6" height="6" transform="rotate(45 6 6)" />
          </svg>
          <div style={{ width: 70, height: 1, background: "var(--gold)" }} />
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.7, duration: 0.6 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "19px",
            lineHeight: 1.9,
            color: "var(--text-muted)",
            maxWidth: 480,
          }}
        >
          From intimate family celebrations to grand corporate galas — we craft
          every detail with Telugu heart and timeless elegance.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5.0, duration: 0.5 }}
          style={{ display: "flex", gap: "16px", marginTop: "32px", flexWrap: "wrap" }}
        >
          <a
            href="#contact"
            className="hero-cta-primary"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "13px",
              letterSpacing: "0.15em",
              padding: "18px 42px",
              background: "var(--crimson)",
              color: "var(--cream)",
              textDecoration: "none",
              display: "inline-block",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "var(--gold)";
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 8px 28px rgba(139,26,46,0.25)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "var(--crimson)";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
          >
            Plan Your Event
          </a>
          <a
            href="#portfolio"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "13px",
              letterSpacing: "0.15em",
              padding: "18px 42px",
              background: "transparent",
              color: "var(--crimson)",
              border: "1.5px solid var(--crimson)",
              textDecoration: "none",
              display: "inline-block",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "var(--crimson)";
              el.style.color = "var(--cream)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "transparent";
              el.style.color = "var(--crimson)";
            }}
          >
            View Our Work
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5.3, duration: 0.5 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginTop: "40px",
            flexWrap: "wrap",
          }}
        >
          {[
            { icon: <Star size={16} color="var(--gold)" />, text: "500+ Events" },
            { icon: <Award size={16} color="var(--gold)" />, text: "8+ Years" },
            { icon: <Heart size={16} color="var(--gold)" />, text: "100% Satisfaction" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              {i > 0 && (
                <div style={{ width: 1, height: 18, background: "rgba(201,146,42,0.4)" }} />
              )}
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "14px",
                  color: "var(--text-muted)",
                }}
              >
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>{item.icon} {item.text}</span>
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right column */}
      <div
        className="hero-right"
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "0 4% 0 0",
          position: "relative",
          zIndex: 2,
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 4.0, duration: 0.8, ease: "easeOut" }}
          className="hero-image-frame"
          style={{
            width: "92%",
            height: "68vh",
            marginTop: "85px",
            background: "linear-gradient(135deg, var(--crimson) 0%, var(--crimson-dark) 40%, var(--gold-dark) 100%)",
            position: "relative",
            borderLeft: "2px solid var(--gold)",
            borderBottom: "2px solid var(--gold)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "18px",
              color: "rgba(250,246,240,0.4)",
              fontStyle: "italic",
              position: "relative",
              zIndex: 1,
            }}
          >
            [ Hero Image / Video ]
          </span>

          {/* Floating badge */}
          <div
            style={{
              position: "absolute",
              bottom: "24px",
              left: "24px",
              background: "var(--crimson)",
              padding: "8px 18px",
              display: "flex",
              alignItems: "center",
              zIndex: 2,
            }}
          >
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "11px",
                color: "var(--gold)",
                letterSpacing: "0.1em",
              }}
            >
              Since 2016
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5.5, duration: 0.5 }}
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          zIndex: 3,
        }}
      >
        <span
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "10px",
            letterSpacing: "0.3em",
            color: "var(--gold)",
          }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "rgba(201,146,42,0.3)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "3px",
              height: "8px",
              borderRadius: "2px",
              background: "var(--gold)",
              position: "absolute",
              left: "-1px",
              animation: "scroll-dot 1.8s ease-in-out infinite",
            }}
          />
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          section {
            grid-template-columns: 1fr !important;
          }
          .hero-left {
            padding: 120px 6% 60px !important;
          }
          .hero-right {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
