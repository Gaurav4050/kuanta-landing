"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { useTheme } from "@/app/ThemeProvider";

export type Country = {
  name: string; lat: number; lng: number;
  startups: string; deals: number; growth: string;
  flag: string; sectors: string[]; gdp: string;
};

export const COUNTRY_DATA: Country[] = [
  { name:"United States",  lat:37.09,  lng:-95.71,  startups:"1.2M+",  deals:4250, growth:"+18%", flag:"🇺🇸", sectors:["SaaS","Fintech","AI","Defense"], gdp:"$25.5T" },
  { name:"United Kingdom", lat:51.51,  lng:-0.12,   startups:"280K+",  deals:1850, growth:"+14%", flag:"🇬🇧", sectors:["Fintech","Healthtech","AI"],      gdp:"$3.1T"  },
  { name:"Germany",        lat:51.16,  lng:10.45,   startups:"195K+",  deals:1200, growth:"+22%", flag:"🇩🇪", sectors:["Industry 4.0","AI","Climate"],   gdp:"$4.4T"  },
  { name:"India",          lat:20.59,  lng:78.96,   startups:"420K+",  deals:3100, growth:"+35%", flag:"🇮🇳", sectors:["Fintech","SaaS","D2C","Edtech"], gdp:"$3.7T"  },
  { name:"China",          lat:35.86,  lng:104.19,  startups:"680K+",  deals:2800, growth:"+28%", flag:"🇨🇳", sectors:["AI","EV","Consumer","Robotics"], gdp:"$18.0T" },
  { name:"Singapore",      lat:1.35,   lng:103.82,  startups:"85K+",   deals:920,  growth:"+42%", flag:"🇸🇬", sectors:["Fintech","Web3","Logistics"],    gdp:"$0.5T"  },
  { name:"UAE",            lat:23.42,  lng:53.85,   startups:"95K+",   deals:780,  growth:"+55%", flag:"🇦🇪", sectors:["Fintech","Proptech","AI"],       gdp:"$0.5T"  },
  { name:"Netherlands",    lat:52.13,  lng:5.29,    startups:"120K+",  deals:650,  growth:"+19%", flag:"🇳🇱", sectors:["Agtech","SaaS","Healthtech"],    gdp:"$1.1T"  },
  { name:"Israel",         lat:31.05,  lng:34.85,   startups:"88K+",   deals:1100, growth:"+31%", flag:"🇮🇱", sectors:["Defense","Cybersecurity","AI"],  gdp:"$0.5T"  },
  { name:"Brazil",         lat:-14.24, lng:-51.93,  startups:"210K+",  deals:890,  growth:"+27%", flag:"🇧🇷", sectors:["Fintech","Agtech","Consumer"],   gdp:"$2.1T"  },
  { name:"France",         lat:46.23,  lng:2.21,    startups:"165K+",  deals:980,  growth:"+16%", flag:"🇫🇷", sectors:["SaaS","Deeptech","Luxury-tech"], gdp:"$3.0T"  },
  { name:"Canada",         lat:56.13,  lng:-106.35, startups:"185K+",  deals:1350, growth:"+21%", flag:"🇨🇦", sectors:["AI","Cleantech","Healthtech"],   gdp:"$2.2T"  },
  { name:"Japan",          lat:36.20,  lng:138.25,  startups:"145K+",  deals:760,  growth:"+12%", flag:"🇯🇵", sectors:["Robotics","Gaming","AI"],        gdp:"$4.2T"  },
  { name:"Australia",      lat:-25.27, lng:133.78,  startups:"135K+",  deals:620,  growth:"+24%", flag:"🇦🇺", sectors:["Fintech","Agtech","Mining-tech"], gdp:"$1.7T" },
  { name:"South Korea",    lat:35.91,  lng:127.77,  startups:"98K+",   deals:580,  growth:"+33%", flag:"🇰🇷", sectors:["Semiconductor","AI","Gaming"],   gdp:"$1.7T"  },
  { name:"Sweden",         lat:60.13,  lng:18.64,   startups:"72K+",   deals:420,  growth:"+17%", flag:"🇸🇪", sectors:["Cleantech","Gaming","SaaS"],     gdp:"$0.6T"  },
  { name:"Saudi Arabia",   lat:23.89,  lng:45.08,   startups:"65K+",   deals:480,  growth:"+62%", flag:"🇸🇦", sectors:["Fintech","Smart-city","Energy"], gdp:"$1.1T"  },
];

