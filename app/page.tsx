
const TruckIllustration = () => (
  <svg viewBox="0 0 680 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="truck-art">
    <ellipse cx="340" cy="264" rx="270" ry="15" fill="#168BFF" opacity=".12" />
    <path d="M28 235H650" stroke="#24466B" strokeWidth="2" strokeDasharray="7 10" />
    <g className="truck-body">
      <rect x="65" y="91" width="370" height="132" rx="13" fill="#153253" stroke="#398FFF" strokeWidth="2" />
      <path d="M87 113H412V201H87V113Z" fill="#102640" />
      <path d="M105 132H390" stroke="#398FFF" strokeWidth="2" opacity=".45" />
      <path d="M105 151H390" stroke="#398FFF" strokeWidth="2" opacity=".2" />
      <path d="M105 170H390" stroke="#398FFF" strokeWidth="2" opacity=".2" />
      <path d="M105 189H390" stroke="#398FFF" strokeWidth="2" opacity=".2" />
      <path d="M435 143H507L566 190V223H435V143Z" fill="#1676D9" stroke="#52ACFF" strokeWidth="2" />
      <path d="M451 155H496L537 190H451V155Z" fill="#9EDBFF" opacity=".9" />
      <path d="M504 155L545 190H504V155Z" fill="#D7F2FF" opacity=".65" />
      <path d="M435 143V223" stroke="#52ACFF" strokeWidth="2" />
      <path d="M65 223H566" stroke="#6DBBFF" strokeWidth="4" />
      <rect x="450" y="204" width="19" height="7" rx="3" fill="#BCE5FF" />
      <rect x="530" y="204" width="20" height="7" rx="3" fill="#FFBD68" />
      <rect x="63" y="210" width="17" height="9" rx="3" fill="#FFBD68" />
      <circle cx="167" cy="231" r="30" fill="#071525" stroke="#5BAEFF" strokeWidth="5" />
      <circle cx="167" cy="231" r="12" fill="#9BCFFF" />
      <circle cx="487" cy="231" r="30" fill="#071525" stroke="#5BAEFF" strokeWidth="5" />
      <circle cx="487" cy="231" r="12" fill="#9BCFFF" />
      <path d="M167 215V247M151 231H183M487 215V247M471 231H503" stroke="#153253" strokeWidth="3" />
      <text x="250" y="166" fill="#FFFFFF" fontSize="25" fontWeight="800" letterSpacing="3" textAnchor="middle">LoadHUB</text>
      <text x="250" y="185" fill="#72BFFF" fontSize="9" letterSpacing="3" textAnchor="middle">SMART FREIGHT NETWORK</text>
    </g>
    <path d="M85 67L105 42L125 67" stroke="#398FFF" strokeWidth="2" opacity=".55" />
    <path d="M560 100L575 82L590 100" stroke="#398FFF" strokeWidth="2" opacity=".55" />
  </svg>
);

export default function Home() {
  return (
    <main className="landing-page">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <nav className="navbar">
        <a href="/" className="brand">
          <span className="brand-icon">L</span>
          <span>Load<span className="brand-blue">HUB</span></span>
        </a>
        <span className="status-pill">
          <span className="status-dot" />
          SOMETHING BIG IS COMING
        </span>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            PAKISTAN&apos;S SMART FREIGHT NETWORK
            <span className="eyebrow-line" />
          </div>

          <h1>
            The Future of
            <br />
            <span className="gradient-text">Freight Starts Here.</span>
          </h1>

          <p className="hero-description">
            A smarter way to connect loads, trucks and transport businesses.
            We&apos;re building something that will move Pakistan forward.
          </p>

          <div className="launch-label">
            <span className="launch-star">✦</span>
            WE&apos;RE GETTING READY TO LAUNCH
            <span className="launch-star">✦</span>
          </div>

          <h2 className="coming-soon">COMING SOON<span>.</span></h2>

          <div className="hero-divider">
            <span />
            <span className="divider-center" />
            <span />
          </div>

          <p className="tagline">
            Built for Pakistan. <strong>Ready for the World.</strong>
          </p>
        </div>

        <div className="truck-section">
          <div className="truck-glow" />
          <TruckIllustration />
          <div className="road-line" />
          <div className="road-label">POWERING THE NEXT GENERATION OF LOGISTICS</div>
        </div>
      </section>

      <footer className="footer">
        <span>© 2026 LoadHUB. All rights reserved.</span>
        <span className="footer-domain">LOADHUBPK.COM</span>
        <span>Pakistan <span className="pak-flag">✦</span></span>
      </footer>
    </main>
  );
}
