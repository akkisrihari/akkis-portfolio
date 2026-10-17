import { useEffect } from "react";
import "./AJ.css";

const capabilities = [
  {
    icon: "▣",
    title: "Application Control",
    description:
      "Open VS Code, Chrome, and other supported applications through voice commands.",
  },
  {
    icon: "⌘",
    title: "Files & Folders",
    description:
      "Open File Explorer, navigate folders, and access files on your laptop.",
  },
  {
    icon: "◎",
    title: "Browser Automation",
    description:
      "Navigate websites, search for content, scroll through pages, and interact with results.",
  },
  {
    icon: "▶",
    title: "YouTube Automation",
    description:
      "Search for videos, browse results, select content, and play videos.",
  },
  {
    icon: "↔",
    title: "Media Controls",
    description:
      "Control playback using supported browser and keyboard interactions.",
  },
  {
    icon: "⌁",
    title: "Voice-First Interaction",
    description:
      "Speak naturally and let AJ route instructions to its available tools.",
  },
];

const roadmap = [
  {
    title: "Teams & Email",
    description:
      "Prepare professional updates from spoken instructions and request approval before sending.",
  },
  {
    title: "WhatsApp Integration",
    description:
      "Prepare and send messages through a voice-driven workflow.",
  },
  {
    title: "Proactive Alerts",
    description:
      "Notify you about approaching meetings and important updates when you are away.",
  },
  {
    title: "Smarter Automation",
    description:
      "Expand supported workflows with stronger action verification and application integrations.",
  },
];

const architecture = [
  {
    number: "01",
    icon: "⌁",
    title: "Voice Input",
    technology: "Whisper",
    detail: "Speech to text",
  },
  {
    number: "02",
    icon: "✳",
    title: "AI Understanding",
    technology: "Ollama + Qwen 2.5 0.5B",
    detail: "Interpret the request",
  },
  {
    number: "03",
    icon: "◇",
    title: "Tool Routing",
    technology: "Tool Registry",
    detail: "Select an available tool",
  },
  {
    number: "04",
    icon: "▣",
    title: "Action Execution",
    technology: "Selenium + PyAutoGUI",
    detail: "Browser and desktop control",
  },
  {
    number: "05",
    icon: "≋",
    title: "Voice Response",
    technology: "Piper TTS",
    detail: "Text to speech",
  },
];

function Eyebrow({ number, children }) {
  return (
    <div className="aj-eyebrow">
      <span>{number}</span>
      <i />
      <span>{children}</span>
    </div>
  );
}

function DemoWindow({ title, command, type }) {
  // Preserve the existing six DemoWindow calls and their original type props.
  const visualTypeMap = {
    voice: "code",
    pipeline: "files",
    browser: "browser",
    neural: "youtube",
    control: "player",
    action: "media",
    code: "code",
    files: "files",
    youtube: "youtube",
    player: "player",
    media: "media",
  };

  const visualType = visualTypeMap[type] || "media";

  const labels = {
    code: "APPLICATION CONTROL",
    files: "FILE OPERATIONS",
    browser: "BROWSER SCAN",
    youtube: "VIDEO DISCOVERY",
    player: "PAGE INTERACTION",
    media: "MEDIA SIGNAL",
  };

  return (
    <article className="aj-demo-card">
      <div className="aj-demo-label">{title}</div>

      <div className={`aj-window aj-window-${visualType}`}>
        <div className="aj-abstract-visual" aria-hidden="true">
          <div className="aj-visual-grid" />
          <div className="aj-visual-orbit aj-orbit-a" />
          <div className="aj-visual-orbit aj-orbit-b" />
          <div className="aj-visual-orbit aj-orbit-c" />

          <div className="aj-visual-connectors">
            <i />
            <i />
            <i />
            <i />
          </div>

          <div className="aj-visual-core">
            <span>
              {visualType === "code"
                ? "APP"
                : visualType === "files"
                  ? "FILE"
                  : visualType === "browser"
                    ? "SCAN"
                    : visualType === "youtube"
                      ? "PLAY"
                      : visualType === "player"
                        ? "ACT"
                        : "AUDIO"}
            </span>
          </div>

          <div className="aj-visual-node aj-node-a" />
          <div className="aj-visual-node aj-node-b" />
          <div className="aj-visual-node aj-node-c" />
          <div className="aj-visual-sweep" />

          {visualType === "media" && (
            <div className="aj-wave-bars">
              {Array.from({ length: 25 }, (_, i) => (
                <i key={i} style={{ "--bar": (i % 7) + 1 }} />
              ))}
            </div>
          )}

          {visualType === "files" && (
            <div className="aj-file-nodes">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          )}

          {visualType === "youtube" && (
            <div className="aj-video-selector">
              <i />
              <i />
              <i />
            </div>
          )}

          <div className="aj-visual-tag">{labels[visualType]}</div>
        </div>

        <div className="aj-command-pill">
          <span>⌁</span>
          {command}
        </div>
      </div>

      <p className="aj-demo-caption">{title}</p>
    </article>
  );
}