/* ─── 3D math ────────────────────────────────────────────── */
function latLngToXYZ(lat: number, lng: number) {
  const phi   = (90 - lat) * Math.PI / 180;
  const theta = (lng + 180) * Math.PI / 180;
  return { x: Math.sin(phi) * Math.cos(theta), y: Math.cos(phi), z: Math.sin(phi) * Math.sin(theta) };
}
function project(lat: number, lng: number, ry: number, rx: number, r: number, cx: number, cy: number) {
  const v  = latLngToXYZ(lat, lng);
  // rotate Y
  const x1 =  v.x * Math.cos(ry) + v.z * Math.sin(ry);
  const z1 = -v.x * Math.sin(ry) + v.z * Math.cos(ry);
  // rotate X
  const y2 =  v.y * Math.cos(rx) - z1 * Math.sin(rx);
  const z2 =  v.y * Math.sin(rx) + z1 * Math.cos(rx);
  return { sx: cx + x1 * r, sy: cy - y2 * r, depth: z2, visible: z2 > -0.08 };
}

function drawGrid(ctx: CanvasRenderingContext2D, ry: number, rx: number, r: number, cx: number, cy: number, color: string) {
  ctx.strokeStyle = color; ctx.lineWidth = 0.5;
  const N = 72;
  for (let lng = -180; lng < 180; lng += 30) {
    ctx.beginPath(); let first = true;
    for (let i = 0; i <= N; i++) {
      const lat = -90 + 180 * i / N;
      const p = project(lat, lng, ry, rx, r, cx, cy);
      if (!p.visible) { first = true; continue; }
      if (first) { ctx.moveTo(p.sx, p.sy); first = false; } else ctx.lineTo(p.sx, p.sy);
    }
    ctx.stroke();
  }
  for (let lat = -60; lat <= 60; lat += 30) {
    ctx.beginPath(); let first = true;
    for (let i = 0; i <= N; i++) {
      const lng = -180 + 360 * i / N;
      const p = project(lat, lng, ry, rx, r, cx, cy);
      if (!p.visible) { first = true; continue; }
      if (first) { ctx.moveTo(p.sx, p.sy); first = false; } else ctx.lineTo(p.sx, p.sy);
    }
    ctx.stroke();
  }
}

