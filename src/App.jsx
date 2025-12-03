import { useState, useRef, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutModal from "./components/AboutModal";
import LatestWorks from "./components/LatestWorks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const latestWorksRef = useRef(null);

  const openAbout = () => setAboutOpen(true);
  const closeAbout = () => setAboutOpen(false);

  const scrollToLatestWorks = () => {
    const el = document.getElementById("latestWorks");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Header />
      <Hero onAboutClick={openAbout} onLatestWorksClick={scrollToLatestWorks} />
      <AboutModal open={aboutOpen} onClose={closeAbout} />
      <LatestWorks ref={latestWorksRef} />
      <Contact />
      <Footer />
    </>
  );
}
