// Education.js
import React from 'react';

const Education = () => {
  return (
    <section >
      <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white border-b-2 border-blue-600 dark:border-yellow-400 inline-block pb-2">
        Education
      </h2>
      <ul className="space-y-6 text-gray-700 dark:text-gray-300 text-lg">
        <li>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            B.E. Computer Science and Engineering
          </h3>
          <p className="text-lg">
            Sathyabama Institute of Science and Technology – 2022 to 2026
          </p>
          <p className="text-sm italic">CGPA: 8.11 (Current)</p>
        </li>
        <li>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Higher Secondary Schooling – 12th
          </h3>
          <p className="text-lg">Belfeild Matriculation Hr. Sec. School – 2022</p>
          <p className="text-sm italic">Percentage: 87.16%</p>
        </li>
        <li>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            SSLC – 10th
          </h3>
          <p className="text-lg">Belfeild Matriculation Hr. Sec. School – 2020</p>
          <p className="text-sm italic">Percentage: 73.8%</p>
        </li>
      </ul>
    </section>
  );
};

export default Education;
