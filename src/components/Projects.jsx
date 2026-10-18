import { asset } from "../utils/assets";
import { useEffect, useRef } from "react";
import "./Projects.css";

const projects = [
  {
    number: "01",
    id: "vayu",
    name: "VAYU",
    subtitle: "AI SPATIAL INTELLIGENCE",
    description:
      "An AI spatial intelligence platform that combines geospatial data, spatial reasoning, AI, and visualization to understand real-world spaces and generate actionable insights.",
    logo: asset("vayu-logo.png"),
    tags: [
      "SPATIAL AI",
      "GEOSPATIAL DATA",
      "SPATIAL REASONING",
      "AI",
      "VISUALIZATION",
    ],
  },
  {
    number: "02",
    id: "svasthya",
    name: "SVASTHYA",
    subtitle: "MULTI-DOMAIN INTELLIGENT PLATFORM",
    description:
      "An intelligent platform combining Traditional and Health domains with specialized AI assistants, personalized experiences, workflows, and automation.",
    logo: asset("svasthya-logo.png"),
    tags: [
      "HEALTH",
      "TRADITIONAL",
      "AI ASSISTANTS",
      "PERSONALIZATION",
      "AUTOMATION",
    ],
  },
  {
    number: "03",
    id: "aj",
    name: "AJ",
    subtitle: "INTELLIGENT AI ASSISTANT",
    description:
      "An intelligent assistant designed around natural interaction, productivity, information access, automation, and everyday problem solving.",
    logo: asset("aj-logo.png"),
    tags: [
      "AI ASSISTANT",
      "NATURAL LANGUAGE",
      "AUTOMATION",
      "PRODUCTIVITY",
      "INTEGRATIONS",
    ],
  },
  {
    number: "04",
    id: "farmer",
    name: "FARMER AI",
    subtitle: "AGRICULTURAL INTELLIGENCE",
    description:
      "An AI-driven agricultural intelligence platform bringing together land, soil, satellite, and agricultural data to support better decisions.",
    logo: asset("farmer-ai-logo.png"),
    tags: [
      "SOIL INTELLIGENCE",
      "LAND DATA",
      "SATELLITE DATA",
      "AI",
      "AGRICULTURAL INSIGHTS",
    ],
  },
];

function ProjectVisual({ project }) {
  return (
    <div
      className={`project-visual project-visual-${project.id}`}
    >
      <div className="visual-grid" />

      <div className="visual-orbit visual-orbit-one" />
      <div className="visual-orbit visual-orbit-two" />
      <div className="visual-orbit visual-orbit-three" />

      <div className="visual-particle particle-one" />
      <div className="visual-particle particle-two" />
      <div className="visual-particle particle-three" />
      <div className="visual-particle particle-four" />

      {/* =================================================
          VAYU
      ================================================= */}

      {project.id === "vayu" && (
        <div className="project-object vayu-object">
          <div className="project-object-glow" />

          <div className="circular-logo">
            <img
              src={project.logo}
              alt="Vayu"
              className="project-logo"
            />
          </div>
        </div>
      )}

      {/* =================================================
          SVASTHYA
      ================================================= */}

      {project.id === "svasthya" && (
        <div className="project-object svasthya-object">
          <div className="project-object-glow" />

          <div className="svasthya-logo-wrap">
            <img
              src={project.logo}
              alt="Svasthya"
              className="project-logo"
            />
          </div>
        </div>
      )}

      {/* =================================================
          AJ
      ================================================= */}

      {project.id === "aj" && (
        <div className="project-object aj-object">
          <div className="project-object-glow" />

          <div className="aj-space">
            <img
              src={project.logo}
              alt="AJ"
              className="aj-space-image"
            />

            <div className="aj-core">
              <img
                src={project.logo}
                alt=""
                className="aj-core-image"
              />
            </div>
          </div>
        </div>
      )}

      {/* =================================================
          FARMER AI
      ================================================= */}

      {project.id === "farmer" && (
        <div className="project-object farmer-object">
          <div className="project-object-glow" />

          <div className="circular-logo">
            <img
              src={project.logo}
              alt="Farmer AI"
              className="project-logo"
            />
          </div>
        </div>
      )}

      <div className="visual-coordinate">
        <span>PROJECT</span>
        <strong>{project.number}</strong>
      </div>

      <div className="visual-status">
        <span className="status-dot" />
        <span>ACTIVE SYSTEM</span>
      </div>
    </div>
  );
}

