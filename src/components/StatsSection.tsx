import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

const viewport = { once: true, margin: "-80px" as const };

const stats = [
  { value: 500, suffix: "+", label: "Events Crafted" },
  { value: 8, suffix: "+", label: "Years of Excellence" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 10000, suffix: "+", label: "Memories Created" },
];

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

const CountUp = ({ value, suffix }: { value: number; suffix: string }) => {
  const [current, setCurrent] = useState(0);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  const animate = useCallback(() => {
    if (started.current) return;
    started.current = true;
    const duration = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setCurrent(Math.round(easeOut(t) * value));
      if (t < 1) requestAnimationFrame(tick);
      else setDone(true);
    };
    requestAnimationFrame(tick);
  }, [value]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { animate(); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [animate]);

  return (
    <div ref={ref} style={{ lineHeight: 1 }}>
      <span className="stats-number" style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, color: "var(--gold)", letterSpacing: "-0.02em" }}>
        {current.toLocaleString()}
      </span>
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={done ? { opacity: 1, scale: 1 } : {}}
        transition={{ type: "spring", stiffness: 300 }}
        className="stats-suffix"
        style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, color: "var(--gold)" }}
      >
        {suffix}
      </motion.span>
    </div>
  );
};

const LotusSmall = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
    <path d="M12 3C12 3 8 8 8 13c0 3 2 5 4 5s4-2 4-5c0-5-4-10-4-10z" />
    <path d="M12 18c-2 0-6-1-8-5 2 4 5 6 8 6s6-2 8-6c-2 4-6 5-8 5z" />
    <path d="M5 13c0-4 3-8 4-9-3 2-7 6-7 9 0 2 1 4 3 5-1-1-0-3 0-5z" />
    <path d="M19 13c0-4-3-8-4-9 3 2 7 6 7 9 0 2-1 4-3 5 1-1 0-3 0-5z" />
  </svg>
);

