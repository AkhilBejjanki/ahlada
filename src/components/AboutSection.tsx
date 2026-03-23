import { motion } from "framer-motion";
import { Heart, Eye, Sparkles } from "lucide-react";

const viewport = { once: true, margin: "-80px" };

const LotusOutline = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
    <path d="M12 3C12 3 8 8 8 13c0 3 2 5 4 5s4-2 4-5c0-5-4-10-4-10z" />
    <path d="M12 18c-2 0-6-1-8-5 2 4 5 6 8 6s6-2 8-6c-2 4-6 5-8 5z" />
    <path d="M5 13c0-4 3-8 4-9-3 2-7 6-7 9 0 2 1 4 3 5-1-1-0-3 0-5z" />
    <path d="M19 13c0-4-3-8-4-9 3 2 7 6 7 9 0 2-1 4-3 5 1-1 0-3 0-5z" />
  </svg>
);

const DotGrid = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" style={{ position: "absolute", top: -20, right: -20, zIndex: 3 }}>
    {[0, 1, 2].map(r =>
      [0, 1, 2].map(c => (
        <circle key={`${r}-${c}`} cx={5 + c * 10} cy={5 + r * 10} r={2.5} fill="var(--gold)" opacity={0.7} />
      ))
    )}
  </svg>
);

const stats = ["500+ Events", "8+ Years", "Hyderabad"];
const values = [
  { icon: Heart, name: "Telugu Heart", desc: "Rooted in tradition" },
  { icon: Eye, name: "Modern Vision", desc: "Designed for today" },
  { icon: Sparkles, name: "Personal Touch", desc: "Your day, our priority" },
];

