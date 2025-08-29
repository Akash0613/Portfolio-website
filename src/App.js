import React, { useState, useEffect } from 'react';
import './App.css';
import AchievementsLeadership from './AchievementsLeadership';
import Education from './Education'; 
import Certifications from './Certifications';
import About from './About';
import Contact from './Contact';
import ProjectSection from './Project';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 dark:from-black dark:to-black transition-colors duration-500 flex">
      
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-6 right-6 bg-blue-600 dark:bg-yellow-400 text-white dark:text-gray-900 px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 dark:hover:bg-yellow-300 transition z-50"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
      </button>

      {/* Hamburger Menu Button for small screens */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-6 left-6 z-50 p-2 rounded-md bg-blue-600 dark:bg-yellow-400 text-white dark:text-gray-900 md:hidden focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-yellow-300"
        aria-label="Toggle Sidebar"
        aria-expanded={sidebarOpen}
      >
        <i className="fas fa-bars"></i>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-white dark:bg-gray-800 shadow-2xl p-12 flex flex-col items-center text-center transition-colors duration-700 overflow-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-thumb-rounded dark:scrollbar-thumb-yellow-400
          transform md:transform-none
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
          z-40
        `}
      >
        <h1 className="text-5xl font-extrabold mb-5 tracking-tight leading-tight text-gray-900 dark:text-white">
          Hi, I'm Akash Antony
        </h1>
        <img
          src="/mypic.jpg"
          alt="Akash Antony"
          className="w-44 h-44 rounded-full object-cover border-8 border-blue-600 dark:border-yellow-400 shadow-lg mb-8 transition-colors duration-500"
        />

        {/* Social Icons */}
        <div className="flex space-x-8 text-3xl text-blue-600 dark:text-yellow-400 mb-8">
          <a
            href="https://github.com/Akash0613"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-900 dark:hover:text-gray-100 transition"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/akash-antony-603a5b264/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gray-900 dark:hover:text-gray-100 transition"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="mailto:akashantony224@gmail.com"
            aria-label="Email"
            className="hover:text-gray-900 dark:hover:text-gray-100 transition"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=919345771772"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-gray-900 dark:hover:text-gray-100 transition"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>

        <p className="text-xl font-medium mb-10 text-gray-700 dark:text-gray-300 tracking-wide">
          Full-Stack Developer
        </p>

        {/* Resume Button */}
        <a
          href="/SIST-BE-CSE-42110045-Akash Antony J.pdf"
          download
          className="inline-block bg-blue-600 dark:bg-yellow-400 text-white dark:text-gray-900 px-10 py-3 rounded-full font-semibold shadow-xl hover:bg-blue-700 dark:hover:bg-yellow-300 focus:outline-none focus:ring-4 focus:ring-blue-400 dark:focus:ring-yellow-300 transition"
        >
          Download Resume
        </a>
      </aside>

      {/* Overlay for sidebar on small screens */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Main Content */}
      <main
        className="flex-1 p-8 space-y-16 max-w-5xl w-full transition-all duration-300 md:ml-80"
      >
        {/* About Section */}
        <section className="section-card">
          <About />
        </section>

        {/* Projects Section */}
        <section className="section-card">
          <ProjectSection />
        </section>

        {/* Education Section */}
        <section className="section-card">
          <Education />
        </section>

        {/* Certifications Section */}
        <section className="section-card">
          <Certifications />
        </section>

        {/* Achievements & Leadership Section */}
        <section className="section-card">
          <AchievementsLeadership />
        </section>

        {/* Contact Section */}
        <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-10 text-center transition-colors duration-500">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
