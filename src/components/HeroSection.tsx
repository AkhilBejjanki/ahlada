import { motion } from "framer-motion";
import { Star, Award, Heart } from "lucide-react";

const LotusShape = ({ style }: { style: React.CSSProperties }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    style={{
      position: "absolute",
      opacity: 0.06,
      animation: "slow-rotate 90s linear infinite",
      ...style,
    }}
  >
    <path
      d="M100 20C100 20 130 70 100 130C70 70 100 20 100 20Z"
      fill="var(--crimson)"
    />
    <path
      d="M100 20C100 20 155 55 135 125C115 55 100 20 100 20Z"
      fill="var(--crimson)"
    />
    <path
      d="M100 20C100 20 45 55 65 125C85 55 100 20 100 20Z"
      fill="var(--crimson)"
    />
    <path
      d="M100 30C100 30 170 65 145 130C120 65 100 30 100 30Z"
      fill="var(--crimson)"
    />
    <path
      d="M100 30C100 30 30 65 55 130C80 65 100 30 100 30Z"
      fill="var(--crimson)"
    />
  </svg>
);

const HeroSection = () => {
  const clipReveal = {
    hidden: { clipPath: "inset(100% 0 0 0)" },
    visible: { clipPath: "inset(0% 0 0 0)" },
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "var(--cream)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
      }}
    >
      {/* Lotus background decorations */}
      <LotusShape style={{ width: 350, height: 350, top: "-5%", left: "-5%" }} />
      <LotusShape style={{ width: 300, height: 300, top: "60%", left: "10%", animationDirection: "reverse" }} />
      <LotusShape style={{ width: 280, height: 280, top: "10%", left: "45%", animationDelay: "-30s" }} />
      <LotusShape style={{ width: 400, height: 400, top: "50%", right: "-8%", animationDelay: "-60s" }} />
      <LotusShape style={{ width: 320, height: 320, bottom: "-10%", left: "60%", animationDelay: "-45s" }} />
      <LotusShape style={{ width: 260, height: 260, top: "5%", right: "15%", animationDirection: "reverse", animationDelay: "-15s" }} />

      {/* Two-column layout */}
      <div
        style={{
          display: "flex",
          width: "100%",
          minHeight: "100vh",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Left column - 55% */}
        <div
          className="hero-left"
          style={{
            width: "55%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: "8%",
            paddingRight: "4%",
            paddingTop: "130px",
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
                style: {
                  fontFamily: "'Cinzel', serif",
                  fontSize: "clamp(40px, 5vw, 76px)",
                  color: "var(--crimson)",
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
                <span style={line.style}>{line.text}</span>
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

        {/* Right column - 45% */}
        <div
          className="hero-right"
          style={{
            width: "45%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "0 4% 0 0",
            marginTop: "5vh",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 4.0, duration: 0.8, ease: "easeOut" }}
            style={{
              width: "100%",
              height: "78vh",
              background: "linear-gradient(135deg, var(--crimson) 0%, var(--crimson-dark) 40%, var(--gold-dark) 100%)",
              position: "relative",
              borderLeft: "2px solid var(--gold)",
              borderBottom: "2px solid var(--gold)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "18px",
                color: "rgba(250,246,240,0.4)",
                fontStyle: "italic",
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
          .hero-left {
            width: 100% !important;
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
