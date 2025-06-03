import React from "react";

export default function Contact() {
  return (
    <section >
      <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white border-b-2 border-blue-600 dark:border-yellow-400 inline-block pb-2">
        Contact
      </h2>
      <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto text-lg mb-8 leading-relaxed">
        I'm open to opportunities and collaborations! Feel free to reach out.
      </p>
      <a
        href="https://api.whatsapp.com/send?phone=919345771772"
        className="inline-block bg-blue-600 dark:bg-yellow-400 text-white dark:text-gray-900 px-8 py-3 rounded-full font-semibold shadow-xl hover:bg-blue-700 dark:hover:bg-yellow-300 transition"
      >
        Say Hello
      </a>
    </section>
  );
}
