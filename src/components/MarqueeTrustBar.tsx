const content = "✦ 150+ Events Celebrated  ✦  2 Years of Excellence  ✦  Weddings · Birthdays · Corporates  ✦  Hyderabad & Beyond  ✦  Telugu Roots. Global Standards.  ";

const MarqueeTrustBar = () => (
  <div
    style={{
      background: "var(--crimson)",
      height: "52px",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      width: "100%",
    }}
    className="marquee-wrapper"
  >
    <div
      style={{
        display: "flex",
        whiteSpace: "nowrap",
        animation: "marquee 30s linear infinite",
      }}
      className="marquee-track"
    >
      {[0, 1].map((i) => (
        <span
          key={i}
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "12px",
            letterSpacing: "0.25em",
            color: "var(--gold)",
            paddingRight: "24px",
          }}
        >
          {content}
        </span>
      ))}
    </div>
    <style>{`
      .marquee-wrapper:hover .marquee-track {
        animation-play-state: paused;
      }
    `}</style>
  </div>
);

export default MarqueeTrustBar;