function ProjectItem({
  project,
  index,
  onOpenProject,
}) {
  const itemRef = useRef(null);

  useEffect(() => {
    const item = itemRef.current;

    if (!item) return;

    const handleScroll = () => {
      const rect = item.getBoundingClientRect();

      const viewportCenter =
        window.innerHeight / 2;

      const itemCenter =
        rect.top + rect.height / 2;

      const distance =
        itemCenter - viewportCenter;

      const movement = Math.max(
        -35,
        Math.min(
          35,
          distance * -0.035
        )
      );

      item.style.setProperty(
        "--parallax-y",
        `${movement}px`
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  const handleProjectClick = () => {
    /*
      VAYU, SVASTHYA, AJ and FARMER AI have
      individual detail screens.
    */

    if (project.id === "vayu") {
      onOpenProject?.("vayu");
    }

    if (project.id === "svasthya") {
      onOpenProject?.("svasthya");
    }

    if (project.id === "aj") {
      onOpenProject?.("aj");
    }

    if (project.id === "farmer") {
      onOpenProject?.("farmer");
    }
  };

  return (
    <article
      ref={itemRef}
      className={`project-item project-item-${index + 1}`}
    >
      <div className="project-number">
        {project.number}
      </div>

      <ProjectVisual project={project} />

      <div className="project-information">
        <div className="project-heading">
          <span className="project-index">
            {project.number} / PROJECT
          </span>

          <h2>
            {project.name}
          </h2>

          <h3>
            {project.subtitle}
          </h3>
        </div>

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <button
          className="project-enter"
          type="button"
          onClick={handleProjectClick}
        >
          <span>
            DIVE INTO THE WORLD
          </span>

          <span className="project-arrow">
            â†—
          </span>
        </button>
      </div>

      <div className="project-side-label">
        <span>
          {project.id === "vayu" &&
            "UNDERSTAND Â· ANALYZE Â· REASON Â· PLAN Â· VISUALIZE"}

          {project.id === "svasthya" &&
            "HEALTH Â· TRADITION Â· TECHNOLOGY Â· A BETTER YOU"}

          {project.id === "aj" &&
            "ASK Â· LEARN Â· AUTOMATE Â· GET THINGS DONE"}

          {project.id === "farmer" &&
            "LAND Â· SOIL Â· DATA Â· INTELLIGENCE"}
        </span>
      </div>
    </article>
  );
}

export default function Projects({
  onOpenProject,
}) {
  return (
    <section className="projects">

      <div className="projects-grid" />

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="projects-header">

        <div className="projects-index">
          <span>04</span>
          <i />
          <small>PROJECTS</small>
        </div>

        <div className="projects-title">
          <p>
            THINGS Iâ€™VE BUILT.
          </p>

          <h1>
            FROM
            <br />
            <em>
              IDEA TO PRODUCT.
            </em>
          </h1>
        </div>

        <div className="projects-intro">
          <p>
            A selection of products and
            intelligent systems built around
            real-world problems.
          </p>

          <span>
            EXPLORE THE WORLDS BELOW
          </span>
        </div>

      </header>

      {/* =================================================
          PROJECT WORLD
      ================================================= */}

      <div className="projects-world">

        {projects.map(
          (project, index) => (
            <ProjectItem
              key={project.id}
              project={project}
              index={index}
              onOpenProject={onOpenProject}
            />
          )
        )}

      </div>

      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="projects-footer">

        <span>
          DIVE INTO THE PROJECT WORLD
        </span>

        <i>
          â†“
        </i>

      </footer>

    </section>
  );
}
