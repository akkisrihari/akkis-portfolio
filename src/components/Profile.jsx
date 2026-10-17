import "./Profile.css";

const skills = [
  {
    name: "AI Engineering",
    icon: "✦",
    tone: "blue",
  },
  {
    name: "Generative AI & LLMs",
    icon: "◎",
    tone: "green",
  },
  {
    name: "Agentic AI & Automation",
    icon: "◇",
    tone: "purple",
  },
  {
    name: "Product Engineering",
    icon: "⬡",
    tone: "orange",
  },
  {
    name: "Business Analysis",
    icon: "◫",
    tone: "gold",
  },
  {
    name: "Solutions Engineering",
    icon: "⚙",
    tone: "cyan",
  },
];

const experience = [
  {
    period: "SEP 2025 — JUN 2026",
    company: "GOSURE.AI",
    role: "Trainee Solution Engineer / Product Engineer",
  },
  {
    period: "APR 2025 — JUL 2025",
    company: "UNIFIED MENTOR",
    role: "Machine Learning Intern",
  },
  {
    period: "2025",
    company: "EXPOSYS DATA LABS",
    role: "SDE Intern",
  },
];

export default function Profile() {
  return (
    <section className="profile">

      <div className="profile-bg" />

      {/* =====================================================
          LEFT — PHOTO
          ===================================================== */}

      <div className="profile-visual">

        <div className="profile-number">
          <span>03</span>
          <i />
          <small>PROFILE</small>
        </div>

        <div className="photo-wrap">
          <img
            src="/src/assets/profile.png"
            alt="Akki Srihari"
          />
        </div>

        <div className="photo-meta">
          <span>AI ENGINEER</span>
          <span>PRODUCT BUILDER</span>
        </div>

      </div>


      {/* =====================================================
          RIGHT — CONTENT
          ===================================================== */}

      <div className="profile-content">

        {/* =====================================================
            NAME + EDUCATION
            ===================================================== */}

        <div className="profile-top">

          <header className="profile-header">

            <div className="profile-role">
              AI ENGINEER
              <b>•</b>
              PRODUCT BUILDER
            </div>

            <h1>
              AKKI
              <br />
              <em>SRIHARI</em>
            </h1>

          </header>


          <section className="top-education">

            <div className="section-title">
              <span>02</span>
              <i />
              <h2>EDUCATION</h2>
            </div>

            <div className="education">

              <div className="education-icon">
                ⌘
              </div>

              <div className="education-details">

                <h3>
                  B.Tech — Electronics &
                  <br />
                  Communication Engineering
                </h3>

                <span>
                  2021 — 2025
                </span>

                <p>
                  Jawaharlal Nehru Technological
                  University, Hyderabad
                </p>

              </div>

            </div>

          </section>

        </div>


        {/* =====================================================
            ABOUT ME
            ===================================================== */}

        <section className="profile-section about-section">

          <div className="section-title">
            <span>01</span>
            <i />
            <h2>ABOUT ME</h2>
          </div>

          <div className="about-content">

            <p className="about-lead">
              I’m Akki Srihari — a Product Builder working at the
              intersection of AI, technology, and real-world problems.
            </p>

            <p>
              I don’t just build software because I can.{" "}
              <strong>
                I build because something can be better.
              </strong>
            </p>

            <p>
              My journey started as a Solutions Engineer, where I worked
              on enterprise SaaS implementations, understood business
              problems, translated requirements into technical solutions,
              integrated APIs, worked with AI-driven automation, tested
              and deployed solutions, and collaborated with clients and
              engineering teams across real-world projects.
            </p>

            <p>
              But building solutions for others made me want to build
              something of my own.
            </p>

            <p className="about-goal">
              <strong>
                My goal is simple: understand the problem deeply, build
                the right solution, and turn ideas into products that
                people actually use.
              </strong>
            </p>

            <p className="about-final">
              <strong>I’m not here just to write code.</strong>
              <br />
              <strong>I’m here to build what’s next.</strong>
            </p>

          </div>

        </section>


        {/* =====================================================
            SKILLS
            ===================================================== */}

        <section className="profile-section skills-section">

          <div className="section-title">
            <span>03</span>
            <i />
            <h2>SKILLS</h2>
          </div>

          <div className="skills">

            {skills.map((skill) => (
              <div
                className={`skill skill-${skill.tone}`}
                key={skill.name}
              >

                <div className="skill-icon">
                  {skill.icon}
                </div>

                <span>
                  {skill.name}
                </span>

              </div>
            ))}

          </div>

        </section>


        {/* =====================================================
            WORK EXPERIENCE
            ===================================================== */}

        <section className="profile-section experience-section">

          <div className="section-title">
            <span>04</span>
            <i />
            <h2>WORK EXPERIENCE</h2>
          </div>

          <div className="experience">

            {experience.map((item, index) => (
              <article
                className="experience-item"
                key={item.company}
              >

                <div className="experience-index">
                  0{index + 1}
                </div>

                <div className="experience-details">

                  <small>
                    {item.period}
                  </small>

                  <h3>
                    {item.company}
                  </h3>

                  <p>
                    {item.role}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </section>

      </div>

    </section>
  );
}