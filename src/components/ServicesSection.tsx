import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Cake, Gem, Heart, Star, Sparkles, Home, Crown, Flower2, MessageCircle, PenTool, Settings } from "lucide-react";

const viewport = { once: true, margin: "-80px" };

const services = [
  {
    id: 1,
    index: "01",
    icon: Cake,
    name: "Birthday Parties",
    desc: "We create joyful, vibrant setups that make every birthday feel like the most magical day of the year.",
    image: "/images/birthday.jpg",
    tag: "Celebrations",
  },
  {
    id: 2,
    index: "02",
    icon: Gem,
    name: "Wedding Planning",
    desc: "From the sacred mandap to the last dance — we orchestrate every detail of your most cherished day.",
    image: "/images/wedding.jpg",
    tag: "Weddings",
  },
  {
    id: 3,
    index: "03",
    icon: Heart,
    name: "Engagement Ceremonies",
    desc: "Rings, roses, and perfect moments. We design engagements that feel as extraordinary as your love story.",
    image: "/images/engagement.jpg",
    tag: "Engagements",
  },
  {
    id: 4,
    index: "04",
    icon: Star,
    name: "Baby Showers",
    desc: "Soft, whimsical, and full of wonder — we celebrate the arrival of new life with warmth and beauty.",
    image: "/images/babyshower.jpg",
    tag: "New Beginnings",
  },
  {
    id: 5,
    index: "05",
    icon: Sparkles,
    name: "Theme Parties",
    desc: "From concept to creation, we bring any theme alive with stunning decor, lighting, and immersive design.",
    image: "/images/theme.jpg",
    tag: "Theme Events",
  },
  {
    id: 6,
    index: "06",
    icon: Home,
    name: "Housewarming Events",
    desc: "Bless your new home with warmth, beauty, and the joy of people you love — we handle every detail.",
    image: "/images/housewarming.jpg",
    tag: "Housewarmings",
  },
  {
    id: 7,
    index: "07",
    icon: Crown,
    name: "Anniversary Celebrations",
    desc: "Celebrating years of love deserves nothing ordinary. We craft anniversary moments worth reliving forever.",
    image: "/images/anniversary.jpg",
    tag: "Anniversaries",
  },
  {
    id: 8,
    index: "08",
    icon: Flower2,
    name: "Festive Decor",
    desc: "Traditional grandeur meets modern aesthetics. We transform any space into a festive wonderland.",
    image: "/images/festive.jpg",
    tag: "Festive",
  },
];

const processSteps = [
  { num: "01", icon: MessageCircle, title: "Consult", desc: "We listen to your vision and understand every detail" },
  { num: "02", icon: PenTool, title: "Design", desc: "We craft a tailored plan with decor, flow and budget" },
  { num: "03", icon: Settings, title: "Execute", desc: "Our team brings every element to life flawlessly" },
  { num: "04", icon: Star, title: "Celebrate", desc: "You enjoy your moment — we handle everything else" },
];

/* ━━━ Enquire Link ━━━ */
const EnquireLink = ({ activeIndex }: { activeIndex: number }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        style={{ marginTop: 32 }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            cursor: "pointer",
            width: "fit-content",
            borderBottom: `1px solid ${hovered ? "rgba(201,146,42,0.5)" : "transparent"}`,
            paddingBottom: 4,
            transition: "border-color 0.3s ease",
          }}
        >
          <span style={{ fontFamily: "'Cinzel', serif", fontSize: 12, letterSpacing: "0.15em", color: "var(--gold)" }}>
            Enquire About This
          </span>
          <span
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 12,
              color: "var(--gold)",
              display: "inline-block",
              transition: "transform 0.3s ease",
              transform: hovered ? "translateX(6px)" : "translateX(0)",
            }}
          >
            →
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

/* ━━━ Progress Indicator (inside left panel) ━━━ */
const ProgressIndicator = ({ activeIndex }: { activeIndex: number }) => (
  <div
    style={{
      position: "absolute",
      left: 20,
      top: "50%",
      transform: "translateY(-50%)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      zIndex: 10,
    }}
  >
    {services.map((s, i) => {
      const isActive = i === activeIndex;
      return (
        <div key={s.id} style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div
            style={{
              width: isActive ? 4 : 2,
              height: isActive ? 36 : 14,
              background: isActive ? "var(--gold)" : "rgba(201,146,42,0.25)",
              borderRadius: 2,
              transition: "all 0.4s ease",
            }}
          />
          <span
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 9,
              letterSpacing: "0.1em",
              color: isActive ? "var(--gold)" : "transparent",
              transition: "color 0.4s ease",
            }}
          >
            {s.index}
          </span>
        </div>
      );
    })}
  </div>
);

