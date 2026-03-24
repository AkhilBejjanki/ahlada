import { useState } from "react";
import { motion } from "framer-motion";
import {
  Cake, Gem, Heart, Star, Sparkles, Home, Crown, Flower2,
  MessageCircle, PenTool, Settings,
} from "lucide-react";

const viewport = { once: true, margin: "-80px" };
const viewportCards = { once: true, margin: "-60px" };

const services = [
  { index: "01", icon: Cake, name: "Birthday Parties", desc: "Joyful setups that light up every age", image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80" },
  { index: "02", icon: Gem, name: "Wedding Planning", desc: "From mandap to memories — every detail", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80" },
  { index: "03", icon: Heart, name: "Engagement Ceremonies", desc: "Rings, roses, and perfect moments", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80" },
  { index: "04", icon: Star, name: "Baby Showers", desc: "Soft, whimsical celebrations of new life", image: "https://images.unsplash.com/photo-1544126592-807ade215a0b?w=600&q=80" },
  { index: "05", icon: Sparkles, name: "Theme Parties", desc: "Concept to creation — we bring it alive", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80" },
  { index: "06", icon: Home, name: "Housewarming Events", desc: "Bless your new home with warmth and beauty", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80" },
  { index: "07", icon: Crown, name: "Anniversary Celebrations", desc: "Celebrating years of love, beautifully", image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&q=80" },
  { index: "08", icon: Flower2, name: "Festive Decor", desc: "Traditional grandeur for every festival", image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&q=80" },
];

const processSteps = [
  { num: "01", icon: MessageCircle, title: "Consult", desc: "We listen to your vision and understand every detail" },
  { num: "02", icon: PenTool, title: "Design", desc: "We craft a tailored plan with decor, flow and budget" },
  { num: "03", icon: Settings, title: "Execute", desc: "Our team brings every element to life flawlessly" },
  { num: "04", icon: Star, title: "Celebrate", desc: "You enjoy your moment — we handle everything else" },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ y: 50, opacity: 0, scale: 0.96 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.65, ease: "easeOut", delay: index * 0.08 }}
      viewport={viewportCards}
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: "relative",
          height: 240,
          overflow: "hidden",
          paddingBottom: 28,
          border: `1px solid rgba(201,146,42,${isHovered ? 0.5 : 0.2})`,
          borderRadius: 0,
          cursor: "pointer",
          transition: "all 0.45s cubic-bezier(0.25,0.46,0.45,0.94)",
          transform: isHovered ? "translateY(-8px)" : "translateY(0)",
          boxShadow: isHovered ? "0 24px 64px rgba(139,26,46,0.18)" : "none",
        }}
      >
        {/* Layer 1: Background Image */}
        <img
          src={service.image}
          alt={service.name}
          style={{
            position: "absolute", inset: 0, zIndex: 0,
            width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center",
            transition: "transform 0.6s ease, opacity 0.45s ease",
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "scale(1.08)" : "scale(1.12)",
          }}
        />

        {/* Layer 2: Cream overlay */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "#FAF6F0",
          opacity: isHovered ? 0 : 1,
          transition: "opacity 0.45s ease",
        }} />

        {/* Layer 2: Dark crimson hover overlay */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 2,
          background: "linear-gradient(to top, rgba(89,10,18,0.88) 0%, rgba(89,10,18,0.70) 50%, rgba(89,10,18,0.50) 100%)",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.45s ease",
        }} />

        {/* Layer 3: Left edge accent */}
        <div style={{
          position: "absolute", left: 0, top: 0, zIndex: 10,
          width: 3, background: "var(--gold)",
          height: isHovered ? "100%" : "0%",
          transition: "height 0.45s ease",
        }} />

        {/* Layer 4: Default content */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 5,
          padding: "32px 28px",
          display: "flex", flexDirection: "column", justifyContent: "flex-start",
          opacity: isHovered ? 0 : 1,
          transform: isHovered ? "translateY(-8px)" : "translateY(0)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}>
          <span style={{
            position: "absolute", top: 12, right: 16,
            fontFamily: "'Cinzel', serif", fontSize: 72, color: "rgba(139,26,46,0.06)",
            lineHeight: 1, userSelect: "none",
          }}>{service.index}</span>
          <Icon size={28} color="var(--crimson)" />
          <div style={{ width: 24, height: 1, background: "var(--gold)", marginTop: 10 }} />
          <div style={{
            fontFamily: "'Cinzel', serif", fontSize: 14,
            letterSpacing: "0.08em", color: "var(--text-primary)", marginTop: 18,
          }}>{service.name}</div>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
            fontSize: 14, lineHeight: 1.6, color: "var(--text-muted)", marginTop: 8,
          }}>{service.desc}</p>
        </div>

        {/* Layer 5: Hover content */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 6,
          padding: "32px 28px",
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.35s ease 0.1s, transform 0.35s ease 0.1s",
        }}>
          <div style={{
            width: isHovered ? 48 : 0, height: 1,
            background: "var(--gold)", marginBottom: 16,
            transition: "width 0.4s ease 0.2s",
          }} />
          <div style={{
            fontFamily: "'Cinzel', serif", fontSize: 18,
            letterSpacing: "0.1em", color: "white", marginBottom: 8,
          }}>{service.name}</div>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
            fontSize: 15, lineHeight: 1.65, color: "rgba(250,246,240,0.82)", marginBottom: 20,
          }}>{service.desc}</p>
          <EnquireNowRow />
        </div>
      </div>
    </motion.div>
  );
};

