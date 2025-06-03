import React from "react";

export default function About() {
  return (
    <section >
      <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white border-b-2 border-blue-600 dark:border-yellow-400 inline-block pb-2">
        About Me
      </h2>
      <p className="text-gray-700 dark:text-gray-300 max-w-lg leading-relaxed mb-10 text-lg">
        I'm a passionate developer who loves crafting clean, responsive, and user-friendly websites.
        My focus is on React, JavaScript, and backend technologies. I enjoy learning and solving real-world problems creatively.
      </p>

      {/* Skills Section */}
      <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white border-b-2 border-blue-600 dark:border-yellow-400 inline-block pb-2">
        Skills
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700 dark:text-gray-300 text-lg">
        <li className="flex items-center space-x-3">
          <i className="fas fa-code text-blue-600 dark:text-yellow-400 text-xl"></i>
          <span>JavaScript (ES6+), React.js</span>
        </li>
        <li className="flex items-center space-x-3">
          <i className="fas fa-server text-blue-600 dark:text-yellow-400 text-xl"></i>
          <span>Node.js, Express.js, MongoDB</span>
        </li>
        <li className="flex items-center space-x-3">
          <i className="fas fa-paint-brush text-blue-600 dark:text-yellow-400 text-xl"></i>
          <span>HTML5, CSS3, Tailwind CSS</span>
        </li>
        <li className="flex items-center space-x-3">
          <i className="fas fa-database text-blue-600 dark:text-yellow-400 text-xl"></i>
          <span>MySQL, SQL, Power BI, Tableau, PHP (learning)</span>
        </li>
        <li className="flex items-center space-x-3">
          <i className="fas fa-tools text-blue-600 dark:text-yellow-400 text-xl"></i>
          <span>Git, GitHub, VS Code</span>
        </li>
        <li className="flex items-center space-x-3">
          <i className="fas fa-laptop-code text-blue-600 dark:text-yellow-400 text-xl"></i>
          <span>Java, C</span>
        </li>
      </ul>
    </section>
  );
}
