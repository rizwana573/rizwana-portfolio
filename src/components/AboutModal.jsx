import React from "react";

export default function AboutModal({ open, onClose }) {
  return (
    <div
      id="aboutModal"
      className={`fixed inset-0 flex items-center justify-center bg-black/60 z-50 transition-opacity duration-500 ${open ? "" : "opacity-0 pointer-events-none hidden"}`}
    >
      <div className={`bg-white text-gray-800 rounded-2xl shadow-2xl max-w-lg w-full p-8 transform transition-all duration-500 ${open ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}>
        <h2 className="text-3xl font-bold mb-4 text-center text-orange-600">About Me</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Hi there!, I’m Rizwana! A passionate <strong>front-end developer</strong> with
          10+ years of experience in building interactive and visually stunning websites.
          I love blending creativity with code to deliver engaging digital experiences.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          Languages and technologies I work with include: <strong>HTML5, CSS3, JavaScript
          (ES6+), jQuery, Bootstrap, Tailwind CSS, React.js, Git/GitHub, Figma, Adobe
          XD, Photoshop.</strong>
        </p>
        <div className="flex justify-center mt-6">
          <button onClick={onClose} id="closeModal" className="px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-orange-500 to-red-600 text-white hover:scale-105 transition-all duration-300">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
