import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />

      <header className="hero-nav">
        <div className="hero-brand">
          <strong>AKKI</strong>
          <span>SRIHARI</span>
        </div>

        <div className="hero-identity">
          <span>AI ENGINEER</span>
          <span className="hero-divider">|</span>
          <span>PRODUCT BUILDER</span>
        </div>

        <nav className="hero-links">
          <a className="active" href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#projects">PROJECTS</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#contact">CONTACT</a>

          <a className="hero-talk" href="#contact">
            LET'S TALK ↗
          </a>
        </nav>
      </header>

      <main className="hero-content" id="home">
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span />
            DESIGNING INTELLIGENT SYSTEMS
          </div>

          <h1>
            I BUILD
            <br />
            <span>PRODUCTS.</span>
          </h1>

          <p className="hero-statement">
            They don't just work—
            <br />
            they <em>change</em> how people work.
          </p>

          <p className="hero-description">
            I design and build intelligent products where real-world
            problems become systems powered by data, logic, AI
            and automation.
          </p>

          <div className="hero-actions">
            <a className="hero-primary" href="#projects">
              VIEW PROJECTS <span>→</span>
            </a>

            <a className="hero-secondary" href="#contact">
              LET'S TALK <span>↗</span>
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>4+</strong>
              <span>Projects</span>
            </div>

            <div>
              <strong>2+</strong>
              <span>Internships</span>
            </div>

            <div>
              <strong>AI / ML</strong>
              <span>Core Focus</span>
            </div>

            <div>
              <strong>Product</strong>
              <span>Builder</span>
            </div>
          </div>
        </div>
      </main>

      <footer className="hero-footer">
        <div className="hero-location">
          <span className="hero-location-icon">●</span>

          <div>
            <strong>HYDERABAD, INDIA</strong>
            <span>17.3850° N / 78.4867° E</span>
          </div>
        </div>

        <div className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <span className="hero-scroll-icon">↓</span>
        </div>

        <div className="hero-availability">
          <span className="hero-status-dot" />

          <div>
            <strong>AVAILABLE FOR</strong>
            <span>AI / PRODUCT WORK</span>
          </div>
        </div>
      </footer>
    </section>
  );
}