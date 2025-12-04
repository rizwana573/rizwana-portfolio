import { useRef, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ParticlesBg() {
  const canvasRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const bgColor = theme === "dark" ? "#0b0b0b" : "#e5e5e5";

    const colors = [
      "#ff007f",
      "#00f0ff",
      "#39ff14",
      "#ffea00",
      "#ff6b00",
      "#b966ff",
    ];
    const shapes = ["circle", "triangle", "star"]; // Different particle shapes

    const particleCount = 80;

    // Initialize moving particles
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: 2 + Math.random() * 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
    }));

    const mouse = { x: null, y: null };
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    const clickedLines = []; // store lines to draw on click

    // On click, generate lines between nearby particles
    window.addEventListener("click", (e) => {
      clickedLines.length = 0;
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            clickedLines.push({ i, j, alpha: 1 - dist / 150 });
          }
        }
      }
    });

    const drawParticle = (p) => {
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 12;
      ctx.shadowColor = p.color;
      ctx.beginPath();
      switch (p.shape) {
        case "circle":
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          break;
        case "triangle":
          ctx.moveTo(p.x, p.y - p.size);
          ctx.lineTo(p.x - p.size, p.y + p.size);
          ctx.lineTo(p.x + p.size, p.y + p.size);
          ctx.closePath();
          break;
        case "star":
          for (let i = 0; i < 5; i++) {
            ctx.lineTo(
              p.x + p.size * Math.cos(((18 + i * 72) / 180) * Math.PI),
              p.y - p.size * Math.sin(((18 + i * 72) / 180) * Math.PI)
            );
            ctx.lineTo(
              p.x + (p.size / 2) * Math.cos(((54 + i * 72) / 180) * Math.PI),
              p.y - (p.size / 2) * Math.sin(((54 + i * 72) / 180) * Math.PI)
            );
          }
          ctx.closePath();
          break;
      }
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    const animate = () => {
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, width, height);

      // Draw connecting lines between nearby particles
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            // distance threshold
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);

            // Dynamic line color based on theme
            const lineColor =
              theme === "dark"
                ? `rgba(255,255,255,${1 - dist / 150})` // white in dark
                : `rgba(100,100,100,${1 - dist / 150})`; // dark grey in light

            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Cursor repulsion
        if (mouse.x && mouse.y) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const force = (120 - dist) * 0.0015;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        p.vx *= 0.95;
        p.vy *= 0.95;

        drawParticle(p);
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", inset: 0, zIndex: -1 }}
    />
  );
}
