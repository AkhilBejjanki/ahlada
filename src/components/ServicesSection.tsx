import { useState } from "react";
import { motion } from "framer-motion";
import { Cake, Gem, Heart, Star, Sparkles, Home, Crown, Flower2, LucideIcon } from "lucide-react";

const viewport = { once: true, margin: "-80px" };
const viewportCards = { once: true, margin: "-60px" };

const services = [
  { index: "01", icon: Cake, name: "Birthday Parties", desc: "Joyful setups that light up every age" },
  { index: "02", icon: Gem, name: "Wedding Planning", desc: "From mandap to memories — every detail" },
  { index: "03", icon: Heart, name: "Engagement Ceremonies", desc: "Rings, roses, and perfect moments" },
  { index: "04", icon: Star, name: "Baby Showers", desc: "Soft, whimsical celebrations of new life" },
  { index: "05", icon: Sparkles, name: "Theme Parties", desc: "Concept to creation — we bring it alive" },
  { index: "06", icon: Home, name: "Housewarming Events", desc: "Bless your new home with warmth and beauty" },
  { index: "07", icon: Crown, name: "Anniversary Celebrations", desc: "Celebrating years of love, beautifully" },
  { index: "08", icon: Flower2, name: "Festive Decor", desc: "Traditional grandeur for every festival" },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ y: 40, opacity: 0, scale: 0.97 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
      viewport={viewportCards}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: "white",
        border: `1px solid rgba(201,146,42,${hovered ? 0.6 : 0.2})`,
        padding: "36px 28px 32px 28px",
        height: 300,
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.35s cubic-bezier(0.25,0.46,0.45,0.94)",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 60px rgba(139,26,46,0.12)" : "none",
      }}
    >
      {/* Left edge accent */}
      <div style={{
        position: "absolute", left: 0, top: 0, width: 3,
        background: "var(--crimson)", height: hovered ? "100%" : 0,
        transition: "height 0.4s ease", zIndex: 1,
      }} />

      {/* Background bloom */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at bottom center, rgba(139,26,46,0.05) 0%, transparent 70%)",
        opacity: hovered ? 1 : 0, transition: "opacity 0.35s ease",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* Background index */}
      <span style={{
        position: "absolute", top: 12, right: 16,
        fontFamily: "'Cinzel', serif", fontSize: 80, color: "rgba(139,26,46,0.04)",
        lineHeight: 1, pointerEvents: "none", zIndex: 0, userSelect: "none",
      }}>{service.index}</span>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <div style={{ width: 52, height: 52, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon
            size={28}
            color={hovered ? "var(--gold)" : "var(--crimson)"}
            style={{ transition: "transform 0.3s ease, color 0.3s ease", transform: hovered ? "scale(1.15)" : "scale(1)" }}
          />
        </div>
        <div style={{
          width: hovered ? 42 : 24, height: 1,
          background: "var(--gold)", marginTop: 10,
          transition: "width 0.3s ease",
        }} />
        <div style={{
          marginTop: 18, fontFamily: "'Cinzel', serif", fontSize: 14,
          letterSpacing: "0.08em", color: hovered ? "var(--crimson)" : "var(--text-primary)",
          transition: "color 0.3s ease",
        }}>{service.name}</div>
        <p style={{
          marginTop: 8, fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
          fontSize: 14, lineHeight: 1.6, color: "var(--text-muted)", margin: "8px 0 0 0",
        }}>{service.desc}</p>
        <div style={{
          marginTop: 20, display: "flex", alignItems: "center", gap: 6,
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(6px)",
          transition: "opacity 0.3s ease 0.08s, transform 0.3s ease 0.08s",
        }}>
          <span style={{ fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: "0.15em", color: "var(--gold)" }}>Enquire Now</span>
          <span style={{
            fontFamily: "'Cinzel', serif", fontSize: 11, color: "var(--gold)",
            display: "inline-block", transition: "transform 0.3s ease",
            transform: hovered ? "translateX(4px)" : "translateX(0)",
          }}>→</span>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <section style={{ background: "var(--cream)", padding: "0 0 110px 0", position: "relative" }}>
      {/* Top decorative band */}
      <div style={{
        width: "100%", height: 20,
        background: "repeating-linear-gradient(90deg, transparent 0px, transparent 10px, rgba(201,146,42,0.3) 10px, rgba(201,146,42,0.3) 11px)",
        borderTop: "1px solid rgba(139,26,46,0.15)",
        borderBottom: "1px solid rgba(201,146,42,0.2)",
      }} />

      <div style={{ paddingTop: 100 }}>
        {/* Section Header */}
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", paddingBottom: 72 }}>
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={viewport}
            transition={{ duration: 0.5 }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}
          >
            <span style={{ color: "var(--gold)", fontSize: 10 }}>✦</span>
            <span style={{ fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: "0.45em", color: "var(--gold)" }}>WHAT WE CRAFT</span>
            <span style={{ color: "var(--gold)", fontSize: 10 }}>✦</span>
          </motion.div>

          <div style={{ marginTop: 24 }}>
            <motion.div initial="hidden" whileInView="visible" viewport={viewport}>
              <div style={{ overflow: "hidden" }}>
                <motion.span
                  variants={{ hidden: { y: 60, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{ display: "block", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 54, color: "var(--text-primary)" }}
                >Every Occasion,</motion.span>
              </div>
              <div style={{ overflow: "hidden", marginTop: 6 }}>
                <motion.span
                  variants={{ hidden: { y: 60, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  style={{ display: "block", fontFamily: "'Cinzel', serif", fontSize: 46, color: "var(--crimson)" }}
                >Crafted to Perfection.</motion.span>
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={viewport}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              marginTop: 20, fontFamily: "'Cormorant Garamond', serif", fontSize: 17,
              lineHeight: 1.85, color: "var(--text-muted)", maxWidth: 500, margin: "20px auto 0 auto",
            }}
          >
            Eight signature services. One promise — your moments deserve nothing less than extraordinary.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div style={{
          maxWidth: 1200, margin: "0 auto", padding: "0 5%",
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24,
        }}>
          {services.map((s, i) => (
            <ServiceCard key={s.index} service={s} index={i} />
          ))}
        </div>

        {/* Section Footer CTA */}
        <div style={{ textAlign: "center", marginTop: 64 }}>
          <div style={{ width: 80, height: 1, background: "var(--gold)", margin: "0 auto 32px auto" }} />
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5 }}
            style={{ display: "block", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 22, color: "var(--text-muted)", marginBottom: 20 }}
          >Looking for something unique?</motion.span>
          <button
            onMouseEnter={() => setCtaHovered(true)}
            onMouseLeave={() => setCtaHovered(false)}
            style={{
              fontFamily: "'Cinzel', serif", fontSize: 13, letterSpacing: "0.15em",
              border: "1.5px solid var(--crimson)",
              color: ctaHovered ? "var(--cream)" : "var(--crimson)",
              background: ctaHovered ? "var(--crimson)" : "transparent",
              padding: "16px 44px", borderRadius: 0, cursor: "pointer",
              transition: "all 0.3s ease",
              transform: ctaHovered ? "translateY(-2px)" : "translateY(0)",
              boxShadow: ctaHovered ? "0 8px 28px rgba(139,26,46,0.2)" : "none",
            }}
          >Tell Us About Your Event →</button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
