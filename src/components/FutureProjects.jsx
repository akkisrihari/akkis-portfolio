import { useEffect, useRef } from "react";
import "./FutureProjects.css";

const droneFeatures = [
  { icon: "✳", title: "Precision Fertilizer", subtitle: "Targeted application" },
  { icon: "▥", title: "Crop Health", subtitle: "AI-powered monitoring" },
  { icon: "⌘", title: "Pest & Disease", subtitle: "Early detection" },
  { icon: "♧", title: "Irrigation", subtitle: "Water intelligence" },
];

const schemes = [
  {
    icon: "🌾",
    title: "PM Kisan Samman Nidhi",
    category: "Agriculture",
    color: "green",
  },
  {
    icon: "✚",
    title: "Ayushman Bharat",
    category: "Healthcare",
    color: "red",
  },
  {
    icon: "⌂",
    title: "PM Awas Yojana",
    category: "Housing",
    color: "orange",
  },
  {
    icon: "⚒",
    title: "PM Vishwakarma",
    category: "Skill Development",
    color: "blue",
  },
  {
    icon: "♨",
    title: "Ujjwala Yojana",
    category: "Energy",
    color: "purple",
  },
];

function DroneVisual() {
  return (
    <div className="future-drone-scene">
      <div className="drone-sun" />
      <div className="drone-grid" />

      <div className="drone-satellite">
        <span>✦</span>
        <small>SATELLITE DATA</small>
      </div>

      <div className="drone-field">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} style={{ "--field-index": i }} />
        ))}
      </div>

      <div className="drone-machine">
        <div className="drone-rotor rotor-left" />
        <div className="drone-rotor rotor-right" />
        <div className="drone-arm arm-left" />
        <div className="drone-arm arm-right" />
        <div className="drone-body">
          <span className="drone-light" />
        </div>
        <div className="drone-tank" />
        <div className="drone-nozzle" />
      </div>

      <div className="spray-particles">
        {Array.from({ length: 24 }).map((_, i) => (
          <i key={i} style={{ "--particle": i }} />
        ))}
      </div>

      <div className="drone-hud hud-health">
        <span className="hud-kicker">FIELD ANALYSIS</span>
        <div className="hud-row">
          <span>Healthy crops</span>
          <strong>72%</strong>
        </div>
        <div className="hud-bar"><i style={{ width: "72%" }} /></div>
        <div className="hud-row">
          <span>Crop stress</span>
          <strong>18%</strong>
        </div>
        <div className="hud-bar warning"><i style={{ width: "18%" }} /></div>
        <div className="hud-row">
          <span>Disease risk</span>
          <strong>06%</strong>
        </div>
        <div className="hud-bar danger"><i style={{ width: "6%" }} /></div>
      </div>

      <div className="drone-hud hud-map">
        <span className="hud-kicker">PRECISION FIELD MAP</span>
        <div className="field-map-art">
          {Array.from({ length: 16 }).map((_, i) => (
            <i key={i} />
          ))}
        </div>
        <div className="map-legend">
          <span>● Healthy</span>
          <span>● Monitor</span>
          <span>● Attention</span>
        </div>
      </div>

      <div className="drone-hud hud-alert">
        <span className="hud-kicker">DETECTED ISSUE</span>
        <div><i className="status-dot red" /> Pest risk <b>High</b></div>
        <div><i className="status-dot yellow" /> Disease risk <b>Medium</b></div>
        <div><i className="status-dot green" /> Irrigation <b>Monitor</b></div>
      </div>

      <div className="drone-target">
        <span>◎</span>
        <small>TARGETED SPRAYING</small>
      </div>

      <div className="scene-caption">
        <span className="scene-live-dot" />
        INTELLIGENT FIELD MONITORING
      </div>
    </div>
  );
}