/* ━━━ Scrollytelling Section ━━━ */
const ScrollytellingServices = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const index = Math.min(Math.floor(latest * 8), 7);
      setActiveIndex(index);
    });
  }, [scrollYProgress]);

  // Preload images
  useEffect(() => {
    services.forEach((s) => {
      const img = new Image();
      img.src = s.image;
    });
  }, []);

  const current = services[activeIndex];
  const CurrentIcon = current.icon;

  return (
    <>
      <div ref={outerRef} style={{ position: "relative", height: "calc(100vh * 10)" }}>
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            width: "100%",
            overflow: "hidden",
            display: "flex",
            border: "none",
            boxShadow: "none",
          }}
        >
          {/* ━━━ LEFT PANEL ━━━ */}
          <div
            style={{
              background: "var(--cream)",
              position: "relative",
              width: "42%",
              height: "100vh",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 6% 0 7%",
              border: "none",
              boxShadow: "none",
              outline: "none",
            }}
          >
            {/* Progress indicator */}
            <ProgressIndicator activeIndex={activeIndex} />

            {/* Lotus watermark */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 0,
                pointerEvents: "none",
                backgroundImage: "radial-gradient(ellipse at center, rgba(139,26,46,0.04) 0%, transparent 70%)",
              }}
            />

            {/* Large index watermark */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "28%",
                  transform: "translateY(-55%)",
                  fontFamily: "'Cinzel', serif",
                  fontSize: 180,
                  fontWeight: 700,
                  color: "rgba(139,26,46,0.035)",
                  lineHeight: 1,
                  userSelect: "none",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              >
                {current.index}
              </motion.div>
            </AnimatePresence>

            {/* Content */}
            <div style={{ position: "relative", zIndex: 1, marginTop: 0, alignSelf: "center" }}>
              {/* Eyebrow */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <span style={{ color: "var(--gold)", fontSize: 10 }}>✦</span>
                <span
                  style={{ fontFamily: "'Cinzel', serif", fontSize: 10, letterSpacing: "0.4em", color: "var(--gold)" }}
                >
                  WHAT WE CRAFT
                </span>
                <span style={{ color: "var(--gold)", fontSize: 10 }}>✦</span>
              </div>

              {/* OUR SERVICES label */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
                <div style={{ width: 32, height: 1, background: "var(--gold)" }} />
                <span
                  style={{ fontFamily: "'Cinzel', serif", fontSize: 10, letterSpacing: "0.45em", color: "var(--gold)" }}
                >
                  OUR SERVICES
                </span>
              </div>

              {/* Icon */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.7, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <CurrentIcon size={32} color="var(--crimson)" />
                </motion.div>
              </AnimatePresence>

              {/* Gold divider */}
              <motion.div
                key={`divider-${activeIndex}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                style={{ width: 48, height: 1, background: "var(--gold)", margin: "16px 0", transformOrigin: "left" }}
              />

              {/* Service name */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
                  style={{ marginTop: 8 }}
                >
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: "italic",
                      fontSize: 60,
                      color: "var(--text-primary)",
                      lineHeight: 1.1,
                      display: "block",
                      maxWidth: 380,
                    }}
                  >
                    {current.name}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Descriptor */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  style={{ marginTop: 20 }}
                >
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 17,
                      color: "var(--text-muted)",
                      lineHeight: 1.9,
                      maxWidth: 340,
                    }}
                  >
                    {current.desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Enquire link */}
              <EnquireLink activeIndex={activeIndex} />
            </div>

            {/* Scroll hint */}
            <AnimatePresence>
              {activeIndex === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    position: "absolute",
                    bottom: "8%",
                    left: "7%",
                    zIndex: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 6,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: 9,
                      letterSpacing: "0.2em",
                      color: "rgba(139,26,46,0.5)",
                    }}
                  >
                    Scroll to explore all services
                  </span>
                  <div
                    style={{
                      width: 1,
                      height: 24,
                      marginLeft: 4,
                      background: "linear-gradient(to bottom, var(--gold), transparent)",
                      animation: "scrollHintBounce 1.5s ease-in-out infinite alternate",
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ━━━ RIGHT PANEL ━━━ */}
          <div style={{ position: "relative", overflow: "hidden", background: "#1a0505" }}>
            {/* All images stacked */}
            {services.map((s, i) => (
              <div
                key={s.id}
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: i === activeIndex ? 1 : 0,
                  transition: "opacity 0.6s ease",
                  overflow: "hidden",
                }}
              >
                <img
                  src={s.image}
                  alt={s.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    transform: i === activeIndex ? "scale(1.0)" : "scale(1.08)",
                    transition: "transform 0.8s ease, opacity 0.6s ease",
                  }}
                />
              </div>
            ))}

            {/* Left gradient bleed */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 2,
                pointerEvents: "none",
                background: "linear-gradient(to right, var(--cream) 0%, rgba(250,246,240,0.4) 12%, transparent 28%)",
              }}
            />

            {/* Bottom gradient */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "40%",
                zIndex: 2,
                background: "linear-gradient(to top, rgba(10,0,0,0.45) 0%, transparent 100%)",
                pointerEvents: "none",
              }}
            />

            {/* Gold corner frames */}
            <div
              style={{
                position: "absolute",
                top: 32,
                right: 32,
                width: 56,
                height: 56,
                borderTop: "1.5px solid rgba(201,146,42,0.7)",
                borderRight: "1.5px solid rgba(201,146,42,0.7)",
                zIndex: 6,
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 32,
                left: 0,
                width: 56,
                height: 56,
                borderBottom: "1.5px solid rgba(201,146,42,0.7)",
                borderLeft: "1.5px solid rgba(201,146,42,0.7)",
                zIndex: 6,
                pointerEvents: "none",
              }}
            />

            {/* Service tag pill */}
            <div style={{ position: "absolute", bottom: 32, right: 32, zIndex: 4 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -16, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  style={{
                    background: "var(--crimson)",
                    padding: "8px 18px",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <CurrentIcon size={14} color="var(--gold)" />
                  <span
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: 10,
                      letterSpacing: "0.2em",
                      color: "rgba(250,246,240,0.9)",
                    }}
                  >
                    {current.tag}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/* ━━━ Process Strip (UNCHANGED) ━━━ */
const ProcessStrip = () => (
  <div
    style={{
      background: "var(--crimson)",
      width: "100%",
      padding: "88px 5% 88px 5%",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Texture overlay */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(250,246,240,0.03) 0px, rgba(250,246,240,0.03) 1px, transparent 1px, transparent 12px)",
      }}
    />

    {/* Header */}
    <div style={{ textAlign: "center", marginBottom: 56, position: "relative" }}>
      <motion.span
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.5 }}
        style={{
          display: "block",
          fontFamily: "'Cinzel', serif",
          fontSize: 11,
          letterSpacing: "0.4em",
          color: "rgba(201,146,42,0.9)",
        }}
      >
        THE ALHADA PROCESS
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.5, delay: 0.15 }}
        style={{
          display: "block",
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          fontSize: 32,
          color: "rgba(250,246,240,0.9)",
          marginTop: 12,
        }}
      >
        From Vision to Celebration
      </motion.span>
    </div>

    {/* Steps grid */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr auto 1fr auto 1fr",
        alignItems: "center",
        maxWidth: 1000,
        margin: "0 auto",
        marginTop: 28,
        gap: 0,
        position: "relative",
      }}
    >
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
              <div
                style={{
                  width: 52,
                  height: 52,
                  position: "relative",
                  zIndex: 2,
                  border: "1px solid rgba(201,146,42,0.4)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px auto",
                  background: "rgba(201,146,42,0.08)",
                }}
              >
                <StepIcon size={20} color="var(--gold)" />
              </div>
              <span
                style={{
                  position: "relative",
                  zIndex: 1,
                  fontFamily: "'Cinzel', serif",
                  fontSize: 13,
                  letterSpacing: "0.2em",
                  color: "rgba(250,246,240,0.95)",
                  marginBottom: 10,
                  display: "block",
                }}
              >
                {step.title}
              </span>
              <p
                style={{
                  position: "relative",
                  zIndex: 1,
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: "rgba(250,246,240,0.6)",
                  maxWidth: 160,
                  margin: "0 auto",
                }}
              >
                {step.desc}
              </p>
            </motion.div>
            {!isLast && (
              <div
                key={`conn-${i}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  padding: "0 8px",
                  marginTop: 28,
                  alignSelf: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 80,
                    height: 1,
                    background:
                      "linear-gradient(to right, rgba(201,146,42,0.2), rgba(201,146,42,0.6), rgba(201,146,42,0.2))",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    fontSize: 10,
                    color: "rgba(201,146,42,0.7)",
                    backgroundColor: "var(--crimson)",
                    padding: "0 6px",
                    lineHeight: "1",
                  }}
                >
                  ✦
                </span>
              </div>
            )}
          </>
        );
      })}
    </div>
  </div>
);

/* ━━━ Main Export ━━━ */
const ServicesSection = () => (
  <section>
    <style>{`
      @keyframes scrollHintBounce {
        0% { transform: translateY(-8px); }
        100% { transform: translateY(8px); }
      }
    `}</style>
    <ScrollytellingServices />
    <ProcessStrip />
  </section>
);

export default ServicesSection;
