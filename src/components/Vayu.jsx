import { useEffect, useRef, useState } from "react";
import "./Vayu.css";
import achievementPhoto1 from "../assets/vayuvega-achievement-1.png";
import achievementPhoto2 from "../assets/vayuvega-achievement-2.png";
import vayuOneSlide from "../assets/Vayu_One_Slide.png";

import vayuShortVideo from "../assets/videos/vayu-short-compressed.mp4";
import vayuFullVideo from "../assets/videos/vayu-full-compressed.mp4";

const screenshots = [
  {
    image: "/src/assets/vayu-shot-1.png",
    title: "Spatial Analysis & Mapping",
  },
  {
    image: "/src/assets/vayu-shot-2.png",
    title: "AI-Powered Spatial Insights",
  },
  {
    image: "/src/assets/vayu-shot-3.png",
    title: "Real-World Planning & Simulation",
  },
  {
    image: "/src/assets/vayu-shot-4.png",
    title: "Agricultural Intelligence",
  },
];

const techGroups = [
  {
    title: "AI / ML",
    items: ["Python", "Gemini", "LLMs", "Spatial AI"],
  },
  {
    title: "GEOSPATIAL",
    items: [
      "Google Earth Engine",
      "OpenStreetMap",
      "Raster / Vector",
      "GeoPandas",
    ],
  },
  {
    title: "FRONTEND",
    items: ["React", "Mapbox", "Three.js", "Tailwind CSS"],
  },
  {
    title: "BACKEND",
    items: ["FastAPI", "PostgreSQL", "PostGIS", "Cloud"],
  },
];

