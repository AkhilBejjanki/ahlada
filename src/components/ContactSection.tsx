import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, Youtube, ChevronDown, Check } from "lucide-react";

const viewportHeader = { once: true, margin: "-80px" as const };

const eventTypes = [
  "Select Event Type",
  "Wedding",
  "Engagement",
  "Birthday Party",
  "Baby Shower",
  "Theme Party",
  "Housewarming",
  "Anniversary",
  "Festive Decor",
  "Other",
];

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    eventType: eventTypes[0],
    date: "",
    vision: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <section className="contact-section" style={{
      background: "var(--crimson)", padding: "100px 5% 0 5%",
      position: "relative", overflow: "hidden",
    }}>
      {/* Lotus watermark */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0, opacity: 0.04, pointerEvents: "none",
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 100 100'%3E%3Cellipse cx='50' cy='60' rx='8' ry='14' fill='none' stroke='%23FAF6F0' stroke-width='1.5'/%3E%3Cellipse cx='50' cy='60' rx='8' ry='14' fill='none' stroke='%23FAF6F0' stroke-width='1.5' transform='rotate(40 50 60)'/%3E%3Cellipse cx='50' cy='60' rx='8' ry='14' fill='none' stroke='%23FAF6F0' stroke-width='1.5' transform='rotate(80 50 60)'/%3E%3Cellipse cx='50' cy='60' rx='8' ry='14' fill='none' stroke='%23FAF6F0' stroke-width='1.5' transform='rotate(120 50 60)'/%3E%3Cellipse cx='50' cy='60' rx='8' ry='14' fill='none' stroke='%23FAF6F0' stroke-width='1.5' transform='rotate(160 50 60)'/%3E%3C/svg%3E\")",
        backgroundSize: "120px 120px", backgroundRepeat: "repeat",
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportHeader}
            transition={{ duration: 0.5 }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}
          >
            <span style={{ color: "rgba(201,146,42,0.85)", fontSize: 10 }}>✦</span>
            <span style={{ fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: "0.45em", color: "rgba(201,146,42,0.85)" }}>
              GET IN TOUCH
            </span>
            <span style={{ color: "rgba(201,146,42,0.85)", fontSize: 10 }}>✦</span>
          </motion.div>

          <div style={{ marginTop: 24 }}>
            <motion.div initial="hidden" whileInView="visible" viewport={viewportHeader}>
              <div style={{ overflow: "hidden" }}>
                <motion.span
                  className="contact-h1"
                  variants={{ hidden: { y: 60, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{ display: "block", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "var(--cream)" }}
                >Your Dream Event</motion.span>
              </div>
              <div style={{ overflow: "hidden", marginTop: 6 }}>
                <motion.span
                  className="contact-h2"
                  variants={{ hidden: { y: 60, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  style={{ display: "block", fontFamily: "'Cinzel', serif", color: "var(--gold)" }}
                >Starts Here.</motion.span>
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={viewportHeader}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              marginTop: 24, marginBottom: 72,
              fontFamily: "'Cormorant Garamond', serif", fontSize: 18,
              color: "rgba(250,246,240,0.75)",
            }}
          >
            Tell us about your vision and we'll make it extraordinary.
          </motion.p>
        </div>

        {/* Two column */}
        <div className="contact-grid" style={{ maxWidth: 1200, margin: "0 auto", paddingBottom: 100 }}>
          {/* Left */}
          <div>
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: "0.35em", color: "var(--gold)", marginBottom: 32 }}>
              REACH US DIRECTLY
            </div>

            {[
              { icon: Phone, label: "CALL US", value: "+91 98765 43210" },
              { icon: Mail, label: "EMAIL US", value: "hello@ahladaevents.com" },
              { icon: MapPin, label: "FIND US", value: "Hyderabad, Telangana, India" },
            ].map((c, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 28 }}>
                <c.icon size={20} color="var(--gold)" style={{ marginTop: 4, flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: "'Cinzel', serif", fontSize: 10, letterSpacing: "0.2em", color: "rgba(250,246,240,0.5)" }}>
                    {c.label}
                  </div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, color: "var(--cream)", marginTop: 4 }}>
                    {c.value}
                  </div>
                </div>
              </div>
            ))}

            {/* WhatsApp button */}
            <button
              onClick={() => window.open("https://wa.me/919876543210", "_blank")}
              style={{
                marginTop: 40, width: "100%",
                background: "#25D366", border: "none",
                display: "flex", alignItems: "center", justifyContent: "center",
                gap: 10, padding: "16px 0", cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.filter = "brightness(1.1)";
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow = "0 8px 24px rgba(37,211,102,0.3)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.filter = "none";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              <MessageCircle size={20} color="white" />
              <span style={{ fontFamily: "'Cinzel', serif", fontSize: 13, color: "white", letterSpacing: "0.1em" }}>
                Chat on WhatsApp
              </span>
            </button>

            {/* Social row */}
            <div style={{ marginTop: 32, display: "flex", gap: 16 }}>
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <button
                  key={i}
                  style={{
                    width: 44, height: 44,
                    border: "1px solid rgba(201,146,42,0.4)",
                    background: "transparent",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer", transition: "all 0.3s ease",
                    color: "var(--gold)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "var(--gold)";
                    el.style.color = "var(--crimson)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "transparent";
                    el.style.color = "var(--gold)";
                  }}
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div>
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: "0.35em", color: "var(--gold)", marginBottom: 32 }}>
              PLAN YOUR EVENT
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                  style={{ textAlign: "center", padding: "48px 0" }}
                >
                  <Check size={48} color="var(--gold)" style={{ margin: "0 auto" }} />
                  <div style={{ fontFamily: "'Cinzel', serif", fontSize: 28, color: "var(--cream)", marginTop: 20 }}>
                    Thank You!
                  </div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 18, color: "rgba(250,246,240,0.75)", marginTop: 12 }}>
                    We'll be in touch within 24 hours.
                  </div>
                </motion.div>
              ) : (
                <motion.div key="form" exit={{ opacity: 0 }}>
                  {[
                    { key: "name", label: "YOUR NAME", type: "text", placeholder: "Tharun Kumar" },
                    { key: "phone", label: "PHONE NUMBER", type: "tel", placeholder: "+91 98765 43210" },
                  ].map((f) => (
                    <ContactField key={f.key} label={f.label}>
                      <input
                        type={f.type}
                        value={form[f.key as keyof typeof form]}
                        onChange={update(f.key as keyof typeof form)}
                        placeholder={f.placeholder}
                        className="contact-input"
                      />
                    </ContactField>
                  ))}

                  <ContactField label="EVENT TYPE">
                    <div style={{ position: "relative" }}>
                      <select
                        value={form.eventType}
                        onChange={update("eventType")}
                        className="contact-input contact-select"
                      >
                        {eventTypes.map((t) => (
                          <option key={t} value={t} style={{ background: "var(--crimson)", color: "var(--cream)" }}>{t}</option>
                        ))}
                      </select>
                      <ChevronDown size={18} color="var(--gold)" style={{
                        position: "absolute", right: 0, top: "50%",
                        transform: "translateY(-50%)", pointerEvents: "none",
                      }} />
                    </div>
                  </ContactField>

                  <ContactField label="EVENT DATE">
                    <input type="date" value={form.date} onChange={update("date")} className="contact-input" />
                  </ContactField>

                  <ContactField label="TELL US YOUR VISION">
                    <textarea
                      value={form.vision}
                      onChange={update("vision")}
                      rows={4}
                      placeholder="Describe your dream event..."
                      className="contact-input"
                      style={{ resize: "none" }}
                    />
                  </ContactField>

                  <button
                    onClick={handleSubmit}
                    style={{
                      marginTop: 36, width: "100%",
                      background: "var(--gold)", color: "var(--crimson)",
                      fontFamily: "'Cinzel', serif", fontSize: 13, letterSpacing: "0.2em",
                      padding: "18px 0", border: "none", cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.background = "var(--gold-light)";
                      el.style.transform = "translateY(-2px)";
                      el.style.boxShadow = "0 8px 28px rgba(201,146,42,0.35)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.background = "var(--gold)";
                      el.style.transform = "translateY(0)";
                      el.style.boxShadow = "none";
                    }}
                  >
                    SEND YOUR ENQUIRY →
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        .contact-h1 { font-size: 54px; }
        .contact-h2 { font-size: 46px; }
        .contact-grid {
          display: grid;
          grid-template-columns: 52% 48%;
          gap: 80px;
        }
        .contact-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(201,146,42,0.4);
          padding: 10px 0;
          color: var(--cream);
          font-family: 'Cormorant Garamond', serif;
          font-size: 17px;
          outline: none;
          transition: border-color 0.3s ease;
          border-radius: 0;
          appearance: none;
        }
        .contact-input:focus {
          border-bottom-color: var(--gold);
        }
        .contact-input::placeholder {
          color: rgba(250,246,240,0.3);
        }
        .contact-select {
          appearance: none;
          -webkit-appearance: none;
          padding-right: 32px;
          cursor: pointer;
        }
        input[type="date"].contact-input::-webkit-calendar-picker-indicator {
          filter: invert(64%) sepia(52%) saturate(496%) hue-rotate(3deg) brightness(94%) contrast(88%);
          cursor: pointer;
        }
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 56px !important;
          }
        }
        @media (max-width: 640px) {
          .contact-section { padding: 64px 6% 0 6% !important; }
          .contact-h1 { font-size: 32px !important; }
          .contact-h2 { font-size: 26px !important; }
        }
      `}</style>
    </section>
  );
};

const ContactField = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 28, position: "relative" }}>
    <label style={{
      fontFamily: "'Cinzel', serif", fontSize: 10, letterSpacing: "0.2em",
      color: "rgba(201,146,42,0.75)", marginBottom: 8, display: "block",
    }}>{label}</label>
    {children}
  </div>
);

export default ContactSection;