const StatsSection = () => (
  <section style={{ position: "relative", overflow: "hidden", padding: 0, background: "#6B1223" }}>
    {/* Atmosphere */}
    <div style={{
      position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
      background: "radial-gradient(ellipse at 50% 45%, rgba(139,26,46,0.9) 0%, rgba(89,10,18,1) 65%, rgba(60,5,15,1) 100%)",
    }} />
    {/* Lotus watermark */}
    <div style={{
      position: "absolute", inset: 0, zIndex: 0, opacity: 0.04,
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 100 100'%3E%3Cellipse cx='50' cy='60' rx='8' ry='14' fill='none' stroke='%23FAF6F0' stroke-width='1.5'/%3E%3Cellipse cx='50' cy='60' rx='8' ry='14' fill='none' stroke='%23FAF6F0' stroke-width='1.5' transform='rotate(40 50 60)'/%3E%3Cellipse cx='50' cy='60' rx='8' ry='14' fill='none' stroke='%23FAF6F0' stroke-width='1.5' transform='rotate(80 50 60)'/%3E%3Cellipse cx='50' cy='60' rx='8' ry='14' fill='none' stroke='%23FAF6F0' stroke-width='1.5' transform='rotate(120 50 60)'/%3E%3Cellipse cx='50' cy='60' rx='8' ry='14' fill='none' stroke='%23FAF6F0' stroke-width='1.5' transform='rotate(160 50 60)'/%3E%3C/svg%3E\")",
      backgroundSize: "120px 120px", backgroundRepeat: "repeat",
    }} />

    {/* Content */}
    <div style={{ position: "relative", zIndex: 1 }}>
      <div className="stats-content-area">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5 }}
          className="stats-eyebrow"
          style={{ textAlign: "center" }}
        >
          <span style={{ fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: "0.45em", color: "rgba(201,146,42,0.85)" }}>
            ✦ THE AHLADA DIFFERENCE ✦
          </span>
        </motion.div>

        {/* Stats grid */}
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={s.label} className="stats-grid-item">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={viewport}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
                className="stats-block"
                style={{ textAlign: "center" }}
              >
                <CountUp value={s.value} suffix={s.suffix} />
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={viewport}
                  transition={{ duration: 0.6, delay: i * 0.1 + 0.3 }}
                  style={{ width: 48, height: 1, background: "var(--gold)", margin: "20px auto", transformOrigin: "center" }}
                />
                <span className="stats-label" style={{ fontFamily: "'Cinzel', serif", letterSpacing: "0.3em", color: "rgba(250,246,240,0.82)", textTransform: "uppercase" }}>
                  {s.label}
                </span>
              </motion.div>
              {i < 3 && (
                <div className="stats-separator" style={{
                  background: "linear-gradient(to bottom, transparent, rgba(201,146,42,0.4), transparent)",
                }} />
              )}
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div className="stats-quote-area" style={{ textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewport}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}
          >
            <div style={{ width: 60, height: 1, background: "var(--gold)" }} />
            <LotusSmall />
            <div style={{ width: 60, height: 1, background: "var(--gold)" }} />
          </motion.div>

          <motion.p
            className="stats-quote-text"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={viewport}
            transition={{ delay: 0.5, duration: 0.7 }}
            style={{
              marginTop: 28, fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
              color: "rgba(250,246,240,0.92)", lineHeight: 1.65,
              maxWidth: 600, marginLeft: "auto", marginRight: "auto",
            }}
          >
            Every event we touch becomes a story worth telling forever.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewport}
            transition={{ delay: 0.7, duration: 0.6 }}
            style={{ width: 80, height: 1, background: "var(--gold)", margin: "28px auto 0 auto", transformOrigin: "center" }}
          />
        </div>
      </div>

      {/* Bottom CTA strip */}
      <div className="stats-cta-strip">
        <span className="stats-cta-text" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "rgba(250,246,240,0.78)" }}>
          Ready to create something extraordinary?
        </span>
        <button
          className="stats-cta-button"
          style={{
            fontFamily: "'Cinzel', serif", fontSize: 12, letterSpacing: "0.15em",
            border: "1.5px solid rgba(201,146,42,0.8)", color: "var(--gold)",
            background: "transparent", borderRadius: 0, cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={e => {
            const t = e.currentTarget;
            t.style.background = "var(--gold)";
            t.style.color = "var(--crimson)";
            t.style.borderColor = "var(--gold)";
            t.style.transform = "translateY(-2px)";
            t.style.boxShadow = "0 6px 24px rgba(201,146,42,0.25)";
          }}
          onMouseLeave={e => {
            const t = e.currentTarget;
            t.style.background = "transparent";
            t.style.color = "var(--gold)";
            t.style.borderColor = "rgba(201,146,42,0.8)";
            t.style.transform = "translateY(0)";
            t.style.boxShadow = "none";
          }}
        >
          Start Planning →
        </button>
      </div>
    </div>

    <style>{`
      .stats-content-area {
        padding: 96px 5% 0 5%;
      }
      .stats-eyebrow {
        margin-bottom: 64px;
      }
      .stats-grid {
        display: grid;
        grid-template-columns: 1fr 1px 1fr 1px 1fr 1px 1fr;
        align-items: center;
        max-width: 1100px;
        margin: 0 auto;
        gap: 0;
      }
      .stats-grid-item {
        display: contents;
      }
      .stats-block {
        padding: 0 40px;
      }
      .stats-separator {
        width: 1px;
        height: 80px;
        align-self: center;
        justify-self: center;
      }
      .stats-number {
        font-size: 88px;
      }
      .stats-suffix {
        font-size: 56px;
      }
      .stats-label {
        font-size: 12px;
      }
      .stats-quote-area {
        margin-top: 72px;
        padding: 0 5%;
      }
      .stats-quote-text {
        font-size: 32px;
      }
      .stats-cta-strip {
        margin-top: 80px;
        background: rgba(0,0,0,0.22);
        padding: 32px 7%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .stats-cta-text {
        font-size: 20px;
      }
      .stats-cta-button {
        padding: 14px 36px;
      }

      @media (max-width: 768px) {
        .stats-content-area {
          padding: 56px 5% 0 5% !important;
        }
        .stats-eyebrow {
          margin-bottom: 40px !important;
        }
        .stats-grid {
          grid-template-columns: 1fr 1fr !important;
          gap: 32px 0 !important;
        }
        .stats-separator {
          display: none !important;
        }
        .stats-block {
          padding: 0 16px !important;
        }
        .stats-number {
          font-size: 48px !important;
        }
        .stats-suffix {
          font-size: 32px !important;
        }
        .stats-label {
          font-size: 10px !important;
          letter-spacing: 0.15em !important;
        }
        .stats-quote-area {
          margin-top: 48px !important;
          padding: 0 4% !important;
        }
        .stats-quote-text {
          font-size: 22px !important;
        }
        .stats-cta-strip {
          margin-top: 48px !important;
          flex-direction: column !important;
          gap: 20px !important;
          text-align: center !important;
          padding: 28px 6% !important;
        }
        .stats-cta-text {
          font-size: 17px !important;
        }
        .stats-cta-button {
          padding: 12px 28px !important;
          width: 100%;
        }
      }
    `}</style>
  </section>
);

export default StatsSection;
