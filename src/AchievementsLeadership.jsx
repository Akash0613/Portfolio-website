import React, { useState } from "react";

function AchievementsLeadership() {
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const images = [
    { src: "/memento.jpg", alt: "Memento for Organizing Symposium", caption: "Symposium Memento" },
    { src: "/luminary.jpg", alt: "Luminary Award", caption: "Luminary Award" },
    { src: "/ieee.jpg", alt: "IEEE Chair Recognition", caption: "IEEE Chair Recognition" },
   
   
    { src: "/event2.jpg", alt: "Event 2", caption: "With Dean Mam" },
    { src: "/e3.jpg", alt: "Event 3", caption: "IEEE 2024 Members" },
    { src: "/Code Clash.jpg", alt: "Code Clash", caption: "Code Clash" },
    { src: "/e4.jpg", alt: "Event 3", caption: "IEEE" },
    { src: "/e5.jpg", alt: "Event 3", caption: "IEEE 2024 Members" },
    { src: "/e6.jpg", alt: "Event 3", caption: "Decode event" },
    { src: "/e1.jpg", alt: "Event 3",  },
    { src: "/e7.jpg", alt: "Event 3",  },
    { src: "/e8.jpg", alt: "Event 3",  },
    { src: "/e9.jpg", alt: "Event 3", },
    { src: "/e10.jpg", alt: "Event 3",  },
    { src: "/e11.jpg", alt: "Event 3", },
    { src: "/e12.jpg", alt: "Event 3",  },
    { src: "/e13.jpg", alt: "Event 3",  },
    { src: "/e14.jpg", alt: "Event 3", },
    { src: "/e15.jpg", alt: "Event 3", },
    { src: "/e16.jpg", alt: "Event 3",  },
    { src: "/e17.jpg", alt: "Event 3",  },
    { src: "/e18.jpg", alt: "Event 3", },
    { src: "/e19.jpg", alt: "Event 3",  },
  ];

  return (
    <div className="flex flex-col">
      {/* Header with title and button side-by-side */}
      <div className="flex items-center justify-between mb-6 animate-fadeIn">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white border-b-2 border-blue-600 dark:border-yellow-400 inline-block pb-2">
          Achievements & Leadership
        </h2>

        <button
          onClick={() => setGalleryOpen(true)}
          className="px-6 py-2 bg-blue-600 dark:bg-yellow-400 text-white rounded hover:bg-blue-700 transition whitespace-nowrap"
        >
          Open Gallery
        </button>
      </div>

      {/* Achievements list */}
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-3 text-lg leading-relaxed">
        <li className="animate-fadeIn">
          Chair - IEEE Information Theory Society, Sathyabama Institute of Science & Technology
        </li>
        <li className="animate-fadeIn">
          Momento for Organizing Silicon 2K24 National Level Symposium
        </li>
        <li className="animate-fadeIn">
          Received Luminary award for overall outstanding Performance
        </li>
      </ul>

      {/* Thumbnails */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.slice(0, 3).map(({ src, alt, caption }) => (
          <div
            key={src}
            className="text-center w-32 h-32 overflow-hidden rounded-lg shadow-md flex flex-col items-center cursor-pointer dark:bg-gray-700 transform transition-transform duration-300 ease-in-out hover:scale-105 animate-fadeIn"
            onClick={() => setFullscreenImage({ src, alt, caption })}
          >
            <img src={src} alt={alt} className="w-full h-full object-cover" />
            <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">{caption}</p>
          </div>
        ))}
      </div>

      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={() => setFullscreenImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <img
            src={fullscreenImage.src}
            alt={fullscreenImage.alt}
            className="max-w-full max-h-full rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal on image click
          />
          <p className="mt-4 text-white text-lg">{fullscreenImage.caption}</p>
          <button
            onClick={() => setFullscreenImage(null)}
            className="mt-6 px-4 py-2 bg-red-600 rounded text-white hover:bg-red-700 focus:outline-none"
          >
            Close
          </button>
        </div>
      )}

      {/* Gallery Modal */}
      {galleryOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 flex flex-col p-6 z-50 overflow-auto animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-white text-2xl font-semibold">Event & Outreach Gallery</h3>
            <button
              onClick={() => setGalleryOpen(false)}
              className="text-white bg-red-600 px-4 py-2 rounded hover:bg-red-700 focus:outline-none"
            >
              Close
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {images.map(({ src, alt, caption }) => (
              <div
                key={src}
                className="cursor-pointer overflow-hidden rounded-lg shadow-lg bg-gray-900"
                style={{ aspectRatio: "1 / 1" }}
                onClick={() => {
                  setFullscreenImage({ src, alt, caption });
                  setGalleryOpen(false);
                }}
              >
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-300 ease-in-out"
                  loading="lazy"
                />
                <p className="text-sm text-center text-white mt-1">{caption}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default AchievementsLeadership;
