// Certifications.js
import React from 'react';

const Certifications = () => {
  return (
    <section >
      <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white border-b-2 border-blue-600 dark:border-yellow-400 inline-block pb-2">
        Certifications
      </h2>
      <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed list-disc pl-5">
        <li><strong>Oracle Cloud Infrastructure 2023 Certified Foundations Associate</strong></li>
        <li><strong>Preparing Data for Analysis with Microsoft Excel</strong> – Microsoft on Coursera</li>
        <li><strong>Basics of Python</strong> – Infosys Springboard</li>
        <li><strong>Database Management Systems (DBMS)</strong> – NPTEL (Scored 51%)</li>
        <li><strong>Digital 101</strong> – NASSCOM Future Skills Prime (Silver Certificate)</li>
        <li>
          <strong>MATLAB Courses</strong> – 100% Completion:
          <ul className="list-disc pl-5">
            <li>MATLAB Fundamentals</li>
            <li>MATLAB Onramp</li>
            <li>MATLAB Object-Oriented Programming Onramp</li>
            <li>MATLAB Programming Techniques</li>
          </ul>
        </li>
        <li><strong>MongoDB Basics</strong> – Completed on MongoDB Atlas & Compass</li>
        <li><strong>Introduction to Packet Tracer</strong> – Cisco Networking Academy</li>
        <li><strong>Cybersecurity Essentials</strong> – Cisco Networking Academy</li>
        <li><strong>Quantum-Safe Encryption Essentials</strong> – IBM</li>
        <li><strong>Data Visualization in R</strong> – Cognitive Class (IBM Developer Skills Network)</li>
      </ul>
    </section>
  );
};

export default Certifications;
