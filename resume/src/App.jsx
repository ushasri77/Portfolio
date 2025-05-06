import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="w-full h-full">
      {/* Hero Section */}
      <div className="h-screen w-full relative hero-section">
        {/* Navbar */}
        <nav className="absolute top-0 right-0 p-6 z-10">
          <ul className="flex gap-6 text-white text-sm sm:text-base font-medium">
            <li><a href="#about" className="hover:text-pink-300">About</a></li>
            <li><a href="#projects" className="hover:text-pink-300">Projects</a></li>
            <li><a href="#skills" className="hover:text-pink-300">Skills</a></li>
            <li><a href="#contact" className="hover:text-pink-300">Contact</a></li>
          </ul>
        </nav>

        {/* Hero Content */}
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-5xl sm:text-6xl font-bold text-pink-300">Hello!</h2>
          <h1 className="text-6xl sm:text-7xl font-extrabold text-orange-300 my-6">
            I'm Ushasri Palabindela
          </h1>
          <p className="mb-6 max-w-2xl text-2xl sm:text-3xl">
            A Software Developer<br />
            Welcome to My Portfolio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a href="#contact">
              <button className="px-8 py-3 border border-pink-400 text-pink-300 hover:bg-pink-400 hover:text-white transition rounded-full text-lg">
                Contact
              </button>
            </a>
            <a href="mailto:ushasripalabindela@gmail.com" className="underline text-lg">
              ushasripalabindela@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="section-bg about-section">
        <div className="max-w-4xl text-center px-4">
          <h2 className="text-5xl font-bold mb-8 text-pink-400">About Me</h2>
          <p className="text-2xl leading-10">
            I'm a highly motivated and detail-oriented software developer with a strong foundation in front-end and back-end technologies. I specialize in building responsive web applications using JavaScript, React, Node.js, and TailwindCSS. I enjoy turning complex problems into clean, elegant solutions and am passionate about continuous learning and exploring new tools in the developer ecosystem.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-bg projects-section">
        <div className="max-w-4xl text-center px-4">
          <h2 className="text-5xl font-bold mb-8 text-orange-400">Projects</h2>
          <div className="space-y-10">
            <div>
              <h3 className="text-3xl font-semibold mb-3 text-orange-300">Dynamic Project Gallery</h3>
              <p className="text-2xl leading-10">
                A responsive and interactive web-based gallery for showcasing projects dynamically using React. Includes filtering, sorting, and detailed project views.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold mb-3 text-orange-300">Electronic Travelling Pass</h3>
              <p className="text-2xl leading-10">
                A digital system for generating, managing, and validating electronic travel passes. Built with user authentication, QR code generation, and admin controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-bg skills-section">
        <div className="max-w-6xl text-center px-4">
          <h2 className="text-5xl font-bold mb-8 text-green-400">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              "JavaScript",
              "React",
              "TailwindCSS",
              "Node.js",
              "Python",
              "C++",
              "Git",
              "Java",
              "Html & CSSS"
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-80 rounded-xl shadow-md p-8 text-2xl font-semibold hover:scale-105 hover:shadow-lg transition transform duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-bg contact-section">
        <div className="max-w-4xl text-center px-4">
          <h2 className="text-5xl font-bold mb-8 text-blue-400">Contact</h2>
          <p className="text-2xl leading-10 mb-6">Feel free to reach out to me at:</p>
          <a href="mailto:ushasripalabindela@gmail.com" className="underline text-pink-300 text-xl">
            ushasripalabindela@gmail.com
          </a>
          
        </div>
      </section>
    </div>
  );
};

export default App;
