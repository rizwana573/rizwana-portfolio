import ParticlesBg from "./ParticlesBg";
import RBLogo from "../icons/RBLogo";
import DownArrow from "../icons/DownArrow";
import NextArrow from "../icons/NextArrow";

export default function Hero({ onAboutClick, onLatestWorksClick }) {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center">
      <ParticlesBg />

      <div className="relative z-10">
        <RBLogo />

        <div className="relative z-10 text-left">
          <h1 className="pointer-events-none text-4xl md:text-[64px] font-['Spartan']">
            Rizwana&nbsp;Begum
          </h1>

          <p className="pointer-events-none font-['Merriweather'] italic mt-4 md:mt-6">
            Frontend Web Developer
          </p>

          <button
            onClick={onAboutClick}
            className="mt-10 relative py-2 px-5 rounded font-extrabold 
                     bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 
                     bg-[length:200%_200%] animate-gradient cursor-pointer 
                     transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,100,0,0.8)] 
                     hover:scale-110"
          >
            About Me <NextArrow />
          </button>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={onLatestWorksClick}
          className="mt-6 relative py-2 px-5 rounded font-extrabold 
                     bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 
                     bg-[length:200%_200%] animate-gradient cursor-pointer 
                     transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,100,0,0.8)] 
                     hover:scale-110"
        >
          Latest Works <DownArrow />
        </button>
      </div>
    </section>
  );
}
