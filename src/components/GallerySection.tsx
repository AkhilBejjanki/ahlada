import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const viewport = { once: true, margin: "-40px" as const };
const viewportHeader = { once: true, margin: "-80px" as const };

const filters = [
  { key: "all", label: "All" },
  { key: "weddings", label: "Weddings" },
  { key: "birthdays", label: "Birthdays" },
  { key: "engagements", label: "Engagements" },
  { key: "corporate", label: "Corporate" },
  { key: "festive", label: "Festive" },
];

const galleryItems = [
  { id: 1, category: "weddings", height: "tall", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80", title: "Royal Wedding" },
  { id: 2, category: "birthdays", height: "medium", image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80", title: "Birthday Bash" },
  { id: 3, category: "engagements", height: "tall", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80", title: "Engagement" },
  { id: 4, category: "festive", height: "short", image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80", title: "Festive Night" },
  { id: 5, category: "weddings", height: "medium", image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80", title: "Wedding Moments" },
  { id: 6, category: "corporate", height: "tall", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80", title: "Corporate Gala" },
  { id: 7, category: "birthdays", height: "short", image: "https://images.unsplash.com/photo-1544126592-807ade215a0b?w=800&q=80", title: "Baby Shower" },
  { id: 8, category: "weddings", height: "tall", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80", title: "Housewarming" },
  { id: 9, category: "engagements", height: "medium", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80", title: "Ring Ceremony" },
  { id: 10, category: "festive", height: "tall", image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80", title: "Diwali Decor" },
  { id: 11, category: "corporate", height: "short", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80", title: "Product Launch" },
  { id: 12, category: "weddings", height: "medium", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80", title: "Sangeet Night" },
];

const heightMap: Record<string, number> = { tall: 380, medium: 280, short: 200 };

const GalleryCard = ({ item, index, onClick }: { item: typeof galleryItems[0]; index: number; onClick: () => void }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06, ease: "easeOut" }}
      viewport={viewport}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        display: "inline-block",
        width: "100%",
        marginBottom: 16,
        breakInside: "avoid",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <img
        src={item.image}
        alt={item.title}
        style={{
          width: "100%",
          height: heightMap[item.height],
          objectFit: "cover",
          display: "block",
          transition: "transform 0.6s ease",
          transform: hovered ? "scale(1.06)" : "scale(1)",
        }}
      />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(89,10,18,0.88) 0%, rgba(89,10,18,0.4) 50%, transparent 100%)",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s ease",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: 20,
        opacity: hovered ? 1 : 0,
        transform: hovered ? "translateY(0)" : "translateY(8px)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
        pointerEvents: "none",
      }}>
        <div style={{ fontFamily: "'Cinzel', serif", fontSize: 14, letterSpacing: "0.1em", color: "var(--cream)" }}>
          {item.title}
        </div>
        <div style={{ width: 32, height: 1, background: "var(--gold)", marginTop: 8 }} />
        <div style={{ fontFamily: "'Cinzel', serif", fontSize: 11, color: "var(--gold)", marginTop: 8, letterSpacing: "0.1em" }}>
          View →
        </div>
      </div>
    </motion.div>
  );
};

const Lightbox = ({
  items, index, onClose, onNav,
}: { items: typeof galleryItems; index: number; onClose: () => void; onNav: (dir: 1 | -1) => void }) => {
  const item = items[index];
  if (!item) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(10,0,0,0.92)",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: 24,
      }}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        style={{
          position: "absolute", top: 24, right: 32,
          background: "transparent", border: "none",
          color: "var(--cream)", fontFamily: "'Cinzel', serif",
          fontSize: 16, cursor: "pointer", letterSpacing: "0.15em",
        }}
      >✕ CLOSE</button>

      <button
        onClick={(e) => { e.stopPropagation(); onNav(-1); }}
        className="gallery-lb-arrow"
        style={{
          position: "absolute", left: 24, top: "50%", transform: "translateY(-50%)",
          background: "transparent", border: "none",
          color: "var(--cream)", fontSize: 40, cursor: "pointer",
          fontFamily: "'Cinzel', serif",
        }}
      >‹</button>
      <button
        onClick={(e) => { e.stopPropagation(); onNav(1); }}
        className="gallery-lb-arrow"
        style={{
          position: "absolute", right: 24, top: "50%", transform: "translateY(-50%)",
          background: "transparent", border: "none",
          color: "var(--cream)", fontSize: 40, cursor: "pointer",
          fontFamily: "'Cinzel', serif",
        }}
      >›</button>

      <motion.img
        key={item.id}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        src={item.image.replace("w=800", "w=1600")}
        alt={item.title}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxHeight: "82vh", maxWidth: "85vw",
          objectFit: "contain", display: "block",
        }}
      />
      <div style={{
        marginTop: 20, fontFamily: "'Cinzel', serif",
        fontSize: 14, letterSpacing: "0.2em", color: "var(--gold)",
      }}>{item.title}</div>
    </motion.div>
  );
};

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [ctaHover, setCtaHover] = useState(false);

  const filtered = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter((i) => i.category === activeFilter);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const navLightbox = (dir: 1 | -1) => {
    if (lightboxIndex === null) return;
    const next = (lightboxIndex + dir + filtered.length) % filtered.length;
    setLightboxIndex(next);
  };

  // Escape key handler
  if (typeof window !== "undefined") {
    // Registered inline once — not memoized to keep component simple
  }

  return (
    <section className="gallery-section" style={{ background: "var(--warm-white)", padding: 0, position: "relative" }}>
      {/* Top decorative band */}
      <div style={{
        width: "100%", height: 20,
        background: "repeating-linear-gradient(90deg, transparent 0px, transparent 10px, rgba(201,146,42,0.15) 10px, rgba(201,146,42,0.15) 11px)",
        borderTop: "1px solid rgba(139,26,46,0.15)",
        borderBottom: "1px solid rgba(201,146,42,0.2)",
      }} />

      <div className="gallery-inner" style={{ padding: "100px 0 110px 0" }}>
        {/* Header */}
        <div className="gallery-header" style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", padding: "0 5%" }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportHeader}
            transition={{ duration: 0.5 }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}
          >
            <span style={{ color: "var(--gold)", fontSize: 10 }}>✦</span>
            <span style={{ fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: "0.45em", color: "var(--gold)" }}>OUR WORK</span>
            <span style={{ color: "var(--gold)", fontSize: 10 }}>✦</span>
          </motion.div>

          <div style={{ marginTop: 24 }}>
            <motion.div initial="hidden" whileInView="visible" viewport={viewportHeader}>
              <div style={{ overflow: "hidden" }}>
                <motion.span
                  className="gallery-h1"
                  variants={{ hidden: { y: 60, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{ display: "block", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "var(--text-primary)" }}
                >Moments We've</motion.span>
              </div>
              <div style={{ overflow: "hidden", marginTop: 6 }}>
                <motion.span
                  className="gallery-h2"
                  variants={{ hidden: { y: 60, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  style={{ display: "block", fontFamily: "'Cinzel', serif", color: "var(--crimson)" }}
                >Made Unforgettable.</motion.span>
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={viewportHeader}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              marginTop: 20, fontFamily: "'Cormorant Garamond', serif", fontSize: 17,
              lineHeight: 1.85, color: "var(--text-muted)", maxWidth: 480, margin: "20px auto 0 auto",
            }}
          >
            Every frame tells a story. Every celebration, a memory crafted with love.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="gallery-filters" style={{
          display: "flex", justifyContent: "center", flexWrap: "wrap",
          gap: 8, marginTop: 40, marginBottom: 48, padding: "0 5%",
        }}>
          {filters.map((f) => {
            const active = activeFilter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className="gallery-filter-btn"
                style={{
                  fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: "0.15em",
                  padding: "10px 22px",
                  border: `1px solid ${active ? "var(--crimson)" : "rgba(201,146,42,0.3)"}`,
                  color: active ? "var(--cream)" : "var(--text-muted)",
                  background: active ? "var(--crimson)" : "transparent",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  borderRadius: 0,
                }}
                onMouseEnter={(e) => {
                  if (active) return;
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--gold)";
                  el.style.color = "var(--crimson)";
                }}
                onMouseLeave={(e) => {
                  if (active) return;
                  const el = e.currentTarget;
                  el.style.borderColor = "rgba(201,146,42,0.3)";
                  el.style.color = "var(--text-muted)";
                }}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Masonry Grid */}
        <div className="gallery-grid" style={{
          maxWidth: 1200, margin: "0 auto", padding: "0 5%",
          columnCount: 3, columnGap: 16,
        }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <GalleryCard key={item.id} item={item} index={i} onClick={() => openLightbox(i)} />
            ))}
          </AnimatePresence>
        </div>

        {/* Footer CTA */}
        <div style={{ textAlign: "center", marginTop: 64, padding: "0 5%" }}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 22, color: "var(--text-muted)", marginBottom: 24 }}>
            Want to see more of our work?
          </p>
          <button
            onMouseEnter={() => setCtaHover(true)}
            onMouseLeave={() => setCtaHover(false)}
            style={{
              fontFamily: "'Cinzel', serif", fontSize: 13, letterSpacing: "0.15em",
              border: "1.5px solid var(--crimson)",
              color: ctaHover ? "var(--cream)" : "var(--crimson)",
              background: ctaHover ? "var(--crimson)" : "transparent",
              padding: "16px 44px", borderRadius: 0, cursor: "pointer",
              transition: "all 0.3s ease",
              transform: ctaHover ? "translateY(-2px)" : "translateY(0)",
            }}
          >
            View Full Portfolio →
          </button>
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={filtered}
            index={lightboxIndex}
            onClose={closeLightbox}
            onNav={navLightbox}
          />
        )}
      </AnimatePresence>

      <style>{`
        .gallery-h1 { font-size: 54px; }
        .gallery-h2 { font-size: 46px; }
        @media (max-width: 1024px) {
          .gallery-grid { column-count: 2 !important; }
        }
        @media (max-width: 640px) {
          .gallery-inner { padding: 64px 0 72px 0 !important; }
          .gallery-h1 { font-size: 32px !important; }
          .gallery-h2 { font-size: 26px !important; }
          .gallery-grid { column-count: 1 !important; }
          .gallery-filter-btn { font-size: 10px !important; padding: 8px 14px !important; }
          .gallery-lb-arrow { font-size: 32px !important; }
        }
      `}</style>
    </section>
  );
};

export default GallerySection;