const EnquireNowRow = () => {
  const [arrHovered, setArrHovered] = useState(false);
  return (
    <div
      style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}
      onMouseEnter={() => setArrHovered(true)}
      onMouseLeave={() => setArrHovered(false)}
    >
      <span style={{ fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: "0.2em", color: "var(--gold)" }}>Enquire Now</span>
      <span style={{
        fontFamily: "'Cinzel', serif", fontSize: 11, color: "var(--gold)",
        display: "inline-block", transition: "transform 0.3s ease",
        transform: arrHovered ? "translateX(5px)" : "translateX(0)",
      }}>→</span>
    </div>
  );
};

const ProcessStrip = () => (
  <div style={{ background: "var(--crimson)", width: "100%", padding: "88px 5% 88px 5%", position: "relative", overflow: "hidden" }}>
    {/* Texture overlay */}
    <div style={{
      position: "absolute", inset: 0, pointerEvents: "none",
      backgroundImage: "repeating-linear-gradient(45deg, rgba(250,246,240,0.03) 0px, rgba(250,246,240,0.03) 1px, transparent 1px, transparent 12px)",
    }} />

    {/* Header */}
    <div style={{ textAlign: "center", marginBottom: 56, position: "relative" }}>
      <motion.span
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.5 }}
        style={{ display: "block", fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: "0.4em", color: "rgba(201,146,42,0.9)" }}
      >THE ALHADA PROCESS</motion.span>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.5, delay: 0.15 }}
        style={{ display: "block", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 32, color: "rgba(250,246,240,0.9)", marginTop: 12 }}
      >From Vision to Celebration</motion.span>
    </div>

    {/* Steps grid */}
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr auto 1fr auto 1fr",
      alignItems: "center",
      maxWidth: 1000, margin: "0 auto", marginTop: 28, gap: 0, position: "relative",
    }}>
      {processSteps.map((step, i) => {
        const StepIcon = step.icon;
        const isLast = i === processSteps.length - 1;
        return (
          <>
            <motion.div
              key={step.num}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{ textAlign: "center", padding: "0 16px", position: "relative" }}
            >
              <div style={{
                position: "absolute", top: -8, left: "50%", transform: "translateX(-50%)",
                fontFamily: "'Cinzel', serif", fontSize: 64, color: "rgba(250,246,240,0.10)",
                lineHeight: 1, userSelect: "none", pointerEvents: "none", zIndex: 0, whiteSpace: "nowrap",
              }}>{step.num}</div>
              <div style={{
                width: 52, height: 52, position: "relative", zIndex: 2,
                border: "1px solid rgba(201,146,42,0.4)", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 16px auto", background: "rgba(201,146,42,0.08)",
              }}>
                <StepIcon size={20} color="var(--gold)" />
              </div>
              <span style={{
                position: "relative", zIndex: 1,
                fontFamily: "'Cinzel', serif", fontSize: 13, letterSpacing: "0.2em",
                color: "rgba(250,246,240,0.95)", marginBottom: 10, display: "block",
              }}>{step.title}</span>
              <p style={{
                position: "relative", zIndex: 1,
                fontFamily: "'Cormorant Garamond', serif", fontSize: 14, lineHeight: 1.6,
                color: "rgba(250,246,240,0.6)", maxWidth: 160, margin: "0 auto",
              }}>{step.desc}</p>
            </motion.div>
            {!isLast && (
              <div key={`conn-${i}`} style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative", padding: "0 8px",
                marginTop: 28, alignSelf: "flex-start",
              }}>
                <div style={{
                  width: 80, height: 1,
                  background: "linear-gradient(to right, rgba(201,146,42,0.2), rgba(201,146,42,0.6), rgba(201,146,42,0.2))",
                }} />
                <span style={{
                  position: "absolute", fontSize: 10, color: "rgba(201,146,42,0.7)",
                  backgroundColor: "var(--crimson)", padding: "0 6px", lineHeight: "1",
                }}>✦</span>
              </div>
            )}
          </>
        );
      })}
    </div>
  </div>
);

const ServicesSection = () => {
  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <section style={{ background: "var(--cream)", padding: "100px 0 0 0", position: "relative", overflow: "hidden" }}>
      {/* Top decorative band */}
      <div style={{
        position: "absolute", top: 0, left: 0, width: "100%", height: 20,
        background: "repeating-linear-gradient(90deg, transparent 0px, transparent 10px, rgba(201,146,42,0.15) 10px, rgba(201,146,42,0.15) 11px)",
        borderTop: "1px solid rgba(139,26,46,0.15)",
        borderBottom: "1px solid rgba(201,146,42,0.2)",
      }} />

      <div style={{ paddingTop: 20 }}>
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
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20,
        }}>
          {services.map((s, i) => (
            <ServiceCard key={s.index} service={s} index={i} />
          ))}
        </div>

        {/* Section Footer CTA */}
        <div style={{ textAlign: "center", marginTop: 64, marginBottom: 80 }}>
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

      {/* Process Strip */}
      <ProcessStrip />
    </section>
  );
};

export default ServicesSection;
