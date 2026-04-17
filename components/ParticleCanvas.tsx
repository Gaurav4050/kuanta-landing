"use client";
import { useEffect, useRef } from "react";
import { useTheme } from "@/app/ThemeProvider";

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let W = 0, H = 0;
    const mouse = { x: -9999, y: -9999 };
    const COUNT = 55;
    const DIST  = 110;

    const lightColors = ["rgba(255,183,89,0.3)", "rgba(0,48,73,0.15)", "rgba(255,183,89,0.2)"];
    const darkColors  = ["rgba(0,229,255,0.4)",  "rgba(59,130,246,0.4)", "rgba(139,92,246,0.3)"];
    const colors = isDark ? darkColors : lightColors;

    type P = { x:number; y:number; vx:number; vy:number; r:number; op:number; col:string };
    let pts: P[] = [];

    const makeP = (): P => ({
      x:  Math.random() * W, y:  Math.random() * H,
      vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
      r:  Math.random() * 1.4 + 0.5,
      op: Math.random() * 0.45 + 0.1,
      col: colors[Math.floor(Math.random() * colors.length)],
    });

    const init = () => {
      W = canvas!.width  = window.innerWidth;
      H = canvas!.height = window.innerHeight;
      pts = Array.from({ length: COUNT }, makeP);
    };

    const lineC = isDark ? "rgba(99,179,237," : "rgba(0,48,73,";

    let id = 0;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d  = Math.sqrt(dx*dx + dy*dy);
          if (d < DIST) {
            const a = (1 - d / DIST) * (isDark ? 0.14 : 0.07);
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `${lineC}${a})`; ctx.lineWidth = 0.7; ctx.stroke();
          }
        }
      }
      pts.forEach(p => {
        const dx = p.x - mouse.x, dy = p.y - mouse.y;
        const d  = Math.sqrt(dx*dx + dy*dy);
        if (d < 110) { p.x += (dx / d) * 0.7; p.y += (dy / d) * 0.7; }
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.globalAlpha = p.op;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fillStyle = p.col; ctx.fill();
        ctx.globalAlpha = 1;
      });
      id = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", init, { passive: true });
    window.addEventListener("mousemove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
    init(); draw();
    return () => { cancelAnimationFrame(id); };
  }, [isDark]);

  return <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, zIndex: 0, pointerEvents: "none" }} />;
}
