import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark"); 

  useEffect(() => {
    const body = document.body;

    if (theme === "dark") {
      body.classList.add("darkMode");
      body.classList.remove("lightMode");
    } else {
      body.classList.add("lightMode");
      body.classList.remove("darkMode");
    }
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
