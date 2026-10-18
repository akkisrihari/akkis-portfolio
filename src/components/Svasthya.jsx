import { asset } from "../utils/assets";
import "./Svasthya.css";
import { Lottie } from "lottie-react";

import setuAnimation from "../assets/setu.json?url";
import drNovaAnimation from "../assets/dr-nova.json?url";

const journeySteps = [
  {
    number: "01",
    title: "LOGIN",
    description: "Secure and simple access.",
    image: asset("svasthya-login.png"),
  },
  {
    number: "02",
    title: "PERSONALIZE",
    description: "Share your personal health details.",
    image: asset("svasthya-profile.png"),
  },
  {
    number: "03",
    title: "MEET SETU",
    description: "Your guide across health and tradition.",
    image: asset("svasthya-setu-intro.png"),
  },
  {
    number: "04",
    title: "HOME",
    description: "Your personalized daily overview.",
    image: asset("svasthya-home.png"),
  },
  {
    number: "05",
    title: "HEALTH INTRO",
    description: "Enter the Health domain.",
    image: asset("svasthya-health-intro.png"),
  },
  {
    number: "06",
    title: "HEALTH DASHBOARD",
    description: "Explore health status and subdomains.",
    image: asset("svasthya-health.png"),
  },
  {
    number: "07",
    title: "WORKOUT & YOGA",
    description: "Choose movement experiences.",
    image: asset("svasthya-workout-yoga.png"),
  },
  {
    number: "08",
    title: "WORKOUT SESSION",
    description: "Train with guided workout support.",
    image: asset("svasthya-workout.png"),
  },
  {
    number: "09",
    title: "YOGA",
    description: "Begin a guided yoga experience.",
    image: asset("svasthya-yoga.png"),
  },
  {
    number: "10",
    title: "GUIDED YOGA",
    description: "Follow individual yoga poses and guidance.",
    image: asset("svasthya-yoga-session.png"),
  },
  {
    number: "11",
    title: "IRA AI",
    description: "Personalized diet and nutrition guidance.",
    image: asset("svasthya-ira.png"),
  },
  {
    number: "12",
    title: "DR NOVA",
    description: "AI healthcare assistance.",
    image: asset("svasthya-dr-nova.png"),
  },
  {
    number: "13",
    title: "TRADITIONAL INTRO",
    description: "Enter the Traditional domain.",
    image: asset("svasthya-traditional-intro.png"),
  },
  {
    number: "14",
    title: "TRADITIONAL DASHBOARD",
    description: "Explore traditional experiences.",
    image: asset("svasthya-traditional.png"),
  },
];

const assistants = [
  {
    name: "SETU",
    role: "SVASTHYA AI GUIDE",
    description:
      "The bridge between the user and the Svasthya ecosystem.",
    className: "assistant-setu",
    animation: setuAnimation,
  },
  {
    name: "LEO",
    role: "WORKOUT AI",
    description:
      "A specialized workout companion that guides training and helps users through their exercise experience.",
    className: "assistant-leo",
    image: asset("leo.png"),
  },
  {
    name: "AIRA",
    role: "YOGA AI",
    description:
      "A specialized yoga guide supporting the user's practice and helping through individual sessions.",
    className: "assistant-aira",
    image: asset("anagha.png"),
  },
  {
    name: "ANAGHA",
    role: "DIET & NUTRITION AI",
    description:
      "A nutrition companion for diet plans, weight goals, meals, recipes, and meal analysis.",
    className: "assistant-anagha",
    image: asset("ira.png"),
  },
  {
    name: "DR NOVA",
    role: "HEALTHCARE AI",
    description:
      "A healthcare assistant supporting symptoms, first aid, medical reports, recovery, and nearby hospitals.",
    className: "assistant-nova",
    animation: drNovaAnimation,
  },
];

const healthDomains = [
  {
    title: "YOGA & EXERCISE",
    subtitle: "Personalized movement with specialized AI.",
    assistant: "LEO Â· AIRA",
  },
  {
    title: "DIET & NUTRITION",
    subtitle: "Personalized nutrition guidance with Anagha.",
    assistant: "ANAGHA",
  },
  {
    title: "SLEEP & REST",
    subtitle: "Support for better rest and recovery.",
    assistant: "SVASTHYA",
  },
  {
    title: "DOCTOR",
    subtitle: "AI healthcare assistance with Dr Nova.",
    assistant: "DR NOVA",
  },
];

