
import "./SocialConnect.css";

const socialLinks = [
  {
    id: "whatsapp",
    name: "WhatsApp",
    symbol: "WA",
    description:
      "Have a question, an idea, or something worth discussing? Let's talk directly.",
    firstLabel: "VIEW WHATSAPP",
    firstUrl: "https://wa.me/917416374232",
    secondLabel: "MESSAGE ME",
    secondUrl:
      "https://wa.me/917416374232?text=Hi%20Akki%2C%20I%20visited%20your%20portfolio%20and%20would%20love%20to%20connect.",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    symbol: "in",
    description:
      "Let's connect professionally, exchange ideas, and explore opportunities to work together.",
    firstLabel: "VIEW MY PROFILE",
    firstUrl: "https://www.linkedin.com/in/srihari-akki-1ab557280/",
    secondLabel: "CONNECT WITH ME",
    secondUrl: "https://www.linkedin.com/in/srihari-akki-1ab557280/",
  },
  {
    id: "instagram",
    name: "Instagram",
    symbol: "IG",
    description:
      "A glimpse into my personal side, interests, and moments beyond building products.",
    firstLabel: "VIEW MY PROFILE",
    firstUrl: "https://www.instagram.com/akkisrihari/?hl=en",
    secondLabel: "FOLLOW ME",
    secondUrl: "https://www.instagram.com/akkisrihari/?hl=en",
  },
  {
    id: "github",
    name: "GitHub",
    symbol: "GH",
    description:
      "Explore the code, experiments, repositories, and engineering behind the products I build.",
    firstLabel: "EXPLORE REPOSITORIES",
    firstUrl: "https://github.com/akkisrihari?tab=repositories",
    secondLabel: "VIEW MY WORK",
    secondUrl: "https://github.com/akkisrihari",
  },
];

function SocialConnect() {
  return (
    <section className="social-connect" id="lets-connect">
      {/* HERO */}
      <header className="connect-hero">
        <div className="connect-grid" />

        <span className="connect-eyebrow">
          THE NEXT CONVERSATION STARTS HERE.
        </span>

        <h2>
          LET'S <span>CONNECT.</span>
        </h2>

        <h3>Good ideas start with great conversations.</h3>

        <p className="connect-intro">
          Whether you're looking to collaborate, discuss an idea,
          explore a project, or simply connect, I'd love to hear
          from you. Find me on the platform that works best for you.
        </p>

        <div className="connect-scroll-label">
          <span />
          FIND YOUR WAY TO ME
          <span />
        </div>
      </header>

      {/* SOCIAL CARDS */}
      <div className="connect-content">
        <div className="connect-section-heading">
          <span>OPEN CHANNELS</span>
          <p>Choose your platform.</p>
        </div>

        <div className="social-card-grid">
          {socialLinks.map((social, index) => (
            <article
              className={`social-card social-${social.id}`}
              key={social.id}
              style={{ "--card-index": index }}
            >
              <div className="social-card-top">
                <div
                  className={`social-symbol symbol-${social.id}`}
                  aria-hidden="true"
                >
                  {social.symbol}
                </div>

                <span className="social-card-number">
                  0{index + 1}
                </span>
              </div>

              <h3>{social.name}</h3>

              <p className="social-card-description">
                {social.description}
              </p>

              <div className="social-card-actions">
                <a
                  className="social-button social-button-primary"
                  href={social.firstUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.firstLabel} on ${social.name}`}
                >
                  {social.firstLabel}
                  <span aria-hidden="true">↗</span>
                </a>

                <a
                  className="social-button social-button-secondary"
                  href={social.secondUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.secondLabel} on ${social.name}`}
                >
                  {social.secondLabel}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* DIRECT CONTACT */}
        <div className="connect-direct">
          <div>
            <span className="connect-direct-eyebrow">
              HAVE SOMETHING IN MIND?
            </span>

            <h3>Let's turn a conversation into something real.</h3>

            <p>
              Have a project idea, a collaboration opportunity, or
              a problem worth solving? Send me a message, and let's
              explore what we can build together.
            </p>
          </div>

          <a
            className="connect-direct-button"
            href="https://wa.me/917416374232?text=Hi%20Akki%2C%20I%20have%20an%20idea%20I%27d%20love%20to%20discuss%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
          >
            START A CONVERSATION <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      {/* FINAL CLOSING */}
      <footer className="connect-footer">
        <div className="connect-footer-rule" />

        <span className="connect-footer-eyebrow">
          END OF THIS CHAPTER. BEGINNING OF THE NEXT.
        </span>

        <h2>
          BUILT WITH CURIOSITY.
          <br />
          <span>DRIVEN BY POSSIBILITY.</span>
        </h2>

        <p className="connect-thank-you">
          Thanks for exploring my world of ideas, systems, and
          products. This is only the beginning. The most interesting
          things are still ahead.
        </p>

        <div className="connect-signature">
          <span className="signature-line" />
          <span>AKKI SRIHARI</span>
          <span className="signature-line" />
        </div>

        <p className="connect-final-line">
          Let's build something meaningful.
        </p>

        <span className="connect-copyright">
          AKKI SRIHARI · PERSONAL PORTFOLIO
        </span>
      </footer>
    </section>
  );
}

export default SocialConnect;
