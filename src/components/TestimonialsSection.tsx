import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const viewportHeader = { once: true, margin: "-80px" as const };

const testimonials = [
  {
    id: 1,
    quote: "Ahlada Events transformed our daughter's wedding into the most breathtaking celebration we have ever witnessed. Every detail was perfect, every moment magical.",
    name: "Ramesh & Sunitha Reddy",
    event: "Wedding — Hyderabad",
    initials: "RS",
    rating: 5,
  },
  {
    id: 2,
    quote: "From the first meeting to the last goodbye, the Ahlada team made us feel like royalty. Our anniversary celebration exceeded every expectation we had.",
    name: "Vikram Sharma",
    event: "Anniversary Celebration",
    initials: "VS",
    rating: 5,
  },
  {
    id: 3,
    quote: "The housewarming they designed for us was so beautiful that our guests thought we hired a team from Mumbai. Pure excellence, pure heart.",
    name: "Priya & Karthik Nair",
    event: "Housewarming — Banjara Hills",
    initials: "PK",
    rating: 5,
  },
  {
    id: 4,
    quote: "Our baby shower was a dream. The decor, the flowers, the arrangements — everything spoke of love and warmth. We still get compliments six months later.",
    name: "Meghana Rao",
    event: "Baby Shower",
    initials: "MR",
    rating: 5,
  },
  {
    id: 5,
    quote: "Corporate events are usually boring. Ahlada changed that completely. Our product launch was the talk of the industry for weeks. Exceptional work.",
    name: "Suresh Babu",
    event: "Corporate Launch Event",
    initials: "SB",
    rating: 5,
  },
];