function SchemesVisual() {
  return (
    <div className="schemes-scene">
      <div className="india-network">
        <div className="india-outline">
          <span>INDIA</span>
        </div>
        {Array.from({ length: 18 }).map((_, i) => (
          <i key={i} style={{ "--node": i }} />
        ))}
      </div>

      <div className="scheme-float scheme-float-one">
        <span>🌾</span>
        <div><b>PM Kisan</b><small>Support for farmers</small></div>
      </div>
      <div className="scheme-float scheme-float-two">
        <span>🏠</span>
        <div><b>PM Awas Yojana</b><small>Housing assistance</small></div>
      </div>
      <div className="scheme-float scheme-float-three">
        <span>✚</span>
        <div><b>Ayushman Bharat</b><small>Healthcare support</small></div>
      </div>
      <div className="scheme-float scheme-float-four">
        <span>♨</span>
        <div><b>Ujjwala Yojana</b><small>Clean cooking fuel</small></div>
      </div>

      <div className="schemes-phone">
        <div className="phone-island" />
        <div className="phone-status"><span>9:41</span><span>●●● ▰</span></div>

        <div className="phone-brand">
          <span className="bharat-mark">B</span>
          <div><b>Bharat Seva</b><small>Government schemes, simplified</small></div>
        </div>

        <div className="phone-search">⌕ &nbsp; Search schemes...</div>

        <div className="phone-tabs">
          <span className="selected">All</span>
          <span>Central</span>
          <span>State</span>
        </div>

        <div className="phone-section-title">
          <b>Discover schemes</b>
          <small>Explore opportunities for you</small>
        </div>

        <div className="phone-scheme-list">
          {schemes.map((scheme) => (
            <div className="phone-scheme" key={scheme.title}>
              <span className={`scheme-icon ${scheme.color}`}>
                {scheme.icon}
              </span>
              <div>
                <b>{scheme.title}</b>
                <small>{scheme.category}</small>
              </div>
              <span className="scheme-chevron">›</span>
            </div>
          ))}
        </div>

        <div className="phone-bottom-nav">
          <span>⌂<small>Home</small></span>
          <span>⌕<small>Explore</small></span>
          <span>♙<small>Profile</small></span>
        </div>
      </div>

      <div className="scheme-info-card eligibility-card">
        <span className="info-card-icon">✓</span>
        <div><b>ELIGIBILITY CHECK</b><small>Understand who can apply</small></div>
      </div>

      <div className="scheme-info-card documents-card">
        <span className="info-card-icon">▤</span>
        <div><b>DOCUMENT CHECKLIST</b><small>Know what you need</small></div>
      </div>

      <div className="scheme-info-card steps-card">
        <span className="info-card-icon">☷</span>
        <div><b>STEP-BY-STEP GUIDE</b><small>Know how and where to apply</small></div>
      </div>

      <div className="scheme-info-card verified-card">
        <span className="info-card-icon">↗</span>
        <div><b>OFFICIAL SOURCES</b><small>Find verified government links</small></div>
      </div>

      <div className="scheme-scene-caption">
        <span className="scene-live-dot" />
        ONE PLATFORM. MORE ACCESSIBLE SERVICES.
      </div>
    </div>
  );
}

function FutureProjectOne() {
  return (
    <section className="future-screen future-drone" id="future-drone">
      <div className="future-background-grid" />

      <div className="future-copy">
        <div className="future-eyebrow">
          <span /> FUTURE PROJECT 01 <span />
        </div>

        <h2>
          Intelligent
          <em>Agricultural Drones</em>
        </h2>

        <p className="future-tagline">
          Smarter Drones. Healthier Crops. More Efficient Farming.
        </p>

        <div className="future-description">
          <div className="future-detail">
            <span className="future-detail-label">THE PROBLEM</span>
            <p>
              Farmers can struggle to spray crops efficiently, identify
              pest attacks early, and detect crop stress across large
              fields. Manual monitoring takes time, while unnecessary
              spraying can waste resources.
            </p>
          </div>

          <div className="future-detail">
            <span className="future-detail-label">THE SOLUTION</span>
            <p>
              An intelligent agricultural drone combining drone hardware,
              sensors, imaging and AI-assisted analysis. It flies over
              farmland, monitors crop conditions and applies targeted
              pesticide or fertilizer where appropriate.
            </p>
          </div>

          <div className="future-detail">
            <span className="future-detail-label">THE VISION</span>
            <p>
              Help farmers identify problems earlier, reduce unnecessary
              chemical use, and make precision agriculture more accessible.
            </p>
          </div>
        </div>

        <div className="future-feature-grid">
          {droneFeatures.map((feature) => (
            <div className="future-feature" key={feature.title}>
              <span>{feature.icon}</span>
              <div>
                <b>{feature.title}</b>
                <small>{feature.subtitle}</small>
              </div>
            </div>
          ))}
        </div>

        <div className="future-techline">
          HARDWARE ENGINEERING <i /> AI <i /> PRECISION AGRICULTURE
        </div>
        <div className="future-concept-note">FUTURE CONCEPT · NOT YET DEPLOYED</div>
      </div>

      <DroneVisual />
    </section>
  );
}