const AboutSection = () => (
  <section style={{ background: "#FDF8F3", borderTop: "1px solid rgba(201,146,42,0.25)", padding: "100px 0", position: "relative", overflow: "hidden" }}>
    {/* Texture overlay */}
    <div style={{
      position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
      backgroundImage: "repeating-linear-gradient(45deg, rgba(139,26,46,0.012) 0px, rgba(139,26,46,0.012) 1px, transparent 1px, transparent 8px)",
    }} />

    <div style={{ position: "relative", zIndex: 1 }}>
      {/* PART A — Section Opener */}
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center", paddingBottom: 80 }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}
        >
          <div style={{ width: 40, height: 1, background: "var(--gold)" }} />
          <span style={{ fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: "0.4em", color: "var(--gold)" }}>OUR STORY</span>
          <div style={{ width: 40, height: 1, background: "var(--gold)" }} />
        </motion.div>

        <div style={{ marginTop: 28 }}>
          {[
            { text: "We Don't Just Plan Events.", font: "'Cormorant Garamond', serif", size: 52, color: "var(--text-primary)", italic: true, delay: 0 },
            { text: "We Craft Memories That Last Forever.", font: "'Cinzel', serif", size: 36, color: "var(--crimson)", italic: false, delay: 0.2 },
          ].map((line, i) => (
            <div key={i} style={{ overflow: "hidden" }}>
              <motion.span
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={viewport}
                transition={{ duration: 0.8, ease: "easeOut", delay: line.delay }}
                style={{ display: "block", fontFamily: line.font, fontSize: line.size, color: line.color, fontStyle: line.italic ? "italic" : "normal", marginTop: i > 0 ? 8 : 0 }}
              >
                {line.text}
              </motion.span>
            </div>
          ))}
        </div>

        {/* Ornamental divider */}
        <div style={{ marginTop: 48, display: "flex", alignItems: "center", justifyContent: "center", gap: 0 }}>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 140 }}
            viewport={viewport}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ height: 1, background: "linear-gradient(to right, transparent, var(--gold))", overflow: "hidden" }}
          />
          <LotusOutline />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 140 }}
            viewport={viewport}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ height: 1, background: "linear-gradient(to left, transparent, var(--gold))", overflow: "hidden" }}
          />
        </div>
      </div>

      {/* PART B — Two Column Story */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 5%", display: "grid", gridTemplateColumns: "45% 55%", gap: 80, alignItems: "start" }}>
        {/* LEFT COLUMN */}
        <div>
          <div style={{ position: "relative", width: "100%" }}>
            {/* Decorative offset frame */}
            <div style={{ position: "absolute", top: -16, left: -16, width: "100%", height: "100%", border: "1.5px solid rgba(201,146,42,0.5)", zIndex: 0, pointerEvents: "none" }} />
            {/* Image with wipe reveal */}
            <div style={{ position: "relative", zIndex: 1, overflow: "hidden" }}>
              <div style={{ width: "100%", aspectRatio: "4/5", minHeight: 420, background: "linear-gradient(145deg, #8B1A2E, #6B1223 40%, #8B6914)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 14, color: "rgba(250,246,240,0.5)" }}>[ Team / Venue Photo ]</span>
              </div>
              <motion.div
                initial={{ scaleX: 1 }}
                whileInView={{ scaleX: 0 }}
                viewport={viewport}
                transition={{ duration: 0.9, ease: "easeInOut", delay: 0.2 }}
                style={{ position: "absolute", inset: 0, background: "var(--crimson)", zIndex: 2, transformOrigin: "right" }}
              />
            </div>
            <DotGrid />
            {/* Badge */}
            <div style={{ position: "absolute", bottom: -12, left: 24, zIndex: 3, background: "var(--crimson)", padding: "8px 16px" }}>
              <span style={{ fontFamily: "'Cinzel', serif", fontSize: 10, letterSpacing: "0.25em", color: "var(--gold)" }}>Est. 2016</span>
            </div>
          </div>

          {/* Stat pills */}
          <div style={{ marginTop: 28, display: "flex", gap: 10 }}>
            {stats.map((s, i) => (
              <motion.div
                key={s}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={viewport}
                transition={{ type: "spring", stiffness: 200, delay: i * 0.1 }}
                style={{ border: "1px solid rgba(201,146,42,0.6)", background: "#FFFAF4", padding: "10px 20px", boxShadow: "0 2px 12px rgba(201,146,42,0.1)" }}
              >
                <span style={{ fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: "0.15em", color: "var(--crimson)" }}>{s}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ paddingLeft: 40, paddingTop: 8 }}>
          <motion.span
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={viewport}
            transition={{ duration: 0.5 }}
            style={{ fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: "0.4em", color: "var(--gold)", display: "block" }}
          >
            ABOUT ALHADA EVENTS
          </motion.span>

          <div style={{ marginTop: 20, marginBottom: 28 }}>
            {["Born From Passion.", "Built On Trust."].map((line, i) => (
              <div key={i} style={{ overflow: "hidden" }}>
                <motion.span
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={viewport}
                  transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.15 }}
                  style={{ display: "block", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 40, color: "var(--text-primary)", lineHeight: 1.25 }}
                >
                  {line}
                </motion.span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 0, display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              "Alhada Events was born with one belief — that every celebration deserves to be extraordinary. Founded in Hyderabad with deep Telugu roots, we bring together traditional elegance and modern creativity in every event we touch.",
              "From the first consultation to the final farewell, we are with you at every step. Our team of passionate designers, decorators, and coordinators treat your event as their own — because for us, this is not just work. This is love.",
            ].map((p, i) => (
              <motion.p
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={viewport}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.15 }}
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 17, lineHeight: 1.95, color: "var(--text-muted)", margin: 0 }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* Values row */}
          <div style={{ marginTop: 44, display: "flex", gap: 0 }}>
            {values.map((v, i) => (
              <div
                key={v.name}
                style={{
                  width: "33.33%", padding: "0 24px", textAlign: "center",
                  borderRight: i < 2 ? "1px solid rgba(201,146,42,0.3)" : "none",
                }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={viewport}
                  transition={{ type: "spring", stiffness: 300, delay: i * 0.1 }}
                >
                  <v.icon size={24} color="var(--gold)" style={{ marginBottom: 12, opacity: 1 }} />
                </motion.div>
                <span style={{ fontFamily: "'Cinzel', serif", fontSize: 13, letterSpacing: "0.2em", color: "var(--crimson)", display: "block" }}>{v.name}</span>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 13, color: "var(--text-muted)", marginTop: 4, display: "block" }}>{v.desc}</span>
              </div>
            ))}
          </div>

          {/* CTA link */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ marginTop: 36 }}
          >
            <a
              href="#"
              className="about-cta-link"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10, cursor: "pointer",
                fontFamily: "'Cinzel', serif", fontSize: 13, color: "var(--gold)",
                textDecoration: "none", position: "relative", paddingBottom: 4,
                borderBottom: "1px solid transparent", transition: "border-color 0.3s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold)"; (e.currentTarget.querySelector('.cta-arrow') as HTMLElement)!.style.transform = "translateX(6px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "transparent"; (e.currentTarget.querySelector('.cta-arrow') as HTMLElement)!.style.transform = "translateX(0)"; }}
            >
              Meet Our Team
              <span className="cta-arrow" style={{ transition: "transform 0.3s", display: "inline-block" }}>→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;