/* ─── Main Globe Component ───────────────────────────────── */
export default function InteractiveGlobe({
  onSelect,
  selectedCountry,
}: {
  onSelect: (c: Country) => void;
  selectedCountry?: Country;
}) {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const { theme }  = useTheme();
  const isDark     = theme === "dark";

  const rotY      = useRef(0.4);
  const rotX      = useRef(0.15);
  const dragging  = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });
  const velRef    = useRef({ x: 0, y: 0 });
  const paused    = useRef(false);
  const pulse     = useRef(0);
  const animId    = useRef(0);
  const hovIdx    = useRef(-1);
  const selIdx    = useRef(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoverName, setHoverName] = useState("");

  // keep selIdx in sync with external selectedCountry
  useEffect(() => {
    if (!selectedCountry) return;
    const i = COUNTRY_DATA.findIndex(c => c.name === selectedCountry.name);
    if (i >= 0) selIdx.current = i;
  }, [selectedCountry]);

  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let stopped = false;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width  = canvas.offsetWidth  * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(canvas); resize();

    function draw() {
      if (stopped) return;
      const W  = canvas!.offsetWidth;
      const H  = canvas!.offsetHeight;
      const cx = W / 2, cy = H / 2;
      const r  = Math.min(W, H) / 2 - 18;

      ctx.clearRect(0, 0, W, H);

      // atmosphere
      const atm = ctx.createRadialGradient(cx, cy, r * 0.9, cx, cy, r * 1.14);
      atm.addColorStop(0, "transparent");
      atm.addColorStop(0.6, isDark ? "rgba(0,229,255,0.03)" : "rgba(255,183,89,0.03)");
      atm.addColorStop(1, "transparent");
      ctx.fillStyle = atm; ctx.beginPath(); ctx.arc(cx, cy, r * 1.14, 0, Math.PI * 2); ctx.fill();

      // sphere body
      const grd = ctx.createRadialGradient(cx - r * 0.25, cy - r * 0.25, r * 0.04, cx, cy, r);
      if (isDark) { grd.addColorStop(0, "rgba(14,26,64,0.97)"); grd.addColorStop(1, "rgba(5,8,16,0.99)"); }
      else        { grd.addColorStop(0, "rgba(240,248,255,0.98)"); grd.addColorStop(1, "rgba(220,234,248,0.96)"); }
      ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fillStyle = grd; ctx.fill(); ctx.restore();

      // grid
      ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, r - 1, 0, Math.PI * 2); ctx.clip();
      drawGrid(ctx, rotY.current, rotX.current, r, cx, cy, isDark ? "rgba(255,255,255,0.07)" : "rgba(0,48,73,0.09)");
      ctx.restore();

      // outline
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = isDark ? "rgba(0,229,255,0.18)" : "rgba(0,48,73,0.15)";
      ctx.lineWidth = 1.5; ctx.stroke();

      // glare
      const glare = ctx.createRadialGradient(cx - r * 0.35, cy - r * 0.35, 0, cx - r * 0.35, cy - r * 0.35, r * 0.55);
      glare.addColorStop(0, isDark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.55)");
      glare.addColorStop(1, "transparent");
      ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.clip();
      ctx.fillStyle = glare; ctx.fill(); ctx.restore();

      // Auto-rotate (SLOW: 0.0005 rad/frame ~ 1 full turn in ~12 800 frames @ 60fps = ~3.5 minutes)
      if (!dragging.current) {
        velRef.current.x *= 0.92;
        velRef.current.y *= 0.92;
        const hasInertia = Math.abs(velRef.current.x) > 0.0004 || Math.abs(velRef.current.y) > 0.0004;
        if (hasInertia) {
          rotY.current += velRef.current.x;
          rotX.current = Math.max(-0.65, Math.min(0.65, rotX.current + velRef.current.y));
        } else if (!paused.current) {
          rotY.current += 0.0005; // slow auto-rotation
        }
      }

      pulse.current += 0.04;

      // project all
      const proj = COUNTRY_DATA.map((c, i) => ({
        ...project(c.lat, c.lng, rotY.current, rotX.current, r, cx, cy), idx: i,
      })).filter(p => p.visible).sort((a, b) => a.depth - b.depth);

      for (const p of proj) {
        const isSel = p.idx === selIdx.current;
        const isHov = p.idx === hovIdx.current;
        const sc    = 0.65 + p.depth * 0.35;
        const dotR  = isSel ? 9 * sc : isHov ? 7 * sc : 4.5 * sc;

        if (isSel) {
          // animated pulse ring
          const pv   = (Math.sin(pulse.current) + 1) / 2;
          const pr   = dotR + 8 + pv * 9;
          ctx.beginPath(); ctx.arc(p.sx, p.sy, pr, 0, Math.PI * 2);
          ctx.strokeStyle = isDark ? `rgba(255,183,89,${0.35 * (1 - pv)})` : `rgba(255,183,89,${0.4 * (1 - pv)})`;
          ctx.lineWidth = 2; ctx.stroke();
          // glow
          const gl = ctx.createRadialGradient(p.sx, p.sy, 0, p.sx, p.sy, dotR * 2.8);
          gl.addColorStop(0, "rgba(255,183,89,0.55)"); gl.addColorStop(1, "transparent");
          ctx.fillStyle = gl; ctx.beginPath(); ctx.arc(p.sx, p.sy, dotR * 2.8, 0, Math.PI * 2); ctx.fill();
        }

        // dot fill
        const g2 = ctx.createRadialGradient(p.sx - dotR * 0.3, p.sy - dotR * 0.3, 0, p.sx, p.sy, dotR);
        if (isSel) { g2.addColorStop(0, "#ffe080"); g2.addColorStop(1, "#FFB759"); }
        else if (isHov) { g2.addColorStop(0, isDark ? "#60ffff" : "#3377dd"); g2.addColorStop(1, isDark ? "#00b4d8" : "#003049"); }
        else { g2.addColorStop(0, isDark ? "#40d0e8" : "#2a6080"); g2.addColorStop(1, isDark ? "#0088aa" : "#003049"); }

        ctx.beginPath(); ctx.arc(p.sx, p.sy, dotR, 0, Math.PI * 2);
        ctx.fillStyle = g2; ctx.fill();
        ctx.strokeStyle = "rgba(255,255,255,0.75)"; ctx.lineWidth = isSel ? 1.5 : 0.8; ctx.stroke();

        // flag label for selected
        if (isSel) {
          ctx.font = `${Math.round(16 * sc)}px serif`;
          ctx.fillText(COUNTRY_DATA[p.idx].flag, p.sx + dotR + 2, p.sy + 6 * sc);
        }
      }

      animId.current = requestAnimationFrame(draw);
    }

    draw();
    return () => { stopped = true; cancelAnimationFrame(animId.current); ro.disconnect(); };
  }, [isDark]);

  /* ─── Hit detection ─────────────────────────────────────── */
  const getHit = useCallback((ex: number, ey: number) => {
    const canvas = canvasRef.current; if (!canvas) return -1;
    const rect = canvas.getBoundingClientRect();
    const mx = ex - rect.left, my = ey - rect.top;
    const r  = Math.min(canvas.offsetWidth, canvas.offsetHeight) / 2 - 18;
    const cx = canvas.offsetWidth / 2, cy = canvas.offsetHeight / 2;
    let best = -1, bestD = 20;
    COUNTRY_DATA.forEach((c, i) => {
      const p = project(c.lat, c.lng, rotY.current, rotX.current, r, cx, cy);
      if (!p.visible) return;
      const d = Math.hypot(mx - p.sx, my - p.sy);
      if (d < bestD) { bestD = d; best = i; }
    });
    return best;
  }, []);

  /* ─── Mouse handlers ────────────────────────────────────── */
  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    lastMouse.current = { x: e.clientX, y: e.clientY };
    velRef.current = { x: 0, y: 0 };
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (dragging.current) {
      const dx = e.clientX - lastMouse.current.x;
      const dy = e.clientY - lastMouse.current.y;
      velRef.current = { x: dx * 0.005, y: dy * 0.005 };
      rotY.current += dx * 0.005;
      rotX.current  = Math.max(-0.65, Math.min(0.65, rotX.current + dy * 0.005));
      lastMouse.current = { x: e.clientX, y: e.clientY };
    } else {
      const hit = getHit(e.clientX, e.clientY);
      hovIdx.current = hit;
      setHoverName(hit >= 0 ? COUNTRY_DATA[hit].name : "");
    }
  };
  const onMouseUp = () => { dragging.current = false; };

  const onClick = (e: React.MouseEvent) => {
    // tiny movement = click not drag
    const hit = getHit(e.clientX, e.clientY);
    if (hit >= 0) {
      selIdx.current = hit;
      onSelect(COUNTRY_DATA[hit]);
    } else {
      // toggle pause/resume auto-rotation
      paused.current = !paused.current;
      setIsPaused(paused.current);
    }
  };

  /* ─── Touch handlers ────────────────────────────────────── */
  const onTouchStart = (e: React.TouchEvent) => {
    dragging.current = true;
    lastMouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    velRef.current = { x: 0, y: 0 };
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!dragging.current) return;
    const dx = e.touches[0].clientX - lastMouse.current.x;
    const dy = e.touches[0].clientY - lastMouse.current.y;
    velRef.current = { x: dx * 0.005, y: dy * 0.005 };
    rotY.current += dx * 0.005;
    rotX.current  = Math.max(-0.65, Math.min(0.65, rotX.current + dy * 0.005));
    lastMouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };
  const onTouchEnd = () => { dragging.current = false; };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <canvas
        ref={canvasRef}
        className="globe-canvas"
        style={{ width: "100%", maxWidth: 420, aspectRatio: "1", display: "block", margin: "0 auto" }}
        onMouseDown={onMouseDown} onMouseMove={onMouseMove}
        onMouseUp={onMouseUp} onMouseLeave={onMouseUp}
        onClick={onClick}
        onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
      />

      {/* Hover tooltip */}
      {hoverName && (
        <div style={{
          position: "absolute", bottom: "16%", left: "50%", transform: "translateX(-50%)",
          background: "var(--k-card-bg)", border: "1.5px solid var(--k-amber)",
          borderRadius: 9999, padding: "0.3rem 0.9rem",
          fontSize: "0.8rem", fontWeight: 600, color: "var(--t-primary)",
          pointerEvents: "none", whiteSpace: "nowrap", boxShadow: "var(--k-shadow)",
        }}>{hoverName}</div>
      )}

      {/* Controls hint */}
      <div className="globe-pause-hint">
        {isPaused ? (
          <span className="globe-pause-badge">⏸ Paused — click globe to resume</span>
        ) : (
          <span style={{ opacity: 0.6 }}>Drag to rotate · Click dot to explore · Click globe to pause</span>
        )}
      </div>
    </div>
  );
}