function FutureProjectTwo() {
  return (
    <section className="future-screen future-schemes" id="future-schemes">
      <div className="future-background-grid" />

      <div className="future-copy">
        <div className="future-eyebrow">
          <span /> FUTURE PROJECT 02 <span />
        </div>

        <h2>
          Government
          <em>Schemes, Simplified</em>
        </h2>

        <p className="future-tagline">
          Every Eligible Opportunity. Easier to Discover. Simpler to Understand.
        </p>

        <div className="future-description">
          <div className="future-detail">
            <span className="future-detail-label">THE PROBLEM</span>
            <p>
              Information about Indian central and state government
              schemes is spread across different websites. People may
              struggle to understand eligibility rules, required
              documents and how to apply.
            </p>
          </div>

          <div className="future-detail">
            <span className="future-detail-label">THE SOLUTION</span>
            <p>
              A unified website and mobile app that helps people discover
              relevant schemes, check eligibility, prepare document
              checklists and follow application instructions with links
              to official government sources.
            </p>
          </div>

          <div className="future-detail">
            <span className="future-detail-label">THE VISION</span>
            <p>
              Make public-service information easier to discover and
              understand, with multilingual access and an AI assistant
              grounded in verified information.
            </p>
          </div>
        </div>

        <div className="future-feature-grid">
          <div className="future-feature">
            <span>⌕</span>
            <div><b>Unified Discovery</b><small>Find relevant schemes</small></div>
          </div>
          <div className="future-feature">
            <span>♙</span>
            <div><b>Eligibility Checker</b><small>Understand who can apply</small></div>
          </div>
          <div className="future-feature">
            <span>▤</span>
            <div><b>Document Checklist</b><small>Know what to prepare</small></div>
          </div>
          <div className="future-feature">
            <span>☷</span>
            <div><b>Application Guidance</b><small>Follow each step</small></div>
          </div>
          <div className="future-feature">
            <span>文</span>
            <div><b>Multilingual Access</b><small>Make information easier to use</small></div>
          </div>
          <div className="future-feature">
            <span>✧</span>
            <div><b>AI Assistance</b><small>Answers grounded in verified sources</small></div>
          </div>
        </div>

        <div className="future-techline">
          AI <i /> WEB APPLICATION <i /> MOBILE APPLICATION <i /> DIGITAL PUBLIC SERVICES
        </div>
        <div className="future-concept-note">FUTURE CONCEPT · NOT YET DEPLOYED</div>
      </div>

      <SchemesVisual />
    </section>
  );
}

export default function FutureProjects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("future-visible");
          }
        });
      },
      { threshold: 0.08 }
    );

    root.querySelectorAll(".future-screen, .future-intro").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="future-projects" ref={sectionRef}>
      {/* INTRODUCTION */}
      <section className="future-intro">
        <div className="future-background-grid" />

        <span className="future-intro-label">
          WHAT'S NEXT
        </span>

        <h2>
          Projects I'll Be Working
          <br />
          <em>on in the Future.</em>
        </h2>

        <p>
          Two ambitious ideas. Two meaningful problems.
          Technology built to make a real-world difference.
        </p>

        <div className="future-intro-line">
          <span />
          FUTURE VISION · ENGINEERING · IMPACT
          <span />
        </div>
      </section>

      <FutureProjectOne />
      <FutureProjectTwo />
    </div>
  );
}