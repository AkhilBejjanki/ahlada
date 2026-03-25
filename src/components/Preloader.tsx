import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(true);

  const brandText = "AHLADA EVENTS";
  const tagline = "Turning Your Emotions Into Celebrations";

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 0),
      setTimeout(() => setStep(2), 300),
      setTimeout(() => setStep(3), 800),
      setTimeout(() => setStep(4), 1800),
      setTimeout(() => setStep(5), 2800),
      setTimeout(() => {
        setStep(6);
        setVisible(false);
      }, 3200),
      setTimeout(() => onComplete(), 3900),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <div style={{ position: "fixed", inset: 0, zIndex: 9999, overflow: "hidden" }}>
          {/* Top half */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "50%",
              background: "var(--crimson)",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <div style={{ transform: "translateY(50%)", textAlign: "center" }}>
              {step >= 1 && <LetterA step={step} />}
            </div>
          </motion.div>

          {/* Bottom half */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "50%",
              background: "var(--crimson)",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <div style={{ transform: "translateY(-50%)", textAlign: "center" }}>
              {/* Mirror content for bottom half alignment */}
            </div>
          </motion.div>

          {/* Center content overlay */}
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
              zIndex: 10,
            }}
          >
            <div style={{ textAlign: "center" }}>
              {/* The "A" */}
              {step >= 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "120px",
                    color: "var(--cream)",
                    lineHeight: 1,
                  }}
                >
                  A
                </motion.div>
              )}

              {/* "AHLADA EVENTS" letter by letter */}
              {step >= 3 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "3px",
                    marginTop: "8px",
                  }}
                >
                  {brandText.split("").map((letter, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: i * 0.06,
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                      style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: "18px",
                        color: "var(--gold)",
                        letterSpacing: "0.4em",
                        display: "inline-block",
                        minWidth: letter === " " ? "12px" : undefined,
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
              )}

              {/* Gold line */}
              {step >= 4 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 120 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  style={{
                    height: "1px",
                    background: "var(--gold)",
                    margin: "16px auto",
                  }}
                />
              )}

              {/* Tagline */}
              {step >= 5 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "14px",
                    color: "rgba(250, 246, 240, 0.7)",
                  }}
                >
                  {tagline}
                </motion.p>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const LetterA = ({ step }: { step: number }) => null;

export default Preloader;
