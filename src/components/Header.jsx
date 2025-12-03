import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import Logo from "../icons/Logo";
import Moon from "../icons/Moon";
import Sun from "../icons/Sun";
import Phone from "../icons/Phone";
import Mail from "../icons/Mail";

export default function Header() {
   const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className="z-10 flex items-center justify-between w-full px-6 mt-4 max-w-screen-xl mx-auto relative">
      <Logo fill={theme === "dark" ? "#fff" : "#000"} className="h-12 w-12" />
      <div className="flex gap-4 pointer-events-auto items-center">
        <div className="cursor-pointer z-10">
          <button
        onClick={toggleTheme}
        className="text-2xl cursor-pointer transition-transform hover:scale-110"
      >
        {theme === "dark" ? <Moon /> : <Sun/>}
      </button>
        </div>

        <a href="tel:9553799801" aria-label="phone">
          <Phone/>
        </a>

        <a
          href="mailto:mehar.rizwana573@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Mail />
        </a>
      </div>
    </header>
  );
}
