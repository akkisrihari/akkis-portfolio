import { useEffect } from "react";
import {
  ArrowLeft,
  ArrowDown,
  ArrowUpRight,
  Sprout,
  Waves,
  Leaf,
  CloudSun,
  TrendingUp,
  Droplets,
  Bug,
  Users,
  Landmark,
  FileText,
  Bot,
  Languages,
  CalendarDays,
  ScanSearch,
  MapPinned,
  ShieldCheck,
  Layers3,
  Tractor,
  House,
  FlaskConical,
  ChartNoAxesCombined,
} from "lucide-react";
import farmerLayers from "../assets/farmer-layers.png";
import farmerSatellite from "../assets/farmer-satellite.png";
import "./FarmerAI.css";

const farmerLogo = "/src/assets/farmer-ai-logo.png";
const githubUrl = "https://github.com/akkisrihari";

function Github({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const features = [
  {
    number: "01",
    title: "Home Borewell Intelligence",
    category: "LAND & WATER",
    icon: House,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=700&q=85",
    description:
      "Find potential borewell locations with septic-clearance checks and cost estimation.",
  },
  {
    number: "02",
    title: "Agricultural Groundwater Radar",
    category: "LAND & WATER",
    icon: ScanSearch,
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=700&q=85",
    description:
      "Investigate potential aquifer zones using spatial indicators and available terrain data.",
  },
  {
    number: "03",
    title: "Crop Health Scanner",
    category: "CROP",
    icon: Leaf,
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=700&q=85",
    description:
      "Analyze crop images for possible disease symptoms and practical treatment guidance.",
  },
  {
    number: "04",
    title: "Pre-Sowing Decision Matrix",
    category: "PLANNING",
    icon: Sprout,
    image:
      "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=700&q=85",
    description:
      "Compare crop options for the land and season, including costs and potential returns.",
  },
  {
    number: "05",
    title: "Soil Health Intelligence",
    category: "LAND & WATER",
    icon: FlaskConical,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=700&q=85",
    description:
      "Explore soil type, pH, NPK and micronutrients when reliable data is available.",
  },
  {
    number: "06",
    title: "Weather & Irrigation Advisor",
    category: "WEATHER",
    icon: CloudSun,
    image:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=700&q=85",
    description:
      "Use local weather context to support irrigation scheduling and crop-care decisions.",
  },
  {
    number: "07",
    title: "Market Price & Trends",
    category: "MARKET",
    icon: TrendingUp,
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=700&q=85",
    description:
      "Review available commodity prices and market trends to inform selling decisions.",
  },
  {
    number: "08",
    title: "Fertilizer & Nutrient Advisory",
    category: "CROP",
    icon: Sprout,
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=700&q=85",
    description:
      "Build crop-specific nutrient guidance using available soil and crop information.",
  },
  {
    number: "09",
    title: "Pest & Disease Library",
    category: "CROP",
    icon: Bug,
    image:
      "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=700&q=85",
    description:
      "Explore pest and disease information with identification and management guidance.",
  },
  {
    number: "10",
    title: "Community Knowledge",
    category: "PLANNING",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=700&q=85",
    description:
      "Bring local farming knowledge and nearby agricultural experiences together.",
  },
  {
    number: "11",
    title: "Recharge & Conservation",
    category: "LAND & WATER",
    icon: Waves,
    image:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=700&q=85",
    description:
      "Explore water-conservation approaches such as recharge pits, trenches and runoff management.",
  },
  {
    number: "12",
    title: "Government Schemes",
    category: "SCHEMES",
    icon: Landmark,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=85",
    description:
      "Discover relevant agricultural schemes, subsidies and application guidance.",
  },
  {
    number: "13",
    title: "Farm Dossier & Reports",
    category: "PLANNING",
    icon: FileText,
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=700&q=85",
    description:
      "Organize farm information into useful reports for planning and documentation.",
  },
  {
    number: "14",
    title: "AI Farm Assistant",
    category: "PLANNING",
    icon: Bot,
    image:
      "https://images.unsplash.com/photo-1535378620166-273708d44e4c?auto=format&fit=crop&w=700&q=85",
    description:
      "Ask farming questions and get AI-assisted explanations and next-step guidance.",
  },
  {
    number: "15",
    title: "Multi-Language Support",
    category: "PLANNING",
    icon: Languages,
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=700&q=85",
    description:
      "Make agricultural information more accessible through regional-language support.",
  },
  {
    number: "16",
    title: "Farm Planning & Tracking",
    category: "PLANNING",
    icon: CalendarDays,
    image:
      "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=700&q=85",
    description:
      "Plan, organize and track farm activities throughout the growing season.",
  },
];

const layers = [
  ["01", "Satellite imagery", "Observe the land from above.", Layers3],
  ["02", "Terrain & elevation", "Understand the shape of the land.", MapPinned],
  ["03", "Soil intelligence", "Show soil indicators when available.", FlaskConical],
  ["04", "Water indicators", "Explore potential water-related patterns.", Droplets],
];

const workflow = [
  ["UNDERSTAND", "Bring land, crop and local context together.", MapPinned],
  ["ANALYZE", "Interpret the available evidence and indicators.", ScanSearch],
  ["VALIDATE", "Separate measured values from estimates.", ShieldCheck],
  ["PLAN", "Turn useful insights into practical options.", Tractor],
];

const technologies = [
  "React 19",
  "TypeScript",
  "Vite",
  "Tailwind CSS",
  "Node.js + Express",
  "Google Gemini API",
  "Leaflet + React Leaflet",
  "OpenStreetMap + Photon",
  "Web Audio API",
  "Regional-language support",
];

export default function FarmerAI({ onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const scrollToFeatures = () => {
    document.getElementById("farmer-features")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="farmer-page" id="farmer-top">
      <nav className="farmer-nav">
        <button
          type="button"
          onClick={onBack}
          className="farmer-back"
          aria-label="Back to projects"
        >
          <ArrowLeft size={17} />
          <span>BACK TO PROJECTS</span>
        </button>

        <a href="#farmer-top" className="farmer-nav-brand">
          AKKI SRIHARI <span>●</span>
        </a>

        <div className="farmer-nav-links">
          <a href="#farmer-intro">THE IDEA</a>
          <a href="#farmer-features">FEATURES</a>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GITHUB <ArrowUpRight size={13} />
          </a>
        </div>
      </nav>

      <section className="farmer-hero">
        <div className="farmer-hero-grid" />
        <div className="farmer-hero-glow" />

        <div className="farmer-hero-copy">
          <p className="farmer-eyebrow">
            <span /> AI SPATIAL INTELLIGENCE <i>/</i> AGRICULTURE
          </p>

          <h1>
            Farmer AI
            <span>
              Better farming.
              <br />
              <em>Grounded in real data.</em>
            </span>
          </h1>

          <p className="farmer-hero-description">
            An AI-powered agricultural intelligence platform connecting land
            analysis, soil conditions, crop health, weather and farm planning.
            Clear information, transparent sources and practical guidance —
            without pretending unavailable data is certain.
          </p>

          <div className="farmer-hero-actions">
            <button
              type="button"
              className="farmer-button farmer-button-gold"
              onClick={scrollToFeatures}
            >
              EXPLORE THE FEATURES <ArrowDown size={16} />
            </button>

            <a
              className="farmer-button farmer-button-outline"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={17} /> GITHUB <ArrowUpRight size={15} />
            </a>
          </div>

          <p className="farmer-development">
            <span /> IN DEVELOPMENT <i>·</i> DATA-FIRST APPROACH
          </p>

          <div className="farmer-hero-stats">
            <div>
              <strong>16</strong>
              <span>CORE FEATURES</span>
            </div>
            <div>
              <strong>01</strong>
              <span>CONNECTED PLATFORM</span>
            </div>
            <div>
              <strong>AI</strong>
              <span>ASSISTED INSIGHTS</span>
            </div>
          </div>
        </div>

        <div className="farmer-hero-visual" aria-label="Farmer AI floating logo">
          <div className="farmer-orbit farmer-orbit-one" />
          <div className="farmer-orbit farmer-orbit-two" />
          <div className="farmer-orbit farmer-orbit-three" />

          <span className="farmer-orbit-point point-a" />
          <span className="farmer-orbit-point point-b" />
          <span className="farmer-orbit-point point-c" />

          <div className="farmer-logo-halo">
            <span className="farmer-logo-ring" />
            <span className="farmer-logo-ring farmer-logo-ring-outer" />
            <div className="farmer-logo-disc">
              <img src={farmerLogo} alt="Farmer AI logo" />
            </div>
          </div>

          <span className="farmer-visual-label label-top">
            <i /> SATELLITE DATA
          </span>
          <span className="farmer-visual-label label-left">
            SOIL ANALYSIS
          </span>
          <span className="farmer-visual-label label-right">
            CROP INSIGHTS
          </span>
          <span className="farmer-visual-label label-bottom">
            WEATHER & WATER
          </span>
        </div>

        <a href="#farmer-intro" className="farmer-scroll-cue">
          SCROLL TO EXPLORE <span>↓</span>
        </a>
      </section>

      <section className="farmer-section farmer-intro" id="farmer-intro">
        <div className="farmer-intro-heading">
          <p className="farmer-label">01 / THE FOUNDATION</p>
          <h2>
            Better understanding
            <br />
            of <em>your land, crops and</em>
            <br />
            <em>surroundings.</em>
          </h2>
        </div>

        <div className="farmer-intro-content">
          <p>
            Farming decisions depend on more than one data point. Land
            boundaries, terrain, soil, water, weather and local knowledge all
            matter.
          </p>
          <p>
            Farmer AI aims to bring these different layers into one experience
            so farmers can investigate their land and make better-informed
            decisions.
          </p>
          <div className="farmer-intro-points">
            <span><Layers3 /> MULTI-LAYER DATA</span>
            <span><MapPinned /> LOCAL CONTEXT</span>
            <span><ScanSearch /> AI ANALYSIS</span>
            <span><ShieldCheck /> CLEAR SOURCES</span>
          </div>
        </div>

        <div className="farmer-layers-visual">
          <div className="farmer-layer-stack">
            <img
              src={farmerLayers}
              alt="Satellite, terrain, soil and water layers for farmland"
              className="farmer-layer-image farmer-layers-photo"
            />
          </div>

          <div className="farmer-layer-list">
            {layers.map(([number, title, text, Icon]) => (
              <article key={number}>
                <span className="farmer-layer-icon"><Icon size={21} /></span>
                <div>
                  <small>{number}</small>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <ArrowUpRight size={16} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="farmer-section farmer-preview">
        <div className="farmer-section-heading">
          <div>
            <p className="farmer-label">02 / SEE IT IN ACTION</p>
            <h2>
              From data to
              <br />
              <em>a real understanding.</em>
            </h2>
          </div>
          <p>
            A connected workspace for exploring land information, soil
            indicators, crop health and local context.
          </p>
        </div>

        <div className="farmer-dashboard">
          <aside className="farmer-dashboard-sidebar">
            <div className="farmer-dashboard-brand">
              <b>Farmer AI</b>
            </div>
            {[
              [MapPinned, "Land Analysis"],
              [FlaskConical, "Soil Profile"],
              [Leaf, "Crop Health"],
              [CloudSun, "Weather"],
              [TrendingUp, "Market Prices"],
              [Landmark, "Schemes"],
              [FileText, "Reports"],
            ].map(([Icon, title], index) => (
              <div className={`farmer-sidebar-item ${index === 0 ? "active" : ""}`} key={title}>
                <Icon size={16} /> {title}
              </div>
            ))}
          </aside>

          <div className="farmer-dashboard-main">
            <div className="farmer-search-bar">
              <ScanSearch size={16} />
              <span>Search location, village, survey number...</span>
              <small>⌖ USE MY LOCATION</small>
            </div>

            <div className="farmer-dashboard-map">
              <img
                src={farmerSatellite}
                alt="Satellite imagery showing farmland and surrounding land"
                className="farmer-satellite-image"
              />

              <span className="farmer-map-marker marker-one">⌖</span>
              <span className="farmer-map-marker marker-two">⌖</span>

              <div className="farmer-map-data soil-data">
                <small>SOIL INDICATOR</small>
                <b>Explore soil profile</b>
                <span>Value depends on data availability</span>
              </div>

              <div className="farmer-map-data water-data">
                <small>WATER POTENTIAL</small>
                <b>Spatial indicators</b>
                <span>Not a confirmed measurement</span>
              </div>

              <div className="farmer-map-data area-data">
                <small>LAND AREA</small>
                <b>Parcel overview</b>
                <span>Review available land data</span>
              </div>
            </div>
          </div>

          <aside className="farmer-dashboard-overview">
            <p className="farmer-label">PLOT OVERVIEW</p>
            <div className="farmer-overview-map">
              <div />
            </div>
            <h3>Land details</h3>
            <p>Location <b>Selected parcel</b></p>
            <p>Terrain <b>Data dependent</b></p>
            <p>Soil profile <b>When available</b></p>
            <p>Water insights <b>Indicators only</b></p>
            <button type="button" onClick={scrollToFeatures}>
              EXPLORE FEATURES <ArrowUpRight size={15} />
            </button>
          </aside>
        </div>

        <p className="farmer-disclaimer">
          Interface concept. Example panels are illustrative and do not represent
          live parcel measurements or verified real-time results.
        </p>
      </section>

      <section className="farmer-section farmer-features" id="farmer-features">
        <div className="farmer-section-heading farmer-feature-heading">
          <div>
            <p className="farmer-label">03 / CORE FEATURES</p>
            <h2>
              Better decisions
              <br />
              <em>for every situation.</em>
            </h2>
          </div>
          <div className="farmer-feature-intro">
            <p>
              16 integrated features covering land, water, soil, crops,
              weather, markets, planning and government schemes.
            </p>
            <span>ONE CONNECTED AGRICULTURAL INTELLIGENCE PLATFORM</span>
          </div>
        </div>

        <div className="farmer-feature-grid">
          {features.map(({ number, title, category, icon: Icon, image, description }) => (
            <article className="farmer-feature-card" key={number}>
              <div
                className="farmer-feature-image"
                style={{ backgroundImage: `url("${image}")` }}
              >
                <span className="farmer-feature-number">{number}</span>
                <span className="farmer-feature-image-icon"><Icon size={22} /></span>
                <span className="farmer-feature-image-shade" />
              </div>
              <div className="farmer-feature-card-content">
                <span className="farmer-feature-category">{category}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="farmer-feature-card-bottom">
                  <span>FARM INTELLIGENCE</span>
                  <ArrowUpRight size={17} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="farmer-section farmer-impact">
        <div className="farmer-section-heading">
          <div>
            <p className="farmer-label">04 / BUILT AROUND REAL NEEDS</p>
            <h2>
              From information
              <br />
              <em>to better decisions.</em>
            </h2>
          </div>
          <p>
            The goal is to help farmers investigate options, understand
            uncertainty, plan resources and access useful agricultural
            information in one place.
          </p>
        </div>

        <div className="farmer-impact-grid">
          <article><Layers3 /><h3>Understand the land</h3><p>Bring spatial layers and available local information together.</p></article>
          <article><Droplets /><h3>Use water thoughtfully</h3><p>Support investigation and planning with available water-related indicators.</p></article>
          <article><Leaf /><h3>Make informed crop choices</h3><p>Connect crop health, soil and seasonal context.</p></article>
          <article><ChartNoAxesCombined /><h3>Plan with context</h3><p>Bring farm activities, market context and useful schemes into view.</p></article>
        </div>
      </section>

      <section className="farmer-section farmer-india">
        <div className="farmer-india-copy">
          <p className="farmer-label">05 / BUILT FOR INDIA</p>
          <h2>
            Built for Indian
            <br />
            <em>fields and farmers.</em>
          </h2>
          <p>
            Designed with regional context in mind, including land information,
            soil data, local farming practices and language accessibility.
          </p>

          <div className="farmer-india-points">
            <span><MapPinned /> Indian land context</span>
            <span><Sprout /> Regional crop information</span>
            <span><Languages /> Language accessibility</span>
            <span><Droplets /> Soil and water awareness</span>
          </div>
        </div>

        <div className="farmer-india-visual">
          <div className="farmer-india-sun" />
          <div className="farmer-india-field field-back" />
          <div className="farmer-india-field field-middle" />
          <div className="farmer-india-field field-front" />
          <div className="farmer-india-data-card">
            <span>REGIONAL CONTEXT</span>
            <h3>Land. Water. Crops.</h3>
            <p>Bring locally relevant information into the farming workflow.</p>
            <i>DATA AVAILABILITY MAY VARY BY LOCATION</i>
          </div>
        </div>
      </section>

      <section className="farmer-section farmer-workflow">
        <div className="farmer-section-heading">
          <div>
            <p className="farmer-label">06 / HOW THE SYSTEM THINKS</p>
            <h2>
              Understand.
              <br />
              <em>Analyze. Plan.</em>
            </h2>
          </div>
          <p>
            A data-first product approach that keeps sources and limitations
            visible while translating information into useful next steps.
          </p>
        </div>

        <div className="farmer-workflow-grid">
          {workflow.map(([title, description, Icon], index) => (
            <article key={title}>
              <span className="farmer-workflow-number">0{index + 1}</span>
              <div className="farmer-workflow-icon"><Icon size={25} /></div>
              <h3>{title}</h3>
              <p>{description}</p>
              {index < workflow.length - 1 && <ArrowUpRight className="farmer-workflow-arrow" />}
            </article>
          ))}
        </div>

        <div className="farmer-trust-panel">
          <div className="farmer-trust-symbol"><ShieldCheck size={36} /></div>
          <div>
            <p className="farmer-label">A NON-NEGOTIABLE PRINCIPLE</p>
            <h3>Useful AI. Clear evidence. No fabricated data.</h3>
            <p>
              If a source does not provide a reliable value, the product should
              communicate that limitation rather than invent a measurement.
            </p>
          </div>
        </div>
      </section>

      <section className="farmer-section farmer-status">
        <div className="farmer-section-heading">
          <div>
            <p className="farmer-label">07 / CURRENT STATUS</p>
            <h2>
              A product
              <br />
              <em>still being built.</em>
            </h2>
          </div>
          <p>
            Farmer AI is an evolving project. Data coverage, integrations and
            feature maturity vary, and the platform will continue to improve.
          </p>
        </div>

        <div className="farmer-status-layout">
          <div className="farmer-status-card">
            {[
              ["Product interface & map", "CORE PLATFORM"],
              ["Soil and land analysis", "DATA DEPENDENT"],
              ["Crop health & advisory", "IN DEVELOPMENT"],
              ["Market data integrations", "PLANNED"],
              ["Government scheme coverage", "PLANNED"],
              ["Mobile app expansion", "FUTURE SCOPE"],
            ].map(([title, status], index) => (
              <div key={title}>
                <span className="farmer-status-check">{index < 2 ? "✓" : "○"}</span>
                <b>{title}</b>
                <small>{status}</small>
              </div>
            ))}
          </div>

          <a
            href={githubUrl}
            className="farmer-github-card"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={30} />
            <span>
              <small>FOLLOW THE PROJECT</small>
              <b>Explore the code on GitHub</b>
              <em>View repository <ArrowUpRight size={16} /></em>
            </span>
          </a>
        </div>

        <div className="farmer-tech">
          <p className="farmer-label">TECHNOLOGY FOUNDATION</p>
          <div>
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="farmer-final-cta">
        <div className="farmer-final-grid" />
        <div className="farmer-final-copy">
          <p className="farmer-label">08 / NEXT STEPS</p>
          <h2>
            Let’s build
            <br />
            <em>better farming.</em>
          </h2>
          <p>
            Farmer AI is a work in progress. Explore the project, follow its
            development or connect to discuss ideas for agricultural
            intelligence.
          </p>
          <a href={githubUrl} className="farmer-button farmer-button-gold" target="_blank" rel="noreferrer">
            <Github size={18} /> VIEW ON GITHUB <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      <footer className="farmer-footer">
        <a href="#farmer-top" className="farmer-footer-brand">
          <span>FARMER AI</span>
        </a>
        <span>AI SPATIAL INTELLIGENCE · AGRICULTURE</span>
        <a href="#farmer-top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}