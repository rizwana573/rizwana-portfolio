import ExternalLinkIcon from "../icons/ExternalLinkIcon";

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
        <div className="gap-[300px] mt-20 grid grid-cols-1 md:grid-cols-2 relative max-md:gap-[35px]">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-yellow-300 to-orange-600  max-md:hidden"></div>

          <a
            href="https://rizz-expense-tracker.netlify.app/"
            target="_blank"
            className="w-full relative content-center"
          >
            <span className="visit-site-2">
              Expense Tracker
              <ExternalLinkIcon />
            </span>
            <img
              className="mr-auto w-[400px]"
              src="../assets/expenseTracker.png"
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
        <div className="gap-[300px] mt-20 grid grid-cols-1 md:grid-cols-2 relative max-md:gap-[35px] max-md:flex max-md:flex-col-reverse">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange-500 to-red-600
          max-md:hidden"></div>

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
              <ExternalLinkIcon />
            </span>
            <img
              className="ml-auto w-[400px]"
              src="../assets/countriesApp.png"
              alt="Countries Explorer App"
            />
          </a>
        </div>
         {/* Edsheeran  */}
        <div className="gap-[300px] mt-20 grid grid-cols-1 md:grid-cols-2 relative max-md:gap-[35px]">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b  from-yellow-300 to-orange-600
          max-md:hidden"></div>
          <a
            href="https://www.edsheeran.com/pressingplay"
            target="_blank"
            className="w-full relative content-center"
          >
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl">
              <img
                className="mr-auto w-full h-full object-cover"
                src="../assets/pressingPlay.png"
                alt="Ed Sheeran Pressing Play Game"
              />
            </div>

            <span className="visit-site-1">
              Edsheeran
              <ExternalLinkIcon />
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
        <div className="gap-[300px] mt-20 grid grid-cols-1 md:grid-cols-2 relative max-md:gap-[35px] max-md:flex max-md:flex-col-reverse">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b  from-orange-500 to-red-600 max-md:hidden"></div>
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
              <ExternalLinkIcon />
            </span>
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl">
              <img
                className="mr-auto w-full h-full object-cover"
                src="../assets/rksband.png"
                alt="RKS band site"
              />
            </div>
          </a>
        </div>
        <div className="gap-[300px] mt-20 grid grid-cols-1 md:grid-cols-2 relative max-md:gap-[35px]">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-yellow-300 to-orange-600
           max-md:hidden"></div>
          <a
            href="https://www.yaelokre.com/"
            className="w-full relative content-center"
          >
            <span className="visit-site-1">
              Yaelokre
              <ExternalLinkIcon />
            </span>
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl">
              <img
                className="mr-auto w-full h-full object-cover"
               src="../assets/yaelokre.png"
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
              <ExternalLinkIcon />
            </span>
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl">
              <img
                className="mr-auto w-full h-full object-cover"
                src="../assets/yaelokre.png"
                alt="Yaelokre site image"
              />
            </div>
          </a>
        </div> */}
      </section>
    </>
  );
}