export default function AJ({ onBack }) {
  useEffect(() => {
    const elements = document.querySelectorAll(".aj-page .aj-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) =>
        element.classList.add("is-visible")
      );

      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="aj-page">
      <div className="aj-background-grid" aria-hidden="true" />

      {/* TOP NAVIGATION */}
      <header className="aj-topbar">
        <button
          className="aj-back-link"
          type="button"
          onClick={onBack}
        >
          <span>←</span> BACK TO PROJECTS
        </button>

        <div className="aj-topbar-meta">
          PROJECT 03 <i />
        </div>
      </header>

      {/* 01 — HERO */}
      <section className="aj-hero">
        <div className="aj-hero-copy">
          <Eyebrow number="03">
            PERSONAL AI ASSISTANT
          </Eyebrow>

          <h1>
            AJ
            <span>Your personal</span>
            <em>AI assistant.</em>
          </h1>

          <p className="aj-hero-description">
            A voice-driven desktop assistant built to reduce
            repetitive laptop work by understanding natural-language
            commands and turning them into computer actions.
          </p>

          {/* HERO ACTIONS — INCLUDING THE GITHUB REPOSITORY BUTTON */}
          <div className="aj-hero-actions">
            <a
              href="#aj-action"
              className="aj-button aj-button-primary"
            >
              EXPLORE THE SYSTEM <span>↘</span>
            </a>

            <a
              href="#aj-stack"
              className="aj-button aj-button-outline"
            >
              HOW IT WORKS <span>↗</span>
            </a>

            <a
              href="https://github.com/akkisrihari/PersonalAI"
              target="_blank"
              rel="noreferrer"
              className="aj-button aj-button-outline"
            >
              VIEW SOURCE ON GITHUB <span>↗</span>
            </a>
          </div>

          <div className="aj-hero-status">
            <i />
            VOICE IN · ACTION OUT
          </div>
        </div>

        {/* Floating and rotating existing AJ logo */}
        <div className="aj-hero-visual">
          <div className="aj-orbit aj-orbit-outer" />
          <div className="aj-orbit aj-orbit-middle" />
          <div className="aj-orbit aj-orbit-inner" />
          <div className="aj-logo-halo" />

          <div className="aj-logo-float">
            <img
              src="/src/assets/aj-logo.png"
              alt="AJ Personal AI Assistant logo"
            />
          </div>

          <div className="aj-visual-note aj-note-one">
            <span>01 / INPUT</span>
            <strong>VOICE COMMAND</strong>
          </div>

          <div className="aj-visual-note aj-note-two">
            <span>02 / PROCESS</span>
            <strong>INTENT → TOOL</strong>
          </div>

          <div className="aj-visual-note aj-note-three">
            <span>03 / OUTPUT</span>
            <strong>REAL ACTION</strong>
          </div>

          <span className="aj-coordinate">
            AJ / PERSONAL SYSTEM
          </span>
        </div>
      </section>

      {/* 02 — OVERVIEW */}
      <section className="aj-section aj-overview aj-reveal">
        <div className="aj-overview-heading">
          <Eyebrow number="01">OVERVIEW</Eyebrow>

          <h2>
            Less manual work.
            <br />
            <em>More time for what matters.</em>
          </h2>
        </div>

        <div className="aj-overview-copy">
          <p>
            AJ is a Python-based desktop AI assistant designed
            to automate everyday laptop tasks through voice
            commands. From opening applications and navigating
            the browser to searching YouTube and interacting
            with files, AJ handles repetitive steps so you can
            focus on the work itself.
          </p>

          <p className="aj-muted">
            Describe the task in your own words. AJ interprets
            the instruction and routes it to an available tool.
          </p>
        </div>

        <div className="aj-value-grid">
          <article className="aj-value-card">
            <span>⌁</span>
            <h3>Voice Controlled</h3>
            <p>
              Speak naturally instead of repeating manual
              clicks and typing.
            </p>
          </article>

          <article className="aj-value-card">
            <span>▣</span>
            <h3>Computer Automation</h3>
            <p>
              Open applications, folders, and supported
              desktop workflows.
            </p>
          </article>

          <article className="aj-value-card">
            <span>◎</span>
            <h3>Browser Automation</h3>
            <p>
              Navigate websites, search content, scroll, and
              interact with results.
            </p>
          </article>

          <article className="aj-value-card">
            <span>↯</span>
            <h3>Productivity Focused</h3>
            <p>
              Reduce repetitive interactions and keep your
              attention on the task.
            </p>
          </article>
        </div>
      </section>

      {/* 03 — AUTOMATION SHOWCASE */}
      <section
        className="aj-section aj-action-section aj-reveal"
        id="aj-action"
      >
        <div className="aj-heading-row">
          <div>
            <Eyebrow number="02">SEE IT IN ACTION</Eyebrow>

            <h2>
              From voice commands
              <br />
              <em>to real actions.</em>
            </h2>
          </div>

          <p>
            Illustrative interface concepts showing the kinds
            of workflows AJ supports today. These visuals are
            not captured screenshots of the running application.
          </p>
        </div>

        <div className="aj-demo-grid">
          <DemoWindow
            title="OPEN APPLICATIONS"
            type="voice"
            command="AJ, open VS Code"
          />

          <DemoWindow
            title="FILES & FOLDER OPERATIONS"
            type="pipeline"
            command="AJ, open my project folder"
          />

          <DemoWindow
            title="BROWSER AUTOMATION"
            type="browser"
            command="AJ, open Chrome and search YouTube"
          />

          <DemoWindow
            title="YOUTUBE SEARCH & PLAY"
            type="neural"
            command="AJ, search Red Bull best matches"
          />

          <DemoWindow
            title="SCROLL & INTERACT"
            type="control"
            command="AJ, scroll down and play this video"
          />

          <DemoWindow
            title="MEDIA CONTROLS"
            type="action"
            command="AJ, skip 10 seconds forward"
          />
        </div>
      </section>

      {/* 04 — TECHNICAL ARCHITECTURE */}
      <section
        className="aj-section aj-stack-section aj-reveal"
        id="aj-stack"
      >
        <div className="aj-heading-row">
          <div>
            <Eyebrow number="03">HOW IT WORKS</Eyebrow>

            <h2>
              A connected stack.
              <br />
              <em>One spoken instruction.</em>
            </h2>
          </div>

          <p>
            Speech is transcribed, interpreted by a local
            language model, routed to a registered tool, and
            executed through browser or desktop automation.
          </p>
        </div>

        <div className="aj-pipeline">
          {architecture.map((step, index) => (
            <div className="aj-pipeline-wrap" key={step.number}>
              <article className="aj-pipeline-card">
                <span className="aj-pipeline-number">
                  {step.number}
                </span>

                <div className="aj-pipeline-icon">
                  {step.icon}
                </div>

                <h3>{step.title}</h3>
                <strong>{step.technology}</strong>
                <p>{step.detail}</p>
              </article>

              {index < architecture.length - 1 && (
                <span
                  className="aj-pipeline-arrow"
                  aria-hidden="true"
                >
                  <i />
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="aj-tech-strip">
          {[
            "PYTHON",
            "OLLAMA",
            "QWEN 2.5 0.5B",
            "WHISPER",
            "PIPER TTS",
            "SELENIUM",
            "PYAUTOGUI",
            "PYSIDE6 / QT",
          ].map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </section>

      {/* 05 — CURRENT CAPABILITIES */}
      <section className="aj-section aj-capabilities-section aj-reveal">
        <div className="aj-heading-row">
          <div>
            <Eyebrow number="04">CURRENT CAPABILITIES</Eyebrow>

            <h2>
              What AJ can
              <br />
              <em>do today.</em>
            </h2>
          </div>

          <p>
            These are the features described as implemented.
            Actual behavior depends on the application and
            supported interaction.
          </p>
        </div>

        <div className="aj-capability-system">
          <div
            className="aj-capability-connections"
            aria-hidden="true"
          >
            {capabilities.map((item) => (
              <i key={item.title} />
            ))}
          </div>

          <div className="aj-capability-core">
            <span className="aj-core-orbit" />
            <span className="aj-core-orbit aj-core-orbit-two" />

            <div className="aj-capability-core-inner">
              <span>AJ</span>
              <small>PERSONAL AI</small>
            </div>
          </div>

          {capabilities.map((item, index) => (
            <article
              className="aj-capability-card"
              key={item.title}
              style={{ "--cap-index": index }}
            >
              <span className="aj-card-number">
                0{index + 1}
              </span>

              <div className="aj-capability-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <span className="aj-card-status">
                <i /> IMPLEMENTED
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* 06 — FUTURE ROADMAP */}
      <section className="aj-section aj-roadmap-section aj-reveal">
        <div className="aj-heading-row">
          <div>
            <Eyebrow number="05">FUTURE SCOPE</Eyebrow>

            <h2>
              What's coming
              <br />
              <em>next.</em>
            </h2>
          </div>

          <p>
            AJ is planned to grow beyond desktop commands into
            communication workflows and timely alerts, with
            confirmation before sensitive actions are completed.
          </p>
        </div>

        <div className="aj-roadmap-timeline">
          <div
            className="aj-roadmap-track"
            aria-hidden="true"
          >
            <span />
          </div>

          {roadmap.map((item, index) => (
            <article
              className="aj-roadmap-card"
              key={item.title}
              style={{ "--roadmap-index": index }}
            >
              <span className="aj-roadmap-number">
                0{index + 1}
              </span>

              <div className="aj-roadmap-mark">✳</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <span className="aj-planned-label">
                PLANNED
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* 07 — CLOSING VISION */}
      <section className="aj-section aj-vision-section aj-reveal">
        <div className="aj-vision-orbit" aria-hidden="true">
          <span />
          <span />
          <span />
          <i />
          <i />
          <i />
        </div>

        <Eyebrow number="06">THE VISION</Eyebrow>

        <div className="aj-vision-content">
          <h2>
            Less clicking.
            <br />
            <em>More doing.</em>
          </h2>

          <p>
            AJ is a personal assistant built to turn
            natural-language instructions into useful computer
            actions — making everyday laptop work simpler and
            leaving more time for learning, building, and creating.
          </p>
        </div>

        <div className="aj-vision-stats">
          <article>
            <strong>VOICE FIRST</strong>
            <span>Natural instructions</span>
          </article>

          <article>
            <strong>REAL TASKS</strong>
            <span>Actions, not just answers</span>
          </article>

          <article>
            <strong>ALWAYS EVOLVING</strong>
            <span>A growing automation roadmap</span>
          </article>
        </div>

        <div className="aj-bottom-line">
          <span>AJ / PERSONAL AI ASSISTANT</span>

          <button type="button" onClick={onBack}>
            BACK TO PROJECT WORLD <span>↑</span>
          </button>
        </div>
      </section>
    </main>
  );
}