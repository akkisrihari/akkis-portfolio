import { useEffect, useRef, useState } from "react";
import "./Systems.css";

const stages = [
  {
    id: "data",
    label: "DATA",
    color: "blue",
    description: "Structured information",
  },
  {
    id: "logic",
    label: "LOGIC",
    color: "green",
    description: "Rules & computation",
  },
  {
    id: "ai",
    label: "AI",
    color: "purple",
    description: "Reasoning & intelligence",
  },
  {
    id: "validation",
    label: "VALIDATION",
    color: "gold",
    description: "Confidence & constraints",
  },
  {
    id: "automation",
    label: "AUTOMATION",
    color: "orange",
    description: "Triggers & execution",
  },
];

function StageArt({ type }) {
  if (type === "data") {
    return (
      <div className="stage-art">
        <div className="data-plane plane-1" />
        <div className="data-plane plane-2" />
        <div className="data-plane plane-3" />
      </div>
    );
  }

  if (type === "logic") {
    return (
      <div className="stage-art">
        <div className="logic-box logic-center">IF</div>
        <div className="logic-box logic-top">THEN</div>
        <div className="logic-box logic-bottom">ELSE</div>
        <div className="logic-branch branch-top" />
        <div className="logic-branch branch-bottom" />
      </div>
    );
  }

  if (type === "ai") {
    return (
      <div className="stage-art">
        <div className="ai-orb">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>
    );
  }

  if (type === "validation") {
    return (
      <div className="stage-art">
        <div className="validation-lines">
          <i />
          <i />
          <i />
        </div>

        <div className="shield">✓</div>
      </div>
    );
  }

  return (
    <div className="stage-art">
      <div className="auto-node auto-main" />
      <div className="auto-node auto-one" />
      <div className="auto-node auto-two" />
      <div className="auto-node auto-three" />

      <i className="auto-line auto-line-1" />
      <i className="auto-line auto-line-2" />
      <i className="auto-line auto-line-3" />
    </div>
  );
}

export default function Systems() {
  const sectionRef = useRef(null);

  const [revealed, setRevealed] = useState(0);

  const animationStarted = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        if (animationStarted.current) return;

        animationStarted.current = true;

        /*
          SCREEN 2 ENTERED THE VIEWPORT.

          From this point the entire chain
          automatically builds itself.

          No scrolling required.
        */

        let current = 0;

        const timer = setInterval(() => {
          current += 1;

          setRevealed(current);

          if (current >= stages.length) {
            clearInterval(timer);
          }
        }, 850);
      },
      {
        threshold: 0.05,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  const productVisible = revealed >= stages.length;

  return (
    <section
      ref={sectionRef}
      className="systems"
    >
      <div className="systems-sticky">

        <div className="systems-grid" />

        {/* LEFT INDEX */}

        <div className="systems-index">
          <span>02</span>

          <i />

          <small>
            APPROACH
          </small>
        </div>

        {/* HEADING */}

        <div className="systems-heading">
          <p>FROM PROBLEMS TO PRODUCTS</p>

          <h2>
            I BUILD
            <br />
            <em>AROUND THE PROBLEM.</em>
          </h2>

          <span>
            Data, logic, intelligence and automation —
            connected into products people can actually use.
          </span>
        </div>

        {/* TOP ABSTRACT SYSTEM */}

        <div className="system-orbit">

          <div className="orbit-node orbit-data">
            DATA
          </div>

          <div className="orbit-node orbit-logic">
            LOGIC
          </div>

          <div className="orbit-core">
            <span />
          </div>

          <div className="orbit-node orbit-ai">
            AI
          </div>

          <div className="orbit-node orbit-validation">
            VALIDATION
          </div>

          <div className="orbit-node orbit-automation">
            AUTOMATION
          </div>

          <div className="orbit-node orbit-product">
            PRODUCT
          </div>

          <div className="orbit-line line-a" />
          <div className="orbit-line line-b" />
          <div className="orbit-line line-c" />
          <div className="orbit-line line-d" />
          <div className="orbit-line line-e" />

        </div>

        {/* MAIN CHAIN */}

        <div className="chain">

          {/* REAL WORLD */}

          <div className="real-world">

            <div className="real-world-visual">

              <div className="terrain-grid" />

              <span className="location-dot dot-1" />
              <span className="location-dot dot-2" />
              <span className="location-dot dot-3" />

              <div className="terrain-bars">
                <i />
                <i />
                <i />
                <i />
              </div>

            </div>

            <div className="real-world-text">

              <p>REAL WORLD</p>

              <span>
                Problems.
                <br />
                People.
                <br />
                Environments.
              </span>

            </div>

          </div>

          {/* AUTOMATIC CHAIN */}

          {stages.map((stage, index) => (
            <div
              key={stage.id}
              className={`chain-item chain-${stage.color} ${
                revealed >= index + 1
                  ? "revealed"
                  : ""
              }`}
            >

              <div className="chain-connector">
                <span />
              </div>

              <div className="floating-panel">

                <div className="panel-number">
                  0{index + 1}
                </div>

                <div className="panel-label">
                  {stage.label}
                </div>

                <StageArt
                  type={stage.id}
                />

                <p>
                  {stage.description}
                </p>

              </div>

            </div>
          ))}

          {/* PRODUCT */}

          <div
            className={`product ${
              productVisible
                ? "revealed"
                : ""
            }`}
          >

            <div className="product-connector">
              <span />
            </div>

            <div className="product-display">

              <div className="display-header">
                <i />
                <i />
                <i />
              </div>

              <div className="display-bars">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className="display-content">
                <i />
                <i />
                <i />
              </div>

            </div>

            <div className="product-copy">

              <p>PRODUCT</p>

              <span>
                Usable systems.
                <br />
                Real outcomes.
              </span>

            </div>

          </div>

        </div>

        {/* BOTTOM */}

        <div className="systems-bottom">
          <span>
            EXPLORE THE SYSTEM
          </span>

          <i>↓</i>
        </div>

      </div>
    </section>
  );
}