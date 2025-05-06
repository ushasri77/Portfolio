import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="navbar">
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero / Landing Section */}
      <section className="hero" id="about">
        <h2 className="greeting">Hello!</h2>
        <h1 className="name">I'm Ushasri Palabindela</h1>
        <h3 className="role">A Software Developer</h3>
        <p className="description">
          I do not follow certain styles, philosophies or teachers.
        </p>
        <div className="contact-info">
          <a href="#contact" className="contact-btn">Contact</a>
          <a href="mailto:ushasripalabindela@gmail.com" className="email">
            ushasripalabindela@gmail.com
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="section" id="about-details">
        <h2>About Me</h2>
        <p>
          I am a motivated software developer with a passion for learning and
          creating. I specialize in front-end development with a keen eye for
          design and usability.
        </p>
      </section>

      {/* Skills Section */}
      <section className="section" id="skills">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>HTML5 / CSS3 / JavaScript</li>
          <li>React / Vite / Tailwind CSS</li>
          <li>Git / GitHub</li>
          <li>Responsive Web Design</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="section" id="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Portfolio Website</h3>
          <p>A personal portfolio to showcase my projects and skills. Built using React and deployed on GitHub Pages.</p>
        </div>
        <div className="project">
          <h3>Weather App</h3>
          <p>A simple weather application using OpenWeatherMap API with real-time location-based forecasts.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact">
        <h2>Contact</h2>
        <p>Feel free to reach out to me for collaboration or just a chat.</p>
        <p>Email: <a href="mailto:ushasripalabindela@gmail.com">ushasripalabindela@gmail.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile">linkedin.com/in/yourprofile</a></p>
      </section>
    </div>
  );
}

export default App;

