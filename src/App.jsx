import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          G Luxe<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">

        <div className="hero-text">

          <p className="welcome">
            WELCOME TO MY PORTFOLIO ✨
          </p>

          <h1>
            Hi, I'm <span>Grace</span>
          </h1>

          <h2>
            Software Engineering Student & Aspiring Developer
          </h2>

          <p className="intro">
            I'm passionate about software development, web technologies,
            problem-solving and creating digital experiences that are
            simple, useful and beautiful.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

        </div>

        <div className="hero-card">

          <div className="profile-circle">
            GL
          </div>

          <h3>Software Engineering</h3>

          <p>
            Building • Learning • Creating
          </p>

        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="section">

        <div className="section-title">
          <p>GET TO KNOW ME</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">

          <div className="about-card">

            <h3>Who I Am</h3>

            <p>
              I'm a Software Engineering student with a background in
              Information Technology.
            </p>

            <p>
              I enjoy learning how technology works and turning ideas
              into practical software solutions.
            </p>

            <p>
              I'm continuously developing my skills in programming,
              web development, databases, networking and user experience.
            </p>

          </div>

          <div className="about-stats">

            <div>
              <h3>01</h3>
              <p>IT Background</p>
            </div>

            <div>
              <h3>02</h3>
              <p>Software Engineering</p>
            </div>

            <div>
              <h3>∞</h3>
              <p>Always Learning</p>
            </div>

          </div>

        </div>

      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills-section">

        <div className="section-title">
          <p>WHAT I WORK WITH</p>
          <h2>My Skills</h2>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <span>01</span>
            <h3>HTML & CSS</h3>
            <p>
              Building responsive and visually appealing websites.
            </p>
          </div>

          <div className="skill-card">
            <span>02</span>
            <h3>JavaScript</h3>
            <p>
              Creating interactive websites and solving programming
              problems.
            </p>
          </div>

          <div className="skill-card">
            <span>03</span>
            <h3>React</h3>
            <p>
              Developing modern component-based web applications.
            </p>
          </div>

          <div className="skill-card">
            <span>04</span>
            <h3>Java</h3>
            <p>
              Applying object-oriented programming and data structures.
            </p>
          </div>

          <div className="skill-card">
            <span>05</span>
            <h3>Databases</h3>
            <p>
              Working with database concepts and data management.
            </p>
          </div>

          <div className="skill-card">
            <span>06</span>
            <h3>UI/UX</h3>
            <p>
              Designing clean and user-friendly interfaces.
            </p>
          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">

        <div className="section-title">
          <p>MY WORK</p>
          <h2>Featured Projects</h2>
        </div>

        <div className="projects-grid">

          <div className="project-card">

            <div className="project-number">
              01
            </div>

            <h3>Student Portal</h3>

            <p>
              A web application that brings student resources,
              schedules, assignments and academic information together.
            </p>

            <div className="tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>

            <button>
              Explore Project →
            </button>

          </div>

          <div className="project-card">

            <div className="project-number">
              02
            </div>

            <h3>Task Manager</h3>

            <p>
              A productivity application for organizing tasks,
              priorities and everyday responsibilities.
            </p>

            <div className="tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>UI/UX</span>
            </div>

            <button>
              Explore Project →
            </button>

          </div>

          <div className="project-card">

            <div className="project-number">
              03
            </div>

            <h3>Student Management System</h3>

            <p>
              A system for managing student records, searching,
              adding and removing students.
            </p>

            <div className="tags">
              <span>Java</span>
              <span>Data Structures</span>
              <span>Database</span>
            </div>

            <button>
              Explore Project →
            </button>

          </div>

        </div>

      </section>

      {/* EDUCATION */}
      <section id="education" className="section education-section">

        <div className="section-title">
          <p>MY JOURNEY</p>
          <h2>Education</h2>
        </div>

        <div className="education-card">

          <div className="education-year">
            2025 — Present
          </div>

          <div>
            <h3>Diploma in Software Engineering</h3>

            <p>
              Zetech University
            </p>

            <p className="education-description">
              Studying software development, programming, databases,
              networking, system analysis and user experience.
            </p>
          </div>

        </div>

        <div className="education-card">

          <div className="education-year">
            Completed
          </div>

          <div>
            <h3>Certificate in Information Technology</h3>

            <p>
              Information Technology
            </p>

            <p className="education-description">
              Foundation in programming, computer systems,
              networking and information technology.
            </p>
          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">

        <div className="section-title">
          <p>LET'S CONNECT</p>
          <h2>Contact Me</h2>
        </div>

        <p className="contact-text">
          I'm open to internships, opportunities, collaborations
          and interesting software projects.
        </p>

        <div className="contact-buttons">

          <a href="mailto:your-email@example.com">
            Email Me
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer>

        <p>
          © 2026 Grace. All rights reserved.
        </p>

        <p>
          G Luxe ✦
        </p>

      </footer>

    </div>
  );
}

export default App;