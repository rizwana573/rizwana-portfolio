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
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-50">
      <Logo fill={theme === "dark" ? "#fff" : "#000"} className="w-10 h-10 md:w-14 md:h-14" />
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
