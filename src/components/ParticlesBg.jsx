import { useCallback } from "react";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBg({ theme = "dark" }) {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const config = {
    particles: {
      number: { value: 100 },
      color: {
        value:
          theme === "dark"
            ? ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#8B00FF"]
            : ["#222", "#444", "#666"],
      },
      shape: { type: ["triangle", "polygon", "star"] },
      opacity: { value: 0.7 },
      size: { value: 4, random: true },
      links: {
        enable: true,
        distance: 150,
        color: theme === "dark" ? "#999999" : "#444444",
        opacity: 0.6,
        width: 2,
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out",
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 120, duration: 0.4 },
        push: { quantity: 6 },
      },
    },
    fullScreen: { enable: false },
    detectRetina: true,
  };

  return (
    <div className="absolute inset-0 -z-10 h-full w-full">
      <Particles id="tsparticles" init={particlesInit} options={config} />
    </div>
  );
}
