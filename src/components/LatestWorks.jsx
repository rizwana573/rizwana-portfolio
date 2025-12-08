export default function LatestWorks() {
  return (
    <>
      <section
        className="max-w-screen-xl mx-auto px-14 work-section"
        id="latestWorks"
      >
        <h2 className="text-4xl w-max mx-auto text-center text-[#fc815ce3] border-b-2 border-[#fc815ce3]">
          Latest Works
        </h2>
        {/* Expense Tracker */}
        <div className="gap-[300px] mt-20 grid grid-cols-1 md:grid-cols-2 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-yellow-300 to-orange-600"></div>

          <a
            href="https://rizz-expense-tracker.netlify.app/"
            target="_blank"
            className="w-full relative content-center"
          >
            <span className="visit-site-2">
              Expense Tracker
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
            <img
              className="mr-auto w-[400px]"
              src="../src/assets/expenseTracker.png"
              alt="Expense Tracker App"
            />
          </a>

          <div className="w-full">
            <h3 className="text-[#ffe578] font-bold text-4xl">
              Expense Tracker
            </h3>
            <span className="text-[#ffe578] text-lg">Finance App</span>

            <p className="text-justify mt-2">
              A clean and intuitive expense tracking app that lets users manage
              daily spending with ease. Includes transaction history,
              categorized entries, and real-time income and balance
              calculations—all in a fast, responsive interface.
            </p>

            <ul className="flex flex-wrap gap-2 mt-2">
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #react
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #context API
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #javascript
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #css
              </li>
            </ul>
          </div>
        </div>

        {/* Countries Explorer */}
        <div className="gap-[300px] mt-20 grid grid-cols-1 md:grid-cols-2 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange-500 to-red-600"></div>

          <div className="w-full">
            <h3 className="text-[#fc815ce3] font-bold text-4xl">
              Countries Explorer
            </h3>
            <span className="text-[#fc815ce3] text-lg">REST API App</span>

            <p className="text-justify mt-2">
              A powerful country search and exploration app featuring
              region-based filtering, detailed country views, and a smooth
              light/dark theme switcher. Built with a focus on accessibility,
              responsiveness, and clean UI animations.
            </p>

            <ul className="flex flex-wrap gap-2 mt-2">
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #react
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #REST API
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #javascript
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #css
              </li>
            </ul>
          </div>

          <a
            href="https://riz-countries-app-with-react.netlify.app/"
            target="_blank"
            className="w-full relative content-center"
          >
            <span className="visit-site-1">
              Countries Explorer
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
            <img
              className="ml-auto w-[400px]"
              src="../src/assets/countriesApp.png"
              alt="Countries Explorer App"
            />
          </a>
        </div>

        <div className="gap-[300px] mt-20 grid grid-cols-1 md:grid-cols-2 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange-500 to-red-600"></div>
          <a
            href="https://www.edsheeran.com/pressingplay"
            target="_blank"
            className="w-full relative content-center"
          >
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl">
              <img
                className="mr-auto w-full h-full object-cover"
                src="../src/assets/pressingPlay.png"
                alt="Ed Sheeran Pressing Play Game"
              />
            </div>

            <span className="visit-site-1">
              Edsheeran
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </a>

          <div className="w-full">
            <h3 className="text-[#fc815ce3] font-bold text-4xl">Edsheeran</h3>
            <span className="text-[#fc815ce3] text-lg">
              (Game - Track Reveal)
            </span>
            <p className="text-justify mt-2">
              Developed an immersive, narrative-style web experience featuring
              interactive image hotspots, synchronized audio playback, and
              smooth animations. Implemented modular components for content
              reveals, optimized asset loading for performance, and ensured a
              fully responsive, accessible design across devices.
            </p>

            <ul className="flex flex-wrap gap-2 mt-2">
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #drupal
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #css
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #javascript
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #adobe XD
              </li>
            </ul>
          </div>
        </div>
        <div className="gap-[300px] mt-20 grid grid-cols-1 md:grid-cols-2 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-yellow-300 to-orange-600"></div>
          <div className="w-full">
            <h3 className="text-[#ffe578] font-bold text-4xl">RKS Band</h3>
            <span className="text-[#ffe578] text-lg">Artist website</span>
            <p className="text-justify mt-2">
              As a lead developer, collaborated with the team to build a highly
              immersive website for RKS Band featuring folder-style navigation,
              layered animations, and custom video pop-ups.
            </p>

            <ul className="flex flex-wrap gap-2 mt-2">
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #drupal
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #css
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #javascript
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #jQuery
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #figma
              </li>
            </ul>
          </div>
          <a
            href="https://www.rksband.com/"
            className="w-full relative content-center"
          >
            <span className="visit-site-2">
              RKS Band
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl">
              <img
                className="mr-auto w-full h-full object-cover"
                src="../src/assets/rksband.png"
                alt="RKS band site"
              />
            </div>
          </a>
        </div>
        <div className="gap-[300px] mt-20 grid grid-cols-1 md:grid-cols-2 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange-500 to-red-600"></div>
          <a
            href="https://www.yaelokre.com/"
            className="w-full relative content-center"
          >
            <span className="visit-site-1">
              Yaelokre
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl">
              <img
                className="mr-auto w-full h-full object-cover"
               src="../src/assets/yaelokre.png"
                alt="Yaelokre site image"
              />
            </div>
          </a>
          <div className="w-full">
            <h3 className="text-[#fc815ce3] font-bold text-4xl">Yaelokre</h3>
            <span className="text-[#fc815ce3] text-lg">Artist website</span>
            <p className="text-justify mt-2">
              Developed yaelokre.com with smooth animations and interactive
              layouts to deliver an engaging brand experience.
            </p>

            <ul className="flex flex-wrap gap-2 mt-2">
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #drupal
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #css
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #javascript
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #jQuery
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #figma
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="gap-[300px] mt-20 grid grid-cols-1 md:grid-cols-2 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-yellow-300 to-orange-600"></div>
          <div className="w-full">
            <h3 className="text-[#ffe578] font-bold text-4xl">Yaelokre</h3>
            <span className="text-[#ffe578] text-lg">Artist website</span>
            <p className="text-justify mt-2">
              Developed yaelokre.com with smooth animations and interactive
              layouts to deliver an engaging brand experience.
            </p>

            <ul className="flex flex-wrap gap-2 mt-2">
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #drupal
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #css
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #javascript
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #jQuery
              </li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px]">
                #figma
              </li>
            </ul>
          </div>
          <a
            href="https://www.yaelokre.com/"
            className="w-full relative content-center"
          >
            <span className="visit-site-2">
              Yaelokre
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl">
              <img
                className="mr-auto w-full h-full object-cover"
                src="../src/assets/yaelokre.png"
                alt="Yaelokre site image"
              />
            </div>
          </a>
        </div> */}
      </section>
    </>
  );
}
