import React from "react";

const projectsData = [
  {
    id: 1,
    title: "Venue Booking Management System",
    description: "A web app to book college venues using React, Express, and MongoDB.",
    link: "https://github.com/Akash0613/Venue-Booking-Management-System.git",
    linkText: "View on GitHub",
    isLink: true,
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Personal portfolio built with React and Tailwind CSS showcasing projects and skills.",
    buttonText: "Live Demo",
    isButton: true,
    onClick: () => alert("Demo coming soon!"),
  },
  {
    id: 3,
    title: "Product Return Rate Analysis By Region",
    description: "Tech Stack: Excel, Power BI, Tableau",
  },
];

export default function ProjectSection() {
  return (
    <section>
      <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white border-b-2 border-blue-600 dark:border-yellow-400 inline-block pb-2">
        Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projectsData.map(
          ({
            id,
            title,
            description,
            link,
            linkText,
            isLink,
            buttonText,
            isButton,
            onClick,
          }) => (
            <div
              key={id}
              className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow hover:shadow-lg transition cursor-pointer"
            >
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                {title}
              </h3>
              <p
                className={`text-gray-700 dark:text-gray-300 mb-4 leading-relaxed ${
                  id === 3 ? "font-semibold" : ""
                }`}
              >
                {description}
              </p>

              {isLink && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 dark:text-yellow-400 font-semibold hover:underline"
                >
                  {linkText}{" "}
                  <i className="fas fa-external-link-alt ml-1 text-sm"></i>
                </a>
              )}

              {isButton && (
                <button
                  onClick={onClick}
                  className="
                    text-blue-600 dark:text-yellow-900
                    font-semibold
                    hover:underline
                    dark:bg-yellow-400 bg-transparent
                    border-none
                    cursor-pointer
                    px-4 py-2
                    rounded-md
                    transition duration-200
                    hover:bg-yellow-600 dark:hover:bg-yellow-600
                    hover:text-white dark:hover:text-white
                  "
                >
                  {buttonText}
                </button>
              )}
            </div>
          )
        )}
      </div>
    </section>
  );
}
