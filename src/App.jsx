
import { useEffect, useState } from "react";

import Intro from "./components/Intro";
import Hero from "./components/Hero";
import Systems from "./components/Systems";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import FutureProjects from "./components/FutureProjects";
import SocialConnect from "./components/SocialConnect";

import Vayu from "./components/Vayu";
import Svasthya from "./components/Svasthya";
import AJ from "./components/AJ";
import FarmerAI from "./components/FarmerAI";

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  const [activeProject, setActiveProject] = useState(null);

  /*
    Whenever the active project view changes,
    start that view from the top.
  */
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [activeProject]);

  // =========================================================
  // INTRO SCREEN
  // =========================================================

  if (!introFinished) {
    return (
      <Intro
        onComplete={() => {
          setIntroFinished(true);
        }}
      />
    );
  }

  // =========================================================
  // PROJECT DETAIL SCREENS
  // =========================================================

  if (activeProject === "vayu") {
    return (
      <Vayu
        onBack={() => {
          setActiveProject(null);
        }}
      />
    );
  }

  if (activeProject === "svasthya") {
    return (
      <Svasthya
        onBack={() => {
          setActiveProject(null);
        }}
      />
    );
  }

  if (activeProject === "aj") {
    return (
      <AJ
        onBack={() => {
          setActiveProject(null);
        }}
      />
    );
  }

  if (activeProject === "farmer") {
    return (
      <FarmerAI
        onBack={() => {
          setActiveProject(null);
        }}
      />
    );
  }

  // =========================================================
  // MAIN PORTFOLIO
  // =========================================================

  return (
    <main>
      {/* SCREEN 1 — HERO */}
      <Hero />

      {/* SCREEN 2 — SYSTEMS */}
      <Systems />

      {/* SCREEN 3 — PROFILE */}
      <Profile />

      {/* SCREEN 4 — PROJECTS */}
      <Projects
        onOpenProject={(projectId) => {
          setActiveProject(projectId);
        }}
      />

      {/* SCREEN 5 — FUTURE PROJECTS */}
      <FutureProjects />

      {/* SCREEN 6 — SOCIAL MEDIA / CONTACT / THANK YOU */}
      <SocialConnect />
    </main>
  );
}

export default App;
