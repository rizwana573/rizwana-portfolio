import React from "react";

export default function LatestWorks() {
  return (
    <section className="max-w-screen-xl mx-auto px-14 work-section" id="latestWorks">
      <h2 className="text-4xl w-max mx-auto text-center text-[#fc815ce3] border-b-2 border-[#fc815ce3]">Latest Works</h2>

      {/* Work block 1 */}
      <div className="gap-[300px] mt-20 grid grid-cols-1 md:grid-cols-2 relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange-500 to-red-600"></div>

        <a href="https://www.edsheeran.com/pressingplay" target="_blank" rel="noreferrer" className="w-full relative content-center">
          <img className="mr-auto w-[400px]" src="/src/assets/pressingPlay.png" alt="Ed Sheeran Pressing Play Game" />
          <span className="visit-site-1">Edsheeran
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </span>
        </a>

        <div className="w-full">
          <h3 className="text-[#fc815ce3] font-bold text-4xl">Edsheeran</h3>
          <span className="text-[#fc815ce3] text-lg">(Game - Track Reveal)</span>
          <p className="text-justify mt-2">Developed an immersive, narrative-style web experience featuring interactive image hotspots, synchronized audio playback, and smooth animations. Implemented modular components for content reveals, optimized asset loading for performance, and ensured a fully responsive, accessible design across devices.</p>

          <ul className="flex flex-wrap gap-2 mt-2">
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">#drupal</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">#css</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">#javascript</li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">#adobe XD</li>
          </ul>
        </div>
      </div>

      {/* Repeat other blocks similarly (RKS Band, Oliver Tree, Yaelokre) */}
      {/* copy/paste the HTML content you provided converting <img src="assets/..." /> to /src/assets/... */}
    </section>
  );
}
