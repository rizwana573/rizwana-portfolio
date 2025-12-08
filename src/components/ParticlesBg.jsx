import { useRef, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ParticlesBg() {
  const canvasRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // ⭐ SIZE CANVAS TO MATCH HERO SECTION ONLY
    const resize = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    resize();

    let width = canvas.width;
    let height = canvas.height;

    const bgColor = theme === "dark" ? "#0b0b0b" : "#e5e5e5";

    const colors = [
      "#ff007f",
      "#00f0ff",
      "#39ff14",
      "#ffea00",
      "#ff6b00",
      "#b966ff",
    ];

    const shapes = ["circle", "triangle", "star"];
    const particleCount = 90;

    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      size: 2 + Math.random() * 2.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
    }));

    const mouse = { x: null, y: null };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
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
              p.x + p.size * Math.cos(((18 + i * 72) * Math.PI) / 180),
              p.y - p.size * Math.sin(((18 + i * 72) * Math.PI) / 180)
            );
            ctx.lineTo(
              p.x + (p.size / 2) * Math.cos(((54 + i * 72) * Math.PI) / 180),
              p.y - (p.size / 2) * Math.sin(((54 + i * 72) * Math.PI) / 180)
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

      // CONNECTION LINES
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const alpha = 1 - dist / 140;

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            ctx.lineWidth = 0.7;
            ctx.strokeStyle =
              theme === "dark"
                ? `rgba(150, 230, 255, ${alpha})`
                : `rgba(80, 80, 80, ${alpha})`;

            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Cursor repulsion
        if (mouse.x !== null && mouse.y !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const force = (120 - dist) * 0.0012;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        // Natural drifting
        p.vx *= 0.98;
        p.vy *= 0.98;

        drawParticle(p);
      });

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    ></canvas>
  );
}