export default function Vayu({ onBack }) {
  const logoRef = useRef(null);
  const [showAchievements, setShowAchievements] = useState(false);
  const [showWalkthroughs, setShowWalkthroughs] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    let frame;

    const animate = () => {
      const time = performance.now() / 1000;

      if (logoRef.current) {
        const y = Math.sin(time * 0.9) * 10;
        const rotate = Math.sin(time * 0.45) * 1.2;

        logoRef.current.style.transform =
          `translate3d(0, ${y}px, 0) rotate(${rotate}deg)`;
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, []);

  const openLiveDemo = () => {
    window.open(
      "https://ai-spatial-intelligence.vercel.app",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const openGitHub = () => {
    window.open(
      "https://github.com/akkisrihari/AI-Spatial-Intelligence",
      "_blank",
      "noopener,noreferrer"
    );
  };

  useEffect(() => {
    if (!showAchievements) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowAchievements(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showAchievements]);

  return (
    <section className="vayu-page">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="vayu-page-grid" />

      {/* =====================================================
          TOP
      ===================================================== */}

      <header className="vayu-hero">

        <div className="vayu-hero-left">

          <button
            className="vayu-back"
            type="button"
            onClick={onBack}
          >
            ← BACK TO PROJECTS
          </button>

          <span className="vayu-eyebrow">
            01 / PROJECT
          </span>

          <div className="vayu-title-row">

            <h1>
              VAYU
            </h1>

            <span className="vayu-status">
              <i />
              IN DEVELOPMENT
            </span>

          </div>

          <h2>
            AI SPATIAL INTELLIGENCE
          </h2>

          <p className="vayu-hero-description">
            An AI spatial intelligence platform that combines
            geospatial data, spatial reasoning, and AI to
            understand real-world spaces and generate
            actionable insights across agriculture, home
            planning, construction and more.
          </p>

          <div className="vayu-actions">

            <button
              className="vayu-button vayu-button-live"
              type="button"
              onClick={openLiveDemo}
            >
              GO LIVE <span>↗</span>
            </button>

            <button
              className="vayu-button"
              type="button"
              onClick={() => setShowWalkthroughs(true)}
            >
              WATCH WALKTHROUGH <span>▶</span>
            </button>

            <button
              className="vayu-button"
              type="button"
              onClick={openGitHub}
            >
              GITHUB <span>↗</span>
            </button>

            <button
              className="vayu-button vayu-achievement-button"
              type="button"
              onClick={() => setShowAchievements(true)}
            >
              ACHIEVEMENTS <span>🏆</span>
            </button>

          </div>

        </div>


        {/* ===================================================
            HERO META
        =================================================== */}

        <div className="vayu-hero-meta">

          <div>
            <span>DOMAIN</span>
            <strong>
              Geospatial Intelligence
            </strong>
          </div>

          <div>
            <span>CURRENT FOCUS</span>
            <strong>
              Agriculture · Home · Construction
            </strong>
          </div>

          <div>
            <span>PLATFORM</span>
            <strong>
              Web Application
            </strong>
          </div>

          <div>
            <span>ROLE</span>
            <strong>
              Product · AI · Full Stack
            </strong>
          </div>

        </div>


        {/* ===================================================
            FLOATING LOGO
        =================================================== */}

        <div className="vayu-hero-visual">

          <div className="vayu-orbit orbit-a" />
          <div className="vayu-orbit orbit-b" />
          <div className="vayu-orbit orbit-c" />

          <div className="vayu-glow" />

          <div
            ref={logoRef}
            className="vayu-floating-logo"
          >
            <img
              src="/src/assets/vayu-logo.png"
              alt="Vayu"
            />
          </div>

          <div className="vayu-visual-label">
            <span>MAP</span>
            <span>ANALYZE</span>
            <span>UNDERSTAND</span>
            <span>REASON</span>
            <span>PLAN</span>
            <span>VISUALIZE</span>
          </div>

        </div>

      </header>


      {/* =====================================================
          PRODUCT PREVIEW
      ===================================================== */}

      <section className="vayu-preview">

        <div className="vayu-preview-heading">

          <span>
            PRODUCT PREVIEW
          </span>

          <h2>
            See Vayu in Action
          </h2>

          <p>
            A glimpse into the platform, its spatial
            analysis, insights and real-world applications.
          </p>

        </div>

        <div className="vayu-screens">

          {screenshots.map((shot, index) => (
            <article
              className={`vayu-screen ${
                index === 0 ? "active" : ""
              }`}
              key={shot.title}
            >

              <div className="vayu-screen-image">

                <img
                  src={shot.image}
                  alt={shot.title}
                />

              </div>

              <span>
                {shot.title}
              </span>

            </article>
          ))}

        </div>

      </section>


      {/* =====================================================
          WHAT / PROBLEM / USERS / GAP
      ===================================================== */}

      <section className="vayu-four-column">

        <article>

          <span className="vayu-section-label">
            WHAT IS VAYU?
          </span>

          <h3>
            Understand the world
            through spatial intelligence.
          </h3>

          <p>
            Vayu is an AI spatial intelligence platform
            that combines geospatial data, spatial
            reasoning, and AI to understand real-world
            spaces and generate actionable insights
            across multiple domains.
          </p>

        </article>


        <article>

          <span className="vayu-section-label">
            THE PROBLEM
          </span>

          <h3>
            Complex data.
            Difficult decisions.
          </h3>

          <p>
            Real-world decisions in agriculture,
            construction and home planning rely on
            fragmented data sources, complex tools and
            specialized knowledge.
          </p>

        </article>


        <article>

          <span className="vayu-section-label">
            WHO IS IT FOR?
          </span>

          <ul>
            <li>
              Farmers & Agricultural Experts
            </li>

            <li>
              Homeowners & Land Buyers
            </li>

            <li>
              Construction & Real Estate Teams
            </li>

            <li>
              Urban Planners & Organizations
            </li>
          </ul>

        </article>


        <article>

          <span className="vayu-section-label">
            EXISTING SOLUTIONS & GAP
          </span>

          <div className="vayu-existing">

            <strong>
              Google Earth
            </strong>

            <strong>
              ArcGIS
            </strong>

            <strong>
              QGIS
            </strong>

            <strong>
              Trimble
            </strong>

          </div>

          <ul className="vayu-gap-list">

            <li>
              Complex for non-experts
            </li>

            <li>
              Fragmented data sources
            </li>

            <li>
              Limited AI-driven reasoning
            </li>

            <li>
              Specialized knowledge required
            </li>

          </ul>

        </article>

      </section>


      {/* =====================================================
          BRIDGE
      ===================================================== */}

      <section className="vayu-bridge">

        <div className="vayu-bridge-content">

          <span className="vayu-section-label">
            THE BRIDGE
          </span>

          <h2>
            From Complex Data
            <br />
            <em>
              to Clear Decisions.
            </em>
          </h2>

        </div>

        <p>
          Vayu bridges the gap between complex geospatial
          data and real-world decision making by combining
          AI, spatial reasoning and intuitive visualization.
          It makes powerful spatial intelligence accessible,
          practical and actionable.
        </p>

      </section>


      {/* =====================================================
          HOW IT WORKS + TECH
      ===================================================== */}

      <section className="vayu-engineering">

        <div className="vayu-how">

          <span className="vayu-section-label">
            HOW IT WORKS
          </span>

          <h2>
            From Data
            <br />
            to Decisions
          </h2>

          <p>
            Vayu collects, processes and analyzes spatial
            data using AI to generate insights tailored
            to real-world use cases.
          </p>

          <div className="vayu-flow">

            <div>

              <b>
                01
              </b>

              <strong>
                SPATIAL DATA
              </strong>

              <span>
                Satellite, maps,
                terrain, land records
              </span>

            </div>

            <i>
              →
            </i>

            <div>

              <b>
                02
              </b>

              <strong>
                PROCESSING
              </strong>

              <span>
                Cleaning, fusion
                & geo-analysis
              </span>

            </div>

            <i>
              →
            </i>

            <div>

              <b>
                03
              </b>

              <strong>
                AI REASONING
              </strong>

              <span>
                Spatial AI models
                & domain logic
              </span>

            </div>

            <i>
              →
            </i>

            <div>

              <b>
                04
              </b>

              <strong>
                INSIGHTS
              </strong>

              <span>
                Visualization &
                actionable outputs
              </span>

            </div>

          </div>

        </div>


        <div className="vayu-tech">

          <span className="vayu-section-label">
            TECHNOLOGY STACK
          </span>

          {techGroups.map((group) => (
            <div
              className="vayu-tech-row"
              key={group.title}
            >

              <strong>
                {group.title}
              </strong>

              <div>

                {group.items.map(
                  (item) => (
                    <span key={item}>
                      {item}
                    </span>
                  )
                )}

              </div>

            </div>
          ))}

        </div>

      </section>


      {/* =====================================================
          ROADMAP
      ===================================================== */}

      <section className="vayu-roadmap">

        <div>

          <span className="vayu-section-label">
            DEVELOPMENT PROGRESS
          </span>

          <h2>
            Current Status
            <br />
            <em>
              & Roadmap
            </em>
          </h2>

          <p>
            Vayu is actively being developed with a focus
            on real-world applications across multiple
            domains.
          </p>

        </div>


        <div className="vayu-progress-list">

          <Progress
            name="Agriculture Intelligence"
            value="Completed"
            percent="100%"
            complete
          />

          <Progress
            name="Home Planning & Analysis"
            value="Completed"
            percent="100%"
            complete
          />

          <Progress
            name="Construction & Infrastructure"
            value="In Development"
            percent="60%"
          />

          <Progress
            name="Additional Domains"
            value="Planned"
            percent="—"
          />

        </div>

      </section>


      {/* =====================================================
          PROJECT AT A GLANCE
      ===================================================== */}

      <section className="vayu-overview">

        <div>

          <span className="vayu-section-label">
            PROJECT AT A GLANCE
          </span>

          <h2>
            One Page
            <br />
            <em>
              Overview.
            </em>
          </h2>

          <p>
            A visual summary of Vayu, its vision,
            capabilities and current direction.
          </p>

        </div>

        <div className="vayu-ppt">

          <img
            src={vayuOneSlide}
            alt="Vayu AI Spatial Intelligence one-slide overview"
          />

        </div>

      </section>


      {/* =====================================================
          CLOSING
      ===================================================== */}

      <section className="vayu-closing">

        <div>

          <span className="vayu-section-label">
            SOURCE
          </span>

          <h2>
            Project Repository
          </h2>

          <p>
            Explore the Vayu source repository and
            project implementation.
          </p>

          <button
            className="vayu-button"
            type="button"
            onClick={openGitHub}
          >
            GITHUB ↗
          </button>

        </div>


        <div>

          <span className="vayu-section-label">
            READY TO EXPLORE?
          </span>

          <h2>
            Experience Vayu.
          </h2>

          <p>
            Vayu is currently in development.
            Explore the product and its evolving
            capabilities.
          </p>

          <div className="vayu-actions">

            <button
              className="vayu-button vayu-button-live"
              type="button"
              onClick={openLiveDemo}
            >
              GO LIVE <span>↗</span>
            </button>

            <button
              className="vayu-button"
              type="button"
              onClick={() => setShowWalkthroughs(true)}
            >
              WATCH WALKTHROUGH <span>▶</span>
            </button>

          </div>

        </div>

      </section>

      {/* =====================================================
          ACHIEVEMENT MODAL
      ===================================================== */}

      {showAchievements && (
        <div
          className="vayu-achievement-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="VayuVega hackathon achievement"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setShowAchievements(false);
            }
          }}
        >
          <div className="vayu-achievement-modal">

            <button
              className="vayu-achievement-close"
              type="button"
              aria-label="Close achievements"
              onClick={() => setShowAchievements(false)}
            >
              ×
            </button>

            <div className="vayu-achievement-celebration" aria-hidden="true">
              {Array.from({ length: 28 }, (_, index) => (
                <span
                  key={index}
                  className="vayu-confetti"
                  style={{
                    "--confetti-x": `${((index * 37) % 100) - 50}%`,
                    "--confetti-delay": `${(index % 7) * 0.06}s`,
                    "--confetti-rotation": `${((index * 53) % 360) - 180}deg`,
                    "--confetti-color":
                      [
                        "#ff542f",
                        "#27d17f",
                        "#4da3ff",
                        "#ffd166",
                        "#a66cff",
                      ][index % 5],
                  }}
                />
              ))}
              <div className="vayu-achievement-spark">✦</div>
            </div>

            <span className="vayu-section-label">
              ACHIEVEMENT
            </span>

            <h2>
              1ST PRIZE
            </h2>

            <p className="vayu-achievement-subtitle">
              Hackathon Winner
            </p>

            <div className="vayu-achievement-meta">
              <strong>
                Team VayuVega
              </strong>

              <span>
                Udyoga Pramoda Hackathon
              </span>
            </div>

            <div className="vayu-achievement-divider" />

            <div className="vayu-achievement-photos">

              <button
                className="vayu-achievement-photo"
                type="button"
                onClick={() => window.open(
                  achievementPhoto1,
                  "_blank",
                  "noopener,noreferrer"
                )}
              >
                <img
                  src={achievementPhoto1}
                  alt="Team VayuVega first prize award"
                  loading="lazy"
                />
              </button>

              <button
                className="vayu-achievement-photo"
                type="button"
                onClick={() => window.open(
                  achievementPhoto2,
                  "_blank",
                  "noopener,noreferrer"
                )}
              >
                <img
                  src={achievementPhoto2}
                  alt="Team VayuVega at the hackathon exhibition"
                  loading="lazy"
                />
              </button>

            </div>

            <p className="vayu-achievement-proof">
              Award photo and event photo
            </p>

          </div>
        </div>
      )}

      {/* =====================================================
          WALKTHROUGH VIDEO MODAL
      ===================================================== */}

      {showWalkthroughs && (
        <div
          className="vayu-video-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setShowWalkthroughs(false);
            }
          }}
        >
          <div className="vayu-video-modal">

            <button
              className="vayu-video-close"
              type="button"
              onClick={() => {
                setShowWalkthroughs(false);
                setSelectedVideo(null);
              }}
            >
              ×
            </button>

            {!selectedVideo ? (
              <>
                <span className="vayu-section-label">
                  VAYU WALKTHROUGHS
                </span>

                <h2>
                  See Vayu
                  <br />
                  <em>in action.</em>
                </h2>

                <div className="vayu-video-options">

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedVideo({
                        src: vayuShortVideo,
                        title: "SHORT WALKTHROUGH",
                        duration: "3 MINUTES",
                      })
                    }
                  >
                    <span>▶</span>

                    <div>
                      <strong>
                        SHORT WALKTHROUGH
                      </strong>

                      <small>
                        3 MINUTES · QUICK PRODUCT DEMO
                      </small>

                      <p>
                        A concise tour of Vayu — the core product,
                        experience, and how the spatial intelligence
                        workflow comes together.
                      </p>
                    </div>

                    <b>↗</b>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedVideo({
                        src: vayuFullVideo,
                        title: "FULL WALKTHROUGH",
                        duration: "13 MINUTES",
                      })
                    }
                  >
                    <span>▶</span>

                    <div>
                      <strong>
                        FULL WALKTHROUGH
                      </strong>

                      <small>
                        13 MINUTES · COMPLETE PRODUCT DEMO
                      </small>

                      <p>
                        A complete walkthrough covering the platform,
                        spatial analysis, AI reasoning, real-world
                        planning, and the major capabilities of Vayu.
                      </p>
                    </div>

                    <b>↗</b>
                  </button>

                </div>
              </>
            ) : (
              <>
                <div className="vayu-video-heading">

                  <div>
                    <span className="vayu-section-label">
                      {selectedVideo.duration}
                    </span>

                    <h3>
                      {selectedVideo.title}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedVideo(null)}
                  >
                    ← BACK
                  </button>

                </div>

                <video
                  className="vayu-demo-video"
                  src={selectedVideo.src}
                  controls
                  autoPlay
                  playsInline
                />

              </>
            )}

          </div>
        </div>
      )}

    </section>
  );
}


function Progress({
  name,
  percent,
  value,
  complete = false,
}) {
  return (
    <div className="vayu-progress">

      <div className="vayu-progress-top">

        <span>
          {name}
        </span>

        <small>
          {value}
        </small>

        <b>
          {percent}
        </b>

      </div>

      <div className="vayu-progress-track">

        <div
          className={`vayu-progress-fill ${
            complete ? "complete" : ""
          }`}
          style={{
            width:
              percent === "—"
                ? "5%"
                : percent,
          }}
        />

      </div>

    </div>
  );
}