const traditionalDomains = [
  {
    title: "PANCHANGA",
    subtitle: "Detailed daily Panchanga.",
  },
  {
    title: "SHLOKAS & STOTRAS",
    subtitle: "Learn devotional shlokas.",
  },
  {
    title: "FESTIVALS",
    subtitle: "Upcoming festivals and rituals.",
  },
  {
    title: "ARADHANA",
    subtitle: "Daily spiritual observances.",
  },
  {
    title: "POOJAS & RITUALS",
    subtitle: "Daily poojas guide.",
  },
  {
    title: "CALENDAR",
    subtitle: "Complete Hindu calendar.",
  },
];

function SectionLabel({ number, children }) {
  return (
    <div className="sv-section-label">
      <span>{number}</span>
      <i />
      <strong>{children}</strong>
    </div>
  );
}

function PhoneFrame({ image, title }) {
  return (
    <div className="sv-phone">
      <div className="sv-phone-notch" />

      <div className="sv-phone-screen">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="sv-phone-placeholder">
            <span>SVASTHYA</span>
          </div>
        )}
      </div>
    </div>
  );
}

function Svasthya({ onBack }) {
  return (
    <main className="svasthya-page">

      {/* =====================================================
          TOP NAVIGATION
      ===================================================== */}

      <nav className="sv-nav">
        <button
          type="button"
          className="sv-back"
          onClick={onBack}
        >
          <span>â†</span>
          BACK TO PROJECTS
        </button>

        <div className="sv-nav-project">
          <span>PROJECT</span>
          <strong>02</strong>
        </div>
      </nav>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="sv-hero">

        <div className="sv-hero-grid" />

        <div className="sv-hero-glow sv-glow-one" />
        <div className="sv-hero-glow sv-glow-two" />

        <div className="sv-hero-copy">

          <span className="sv-eyebrow">
            FLUTTER Â· AI Â· PRODUCT ENGINEERING
          </span>

          <h1>
            Svasthya
          </h1>

          <h2>
            Being rooted in the self.
          </h2>

          <p>
            A mobile application built around
            <strong> Health </strong>
            and
            <strong> Traditional </strong>
            domains, bringing personalized
            experiences and specialized AI
            assistants into one ecosystem.
          </p>

          <div className="sv-hero-actions">

            <a
              href="#sv-experience"
              className="sv-primary-button"
            >
              EXPLORE THE EXPERIENCE
              <span>â†˜</span>
            </a>

            <a
              href="https://github.com/akkisrihari/Svasthya"
              target="_blank"
              rel="noreferrer"
              className="sv-secondary-button"
            >
              GITHUB
              <span>â†—</span>
            </a>

          </div>

          <div className="sv-development-status">
            <span />
            CURRENTLY IN DEVELOPMENT
          </div>

        </div>

        {/* RIGHT SIDE â€” FLOATING SVASTHYA LOGO */}

        <div className="sv-hero-visual">

          <div className="sv-hero-orbit sv-orbit-one" />
          <div className="sv-hero-orbit sv-orbit-two" />
          <div className="sv-hero-orbit sv-orbit-three" />

          <div className="sv-floating-logo-glow" />

          <div className="sv-floating-logo">

            <div className="sv-logo-ring" />

            <img
              src={asset("svasthya-logo.png")}
              alt="Svasthya"
            />

          </div>

          <div className="sv-floating-label sv-label-health">
            <span>01</span>
            HEALTH
          </div>

          <div className="sv-floating-label sv-label-traditional">
            <span>02</span>
            TRADITIONAL
          </div>

        </div>

        <div className="sv-hero-bottom">

          <span>
            HEALTH
          </span>

          <i>Ã—</i>

          <span>
            TRADITIONAL
          </span>

        </div>

      </section>

      {/* =====================================================
          WHY SVASTHYA
      ===================================================== */}

      <section className="sv-section sv-why">

        <SectionLabel number="01">
          THE PRODUCT
        </SectionLabel>

        <div className="sv-two-column">

          <div className="sv-section-heading">

            <h2>
              One application.
              <br />
              <em>Multiple worlds.</em>
            </h2>

          </div>

          <div className="sv-section-description">

            <p>
              Svasthya brings together two major
              domains â€” <strong>Health</strong> and
              <strong> Traditional</strong>.
            </p>

            <p>
              Instead of treating every need as
              the same problem, each experience
              can have its own specialized
              intelligence and workflow.
            </p>

          </div>

        </div>

        <div className="sv-feature-grid">

          <article className="sv-feature-card">
            <span>01</span>
            <div className="sv-feature-icon">â—‰</div>
            <h3>
              PERSONALIZED
              <br />
              EXPERIENCE
            </h3>
            <p>
              User information becomes part
              of the personalized Svasthya
              experience.
            </p>
          </article>

          <article className="sv-feature-card">
            <span>02</span>
            <div className="sv-feature-icon">âœ¦</div>
            <h3>
              SPECIALIZED
              <br />
              AI ASSISTANTS
            </h3>
            <p>
              Individual subdomains can have
              their own dedicated AI assistant.
            </p>
          </article>

          <article className="sv-feature-card">
            <span>03</span>
            <div className="sv-feature-icon">â—ˆ</div>
            <h3>
              HEALTH
              <br />
              Ã— TRADITIONAL
            </h3>
            <p>
              Modern digital experiences
              alongside traditional practices.
            </p>
          </article>

          <article className="sv-feature-card">
            <span>04</span>
            <div className="sv-feature-icon">â†—</div>
            <h3>
              AUTOMATION
              <br />
              NOT JUST ANSWERS
            </h3>
            <p>
              The assistants are designed
              around the domain they belong to,
              not simply generic Q&A.
            </p>
          </article>

        </div>

      </section>

      {/* =====================================================
          USER JOURNEY
      ===================================================== */}

      <section
        className="sv-section sv-experience"
        id="sv-experience"
      >

        <SectionLabel number="02">
          THE USER JOURNEY
        </SectionLabel>

        <div className="sv-journey-heading">

          <h2>
            From onboarding
            <br />
            <em>to action.</em>
          </h2>

          <p>
            A glimpse into the experience
            through the actual Svasthya
            application flow.
          </p>

        </div>

        <div className="sv-journey">

          {journeySteps.slice(0, 7).map((step, index) => (
            <div
              className="sv-journey-step"
              key={step.number}
            >

              <div className="sv-journey-phone">
                <PhoneFrame
                  image={step.image}
                  title={step.title}
                />
              </div>

              <div className="sv-journey-meta">

                <span>
                  {step.number}
                </span>

                <strong>
                  {step.title}
                </strong>

                <p>
                  {step.description}
                </p>

              </div>

              {index !== 6 && (
                <div className="sv-journey-arrow">
                  â†’
                </div>
              )}

            </div>
          ))}

        </div>

        <div className="sv-journey">

          {journeySteps.slice(7, 14).map((step, index) => (
            <div
              className="sv-journey-step"
              key={step.number}
            >

              <div className="sv-journey-phone">
                <PhoneFrame
                  image={step.image}
                  title={step.title}
                />
              </div>

              <div className="sv-journey-meta">

                <span>
                  {step.number}
                </span>

                <strong>
                  {step.title}
                </strong>

                <p>
                  {step.description}
                </p>

              </div>

              {index !== 6 && (
                <div className="sv-journey-arrow">
                  â†’
                </div>
              )}

            </div>
          ))}

        </div>

      </section>

      {/* =====================================================
          HEALTH
      ===================================================== */}

      <section className="sv-section sv-health">

        <SectionLabel number="03">
          HEALTH
        </SectionLabel>

        <div className="sv-domain-header">

          <div>
            <span className="sv-domain-kicker">
              DOMAIN 01
            </span>

            <h2>
              HEALTH
            </h2>

            <p>
              A personalized health experience
              covering movement, nutrition,
              rest, and healthcare.
            </p>
          </div>

          <div className="sv-domain-stat">
            <strong>
              04
            </strong>

            <span>
              CURRENT
              <br />
              SUBDOMAINS
            </span>
          </div>

        </div>

        <div className="sv-health-layout">

          <div className="sv-health-phone">
            <PhoneFrame
              image={asset("svasthya-health.png")}
              title="Svasthya Health"
            />
          </div>

          <div className="sv-domain-list">

            {healthDomains.map(
              (domain, index) => (
                <article
                  className="sv-domain-card"
                  key={domain.title}
                >

                  <span className="sv-domain-number">
                    0{index + 1}
                  </span>

                  <div>

                    <h3>
                      {domain.title}
                    </h3>

                    <p>
                      {domain.subtitle}
                    </p>

                    <small>
                      {domain.assistant}
                    </small>

                  </div>

                  <span className="sv-domain-arrow">
                    â†—
                  </span>

                </article>
              )
            )}

          </div>

        </div>

      </section>

      {/* =====================================================
          SPECIALIZED AI
      ===================================================== */}

      <section className="sv-section sv-ai">

        <SectionLabel number="04">
          THE AI ECOSYSTEM
        </SectionLabel>

        <div className="sv-ai-heading">

          <span>
            NOT ONE CHATBOT.
          </span>

          <h2>
            Specialized intelligence
            <br />
            <em>for every experience.</em>
          </h2>

          <p>
            Svasthya's assistants are connected
            to the domains they serve â€” making
            the interaction contextual to the
            user's activity.
          </p>

        </div>

        <div className="sv-assistants">

          {assistants.map(
            (assistant, index) => (
              <article
                className={`sv-assistant-card ${assistant.className}`}
                key={assistant.name}
              >

                <div className="sv-assistant-number">
                  0{index + 1}
                </div>

                <div className="sv-assistant-visual">

                  {assistant.animation ? (
                    <Lottie
                      src={assistant.animation}
                      loop
                      autoplay
                      renderer="svg"
                      className="sv-assistant-lottie"
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  ) : assistant.image ? (
                    <img
                      src={assistant.image}
                      alt={assistant.name}
                    />
                  ) : (
                    <div className="sv-assistant-placeholder">
                      <span>
                        {assistant.name}
                      </span>
                    </div>
                  )}

                </div>

                <div className="sv-assistant-info">

                  <span>
                    {assistant.role}
                  </span>

                  <h3>
                    {assistant.name}
                  </h3>

                  <p>
                    {assistant.description}
                  </p>

                </div>

              </article>
            )
          )}

        </div>

        <div className="sv-ai-flow">

          <div>
            <span>01</span>
            CONVERSATION
          </div>

          <i>â†’</i>

          <div>
            <span>02</span>
            UNDERSTANDING
          </div>

          <i>â†’</i>

          <div>
            <span>03</span>
            DOMAIN INTELLIGENCE
          </div>

          <i>â†’</i>

          <div>
            <span>04</span>
            ACTION
          </div>

        </div>

      </section>

      {/* =====================================================
          TRADITIONAL
      ===================================================== */}

      <section className="sv-section sv-traditional">

        <SectionLabel number="05">
          TRADITIONAL
        </SectionLabel>

        <div className="sv-traditional-layout">

          <div className="sv-traditional-copy">

            <span>
              DOMAIN 02
            </span>

            <h2>
              TRADITIONAL
            </h2>

            <p>
              A dedicated space for traditional
              practices, devotional learning,
              Panchanga, rituals, festivals,
              and spiritual observance.
            </p>

            <div className="sv-traditional-mark">
              <span>à¤¸à¥à¤µà¤¾à¤¸à¥à¤¥à¥à¤¯</span>
              <small>
                Being rooted in the self.
              </small>
            </div>

          </div>

          <div className="sv-traditional-screen">

            <div className="sv-traditional-phone">
              <PhoneFrame
                image={asset("svasthya-traditional.png")}
                title="Traditional"
              />
            </div>

            <div className="sv-traditional-list">

              {traditionalDomains.map(
                (domain, index) => (
                  <div
                    className="sv-traditional-item"
                    key={domain.title}
                  >

                    <span>
                      0{index + 1}
                    </span>

                    <div>
                      <strong>
                        {domain.title}
                      </strong>

                      <small>
                        {domain.subtitle}
                      </small>
                    </div>

                  </div>
                )
              )}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          PRODUCT STATUS
      ===================================================== */}

      <section className="sv-section sv-status">

        <SectionLabel number="06">
          CURRENT STATE
        </SectionLabel>

        <div className="sv-status-heading">

          <h2>
            A product
            <br />
            <em>still being built.</em>
          </h2>

          <p>
            Svasthya is an active development
            project. The portfolio showcases
            the product direction and the
            experiences already being built.
          </p>

        </div>

        <div className="sv-status-grid">

          <div className="sv-status-card">
            <span>
              HEALTH
            </span>

            <strong>
              ~80%
            </strong>

            <small>
              ACTIVE DEVELOPMENT
            </small>
          </div>

          <div className="sv-status-card">
            <span>
              TRADITIONAL
            </span>

            <strong>
              BUILDING
            </strong>

            <small>
              ACTIVE DEVELOPMENT
            </small>
          </div>

          <div className="sv-status-card">
            <span>
              PLATFORM
            </span>

            <strong>
              FLUTTER
            </strong>

            <small>
              MOBILE APPLICATION
            </small>
          </div>

        </div>

      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <section className="sv-footer">

        <div className="sv-footer-line" />

        <div className="sv-footer-content">

          <div>

            <span>
              SVASTHYA
            </span>

            <h2>
              Being rooted
              <br />
              <em>in the self.</em>
            </h2>

          </div>

          <div className="sv-footer-actions">

            <a
              href="https://github.com/akkisrihari"
              target="_blank"
              rel="noreferrer"
            >
              VIEW ON GITHUB
              <span>â†—</span>
            </a>

            <button
              type="button"
              onClick={onBack}
            >
              â† BACK TO PROJECTS
            </button>

          </div>

        </div>

        <div className="sv-footer-bottom">
          <span>
            SVASTHYA Â· HEALTH Ã— TRADITIONAL
          </span>

          <span>
            PRODUCT 02 / 04
          </span>
        </div>

      </section>

    </main>
  );
}

export default Svasthya;
