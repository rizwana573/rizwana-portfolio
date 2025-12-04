import ParticlesBg from "./ParticlesBg";
import RBLogo from "../icons/RBLogo";

export default function Hero({ onAboutClick, onLatestWorksClick }) {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
        <ParticlesBg />

      <div className="relative z-10">
        <RBLogo />

        <div className="relative z-10 text-center">
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
            About Me
          </button>

          <button
            onClick={onLatestWorksClick}
            className="mt-6 relative py-2 px-5 rounded font-extrabold 
                     bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 
                     bg-[length:200%_200%] animate-gradient cursor-pointer 
                     transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,100,0,0.8)] 
                     hover:scale-110"
          >
            Latest Works
          </button>
        </div>
      </div>
    </section>
  );
}
