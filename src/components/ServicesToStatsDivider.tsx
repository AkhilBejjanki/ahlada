import { motion } from "framer-motion";

const viewport = { once: true, margin: "-40px" };

const LotusIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.2">
    <path d="M12 3C12 3 8 8 8 13c0 3 2 5 4 5s4-2 4-5c0-5-4-10-4-10z" />
    <path d="M12 18c-2 0-6-1-8-5 2 4 5 6 8 6s6-2 8-6c-2 4-6 5-8 5z" />
    <path d="M5 13c0-4 3-8 4-9-3 2-7 6-7 9 0 2 1 4 3 5-1-1-0-3 0-5z" />
    <path d="M19 13c0-4-3-8-4-9 3 2 7 6 7 9 0 2-1 4-3 5 1-1 0-3 0-5z" />
  </svg>
);

const ServicesToStatsDivider = () => (
  <div className="services-stats-divider">
    <div className="ssd-bg" />

    <div className="ssd-content">
      <div className="ssd-ornament">
        <motion.div
          className="ssd-line ssd-line-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={viewport}
          transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
        >
          <LotusIcon />
        </motion.div>
        <motion.div
          className="ssd-line ssd-line-right"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>

      <motion.p
        className="ssd-whisper"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        The Numbers Speak
      </motion.p>

      <motion.div
        className="ssd-arrow"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <motion.svg
          width="16" height="24" viewBox="0 0 16 24"
          fill="none" stroke="var(--gold)" strokeWidth="1.5"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <path d="M8 2v18M2 16l6 6 6-6" />
        </motion.svg>
      </motion.div>
    </div>

    <style>{`
      .services-stats-divider {
        position: relative;
        overflow: hidden;
        height: 180px;
      }
      .ssd-bg {
        position: absolute;
        inset: 0;
        background: linear-gradient(
          to bottom,
          #FDF8F3 0%,
          #E8D0C0 20%,
          #C4A088 40%,
          #9B6B5A 60%,
          #7A3A3A 80%,
          #6B1223 100%
        );
      }
      .ssd-content {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        gap: 16px;
      }
      .ssd-ornament {
        display: flex;
        align-items: center;
        gap: 16px;
      }
      .ssd-line {
        height: 1px;
        width: 80px;
        background: var(--gold);
        opacity: 0.6;
      }
      .ssd-line-left { transform-origin: right center; }
      .ssd-line-right { transform-origin: left center; }
      .ssd-whisper {
        font-family: 'Cormorant Garamond', serif;
        font-style: italic;
        font-size: 15px;
        color: rgba(250,246,240,0.75);
        letter-spacing: 0.12em;
        margin: 0;
      }
      .ssd-arrow { opacity: 0.5; }

      @media (max-width: 768px) {
        .services-stats-divider { height: 140px; }
        .ssd-line { width: 48px; }
        .ssd-whisper { font-size: 13px; }
      }
    `}</style>
  </div>
);

export default ServicesToStatsDivider;