const TestimonialCard = ({ t }: { t: typeof testimonials[0] }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="testimonial-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "white",
        border: `1px solid ${hovered ? "rgba(201,146,42,0.5)" : "rgba(201,146,42,0.2)"}`,
        borderRadius: 0,
        padding: "40px 36px",
        position: "relative",
        flexShrink: 0,
        transition: "box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease",
        boxShadow: hovered ? "0 16px 48px rgba(139,26,46,0.1)" : "none",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <span style={{
        position: "absolute", top: 20, right: 24,
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 96, color: "rgba(201,146,42,0.12)",
        lineHeight: 1, userSelect: "none",
      }}>"</span>

      <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
        {Array.from({ length: t.rating }).map((_, i) => (
          <span key={i} style={{ color: "var(--gold)", fontSize: 14 }}>★</span>
        ))}
      </div>

      <p style={{
        fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
        fontSize: 17, lineHeight: 1.9, color: "var(--text-muted)",
        marginBottom: 28,
      }}>{t.quote}</p>

      <div style={{ width: 40, height: 1, background: "var(--gold)", marginBottom: 20 }} />

      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{
          width: 44, height: 44, borderRadius: "50%",
          background: "var(--crimson)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "'Cinzel', serif", fontSize: 14, color: "var(--cream)",
        }}>{t.initials}</div>
        <div>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: 13, letterSpacing: "0.1em", color: "var(--text-primary)" }}>
            {t.name}
          </div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 13, color: "var(--gold)", marginTop: 2 }}>
            {t.event}
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 640) setVisibleCount(1);
      else if (w < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  useEffect(() => {
    if (currentIndex > maxIndex) setCurrentIndex(0);
  }, [maxIndex, currentIndex]);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 5000);
    return () => clearInterval(id);
  }, [maxIndex]);

  const goPrev = () => setCurrentIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const goNext = () => setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));

  const cardBasis = `calc(${100 / visibleCount}% - ${(24 * (visibleCount - 1)) / visibleCount}px)`;
  const translate = `calc(-${currentIndex} * (${cardBasis} + 24px))`;

  return (
    <section className="testimonials-section" style={{ background: "var(--cream)", padding: "100px 0 110px 0" }}>
      {/* Header */}
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", padding: "0 5%", marginBottom: 64 }}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportHeader}
          transition={{ duration: 0.5 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}
        >
          <span style={{ color: "var(--gold)", fontSize: 10 }}>✦</span>
          <span style={{ fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: "0.45em", color: "var(--gold)" }}>CLIENT STORIES</span>
          <span style={{ color: "var(--gold)", fontSize: 10 }}>✦</span>
        </motion.div>

        <div style={{ marginTop: 24 }}>
          <motion.div initial="hidden" whileInView="visible" viewport={viewportHeader}>
            <div style={{ overflow: "hidden" }}>
              <motion.span
                className="testimonials-h1"
                variants={{ hidden: { y: 60, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ display: "block", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "var(--text-primary)" }}
              >Words From</motion.span>
            </div>
            <div style={{ overflow: "hidden", marginTop: 6 }}>
              <motion.span
                className="testimonials-h2"
                variants={{ hidden: { y: 60, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                style={{ display: "block", fontFamily: "'Cinzel', serif", color: "var(--crimson)" }}
              >Our Happy Families.</motion.span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Carousel */}
      <div style={{ overflow: "hidden", maxWidth: 1200, margin: "0 auto", padding: "0 5%" }}>
        <div style={{
          display: "flex", gap: 24,
          transform: `translateX(${translate})`,
          transition: "transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
        }}>
          {testimonials.map((t) => (
            <div key={t.id} style={{ flex: `0 0 ${cardBasis}`, minWidth: 0 }}>
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div style={{
        display: "flex", justifyContent: "center", alignItems: "center",
        gap: 20, marginTop: 48, padding: "0 5%",
      }}>
        <button
          onClick={goPrev}
          className="testimonials-nav-btn"
          style={{
            width: 44, height: 44, borderRadius: "50%",
            border: "1px solid rgba(201,146,42,0.4)",
            background: "transparent",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", transition: "all 0.3s ease",
            color: "var(--gold)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.background = "var(--crimson)";
            el.style.borderColor = "var(--crimson)";
            el.style.color = "var(--cream)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.background = "transparent";
            el.style.borderColor = "rgba(201,146,42,0.4)";
            el.style.color = "var(--gold)";
          }}
        >
          <ChevronLeft size={18} />
        </button>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === currentIndex ? 32 : 8,
                height: 8,
                background: i === currentIndex ? "var(--crimson)" : "rgba(139,26,46,0.25)",
                borderRadius: 4,
                cursor: "pointer",
                transition: "all 0.4s ease",
                border: "none",
                padding: 0,
              }}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          className="testimonials-nav-btn"
          style={{
            width: 44, height: 44, borderRadius: "50%",
            border: "1px solid rgba(201,146,42,0.4)",
            background: "transparent",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", transition: "all 0.3s ease",
            color: "var(--gold)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.background = "var(--crimson)";
            el.style.borderColor = "var(--crimson)";
            el.style.color = "var(--cream)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.background = "transparent";
            el.style.borderColor = "rgba(201,146,42,0.4)";
            el.style.color = "var(--gold)";
          }}
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Google badge */}
      <div style={{
        display: "flex", justifyContent: "center", alignItems: "center",
        gap: 12, marginTop: 40, flexWrap: "wrap", padding: "0 5%",
      }}>
        <svg width="20" height="20" viewBox="0 0 48 48">
          <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/>
          <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 15.1 18.9 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
          <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 34.9 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
          <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-0.8 2.3-2.2 4.2-4.1 5.6.001-.001.002-.001.003-.002l6.2 5.2C36.9 39.9 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/>
        </svg>
        <span style={{ fontFamily: "'Cinzel', serif", fontSize: 12, letterSpacing: "0.15em", color: "var(--text-muted)" }}>
          RATED 5.0 ON GOOGLE REVIEWS
        </span>
        <span style={{ color: "var(--gold)", letterSpacing: "0.1em" }}>★★★★★</span>
      </div>

      <style>{`
        .testimonials-h1 { font-size: 54px; }
        .testimonials-h2 { font-size: 46px; }
        @media (max-width: 640px) {
          .testimonials-section { padding: 64px 0 72px 0 !important; }
          .testimonials-h1 { font-size: 32px !important; }
          .testimonials-h2 { font-size: 26px !important; }
          .testimonial-card { padding: 28px 24px !important; }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
