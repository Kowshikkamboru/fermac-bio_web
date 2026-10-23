"use client";

import React, { useEffect, useRef, useState } from "react";

interface Spore {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  maxAlpha: number;
  life: number;
  maxLife: number;
  color: string;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
}

function subscribeTouch(callback: () => void) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

function getTouchSnapshot() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(pointer: coarse)").matches ||
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0
  );
}

function getTouchServerSnapshot() {
  return false;
}

export default function MicroscopeCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isTouchDevice = React.useSyncExternalStore(
    subscribeTouch,
    getTouchSnapshot,
    getTouchServerSnapshot
  );

  const [enabled, setEnabled] = useState(() => {
    if (typeof window === "undefined") return true;
    const saved = localStorage.getItem("fermac_microscope_cursor");
    return saved === null ? true : saved === "true";
  });
  const [showToggleNotice, setShowToggleNotice] = useState(false);

  // Mouse & physics tracking refs
  const mouseRef = useRef({ x: -100, y: -100, isVisible: false });
  const reticleRef = useRef({ x: -100, y: -100, radius: 24 });
  const bacteriumRef = useRef({
    x: -100,
    y: -100,
    angle: 0,
    speed: 0,
    wobblePhase: 0,
  });
  const stateRef = useRef({
    isHovered: false,
    isInput: false,
    isClicking: false,
    hoverText: "400× SPECIMEN",
  });
  const sporesRef = useRef<Spore[]>([]);
  const ripplesRef = useRef<Ripple[]>([]);
  const animFrameRef = useRef<number | null>(null);
  const lastMousePosRef = useRef({ x: -100, y: -100 });

  // Update body class for hiding system cursor on desktop
  useEffect(() => {
    if (isTouchDevice) return;
    if (enabled) {
      document.body.classList.add("microscope-cursor-active");
    } else {
      document.body.classList.remove("microscope-cursor-active");
    }
    return () => {
      document.body.classList.remove("microscope-cursor-active");
    };
  }, [enabled, isTouchDevice]);

  // Main interaction listeners and canvas animation loop
  useEffect(() => {
    if (isTouchDevice || !enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle high-DPI resize
    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.isVisible = true;

      // Initialize reticle & bacterium position on first entry
      if (reticleRef.current.x === -100) {
        reticleRef.current.x = e.clientX;
        reticleRef.current.y = e.clientY;
        bacteriumRef.current.x = e.clientX - 10;
        bacteriumRef.current.y = e.clientY - 10;
        lastMousePosRef.current = { x: e.clientX, y: e.clientY };
      }

      // Spawn bio-spores along movement path
      const dx = e.clientX - lastMousePosRef.current.x;
      const dy = e.clientY - lastMousePosRef.current.y;
      const dist = Math.hypot(dx, dy);

      if (dist > 7) {
        const colors = ["#00BEDB", "#38E1FF", "#10B981", "#E0F7FA"];
        const numToSpawn = Math.min(Math.floor(dist / 8), 3);
        for (let i = 0; i < numToSpawn; i++) {
          if (sporesRef.current.length < 35) {
            sporesRef.current.push({
              x: e.clientX + (Math.random() - 0.5) * 12,
              y: e.clientY + (Math.random() - 0.5) * 12,
              vx: (Math.random() - 0.5) * 0.8 - dx * 0.05,
              vy: (Math.random() - 0.5) * 0.8 - dy * 0.05,
              radius: Math.random() * 2.2 + 1,
              alpha: 0.8,
              maxAlpha: 0.8,
              life: 0,
              maxLife: Math.random() * 25 + 20,
              color: colors[Math.floor(Math.random() * colors.length)],
            });
          }
        }
        lastMousePosRef.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.isVisible = false;
    };

    const handleMouseEnter = () => {
      mouseRef.current.isVisible = true;
    };

    // Click ripples
    const handleMouseDown = (e: MouseEvent) => {
      stateRef.current.isClicking = true;
      ripplesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 12,
        maxRadius: 55,
        alpha: 0.9,
      });

      // Extra burst of micro-spores on click
      const colors = ["#00BEDB", "#38E1FF", "#FFFFFF"];
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI * 2 * i) / 6 + Math.random() * 0.4;
        const spd = Math.random() * 2 + 1.2;
        sporesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * spd,
          vy: Math.sin(angle) * spd,
          radius: Math.random() * 2.5 + 1.5,
          alpha: 1,
          maxAlpha: 1,
          life: 0,
          maxLife: 30,
          color: colors[i % colors.length],
        });
      }
    };

    const handleMouseUp = () => {
      stateRef.current.isClicking = false;
    };

    // Hover inspection for links, buttons, inputs
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, input, textarea, select, [role="button"], [data-cursor-hover], .cursor-pointer'
      );

      if (interactive) {
        stateRef.current.isHovered = true;
        const tagName = interactive.tagName.toLowerCase();
        if (tagName === "input" || tagName === "textarea") {
          stateRef.current.isInput = true;
          stateRef.current.hoverText = "INPUT • FOCUS";
        } else if (tagName === "a") {
          stateRef.current.isInput = false;
          stateRef.current.hoverText = "1000× CULTURE";
        } else {
          stateRef.current.isInput = false;
          stateRef.current.hoverText = "1000× ACTIVE";
        }
      } else {
        stateRef.current.isHovered = false;
        stateRef.current.isInput = false;
        stateRef.current.hoverText = "400× SPECIMEN";
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    // Keyboard shortcut (Alt + M) to toggle cursor
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && (e.key === "m" || e.key === "M")) {
        e.preventDefault();
        setEnabled((prev) => {
          const next = !prev;
          localStorage.setItem("fermac_microscope_cursor", String(next));
          setShowToggleNotice(true);
          setTimeout(() => setShowToggleNotice(false), 2500);
          return next;
        });
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Animation Render Loop
    let time = 0;
    const render = () => {
      time += 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      if (mouseRef.current.isVisible) {
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;
        const isHovered = stateRef.current.isHovered;
        const isInput = stateRef.current.isInput;
        const isClicking = stateRef.current.isClicking;

        // 1. Smoothly update Reticle position & size
        const targetRadius = isClicking ? 20 : isHovered ? 34 : isInput ? 18 : 25;
        reticleRef.current.x += (mx - reticleRef.current.x) * 0.22;
        reticleRef.current.y += (my - reticleRef.current.y) * 0.22;
        reticleRef.current.radius +=
          (targetRadius - reticleRef.current.radius) * 0.2;

        const rx = reticleRef.current.x;
        const ry = reticleRef.current.y;
        const rRad = reticleRef.current.radius;

        // 2. Smoothly update Bacterium position & swimming physics
        const bxTarget = mx;
        const byTarget = my;
        const bdx = bxTarget - bacteriumRef.current.x;
        const bdy = byTarget - bacteriumRef.current.y;
        const bDist = Math.hypot(bdx, bdy);

        // Fluid swimming lag
        bacteriumRef.current.x += bdx * 0.12;
        bacteriumRef.current.y += bdy * 0.12;
        bacteriumRef.current.speed = bDist;

        // Smooth angle rotation towards movement vector
        if (bDist > 1) {
          const targetAngle = Math.atan2(bdy, bdx);
          let diff = targetAngle - bacteriumRef.current.angle;
          while (diff < -Math.PI) diff += Math.PI * 2;
          while (diff > Math.PI) diff -= Math.PI * 2;
          bacteriumRef.current.angle += diff * 0.18;
        }

        // Brownian motion oscillation
        bacteriumRef.current.wobblePhase += isHovered ? 0.15 : 0.06;

        const bx = bacteriumRef.current.x;
        const by = bacteriumRef.current.y;
        const bAngle = bacteriumRef.current.angle;
        const wobble = Math.sin(bacteriumRef.current.wobblePhase) * 1.5;

        // --- DRAW RIPPLES (from clicks) ---
        for (let i = ripplesRef.current.length - 1; i >= 0; i--) {
          const rip = ripplesRef.current[i];
          rip.radius += 2.2;
          rip.alpha *= 0.92;

          if (rip.alpha < 0.02 || rip.radius > rip.maxRadius) {
            ripplesRef.current.splice(i, 1);
            continue;
          }

          ctx.save();
          ctx.beginPath();
          ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 190, 219, ${rip.alpha})`;
          ctx.lineWidth = 1.5;
          ctx.setLineDash([4, 4]);
          ctx.stroke();

          // 4 cross tick marks on ripple
          const tickLen = 5;
          ctx.beginPath();
          ctx.moveTo(rip.x, rip.y - rip.radius - tickLen);
          ctx.lineTo(rip.x, rip.y - rip.radius + tickLen);
          ctx.moveTo(rip.x, rip.y + rip.radius - tickLen);
          ctx.lineTo(rip.x, rip.y + rip.radius + tickLen);
          ctx.moveTo(rip.x - rip.radius - tickLen, rip.y);
          ctx.lineTo(rip.x - rip.radius + tickLen, rip.y);
          ctx.moveTo(rip.x + rip.radius - tickLen, rip.y);
          ctx.lineTo(rip.x + rip.radius + tickLen, rip.y);
          ctx.strokeStyle = `rgba(56, 225, 255, ${rip.alpha * 0.8})`;
          ctx.setLineDash([]);
          ctx.stroke();
          ctx.restore();
        }

        // --- DRAW BIO-SPORES / TRAIL ---
        for (let i = sporesRef.current.length - 1; i >= 0; i--) {
          const sp = sporesRef.current[i];
          sp.x += sp.vx;
          sp.y += sp.vy;
          sp.life += 1;
          sp.alpha = sp.maxAlpha * (1 - sp.life / sp.maxLife);

          if (sp.life >= sp.maxLife || sp.alpha <= 0.01) {
            sporesRef.current.splice(i, 1);
            continue;
          }

          ctx.save();
          ctx.beginPath();
          ctx.arc(sp.x, sp.y, sp.radius, 0, Math.PI * 2);
          ctx.fillStyle = sp.color;
          ctx.globalAlpha = sp.alpha;
          ctx.shadowColor = sp.color;
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.restore();
        }

        // --- DRAW MICROSCOPE RETICLE (Optics & Lens) ---
        ctx.save();

        // Subtle optical lens glass tint
        const lensGrad = ctx.createRadialGradient(
          rx,
          ry,
          2,
          rx,
          ry,
          rRad * 1.2
        );
        lensGrad.addColorStop(0, "rgba(0, 190, 219, 0.06)");
        lensGrad.addColorStop(0.7, "rgba(0, 47, 60, 0.03)");
        lensGrad.addColorStop(1, "rgba(0, 47, 60, 0)");
        ctx.fillStyle = lensGrad;
        ctx.beginPath();
        ctx.arc(rx, ry, rRad, 0, Math.PI * 2);
        ctx.fill();

        // Main outer reticle ring
        ctx.beginPath();
        ctx.arc(rx, ry, rRad, 0, Math.PI * 2);
        ctx.strokeStyle = isHovered
          ? "rgba(0, 220, 255, 0.85)"
          : "rgba(0, 190, 219, 0.55)";
        ctx.lineWidth = isHovered ? 1.8 : 1.2;
        ctx.shadowColor = "#00BEDB";
        ctx.shadowBlur = isHovered ? 10 : 4;
        ctx.stroke();

        // Inner dashed micrometer ring
        ctx.beginPath();
        ctx.arc(rx, ry, rRad * 0.72, 0, Math.PI * 2);
        ctx.strokeStyle = isHovered
          ? "rgba(16, 185, 129, 0.5)"
          : "rgba(0, 190, 219, 0.25)";
        ctx.lineWidth = 1;
        ctx.setLineDash([2, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        // 4 Primary Optical Crosshairs
        const crosshairExt = isHovered ? 7 : 5;
        const crosshairIn = 3;
        ctx.strokeStyle = isHovered
          ? "rgba(56, 225, 255, 0.95)"
          : "rgba(0, 190, 219, 0.75)";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        // Top tick
        ctx.moveTo(rx, ry - rRad - crosshairExt);
        ctx.lineTo(rx, ry - rRad + crosshairIn);
        // Bottom tick
        ctx.moveTo(rx, ry + rRad - crosshairIn);
        ctx.lineTo(rx, ry + rRad + crosshairExt);
        // Left tick
        ctx.moveTo(rx - rRad - crosshairExt, ry);
        ctx.lineTo(rx - rRad + crosshairIn, ry);
        // Right tick
        ctx.moveTo(rx + rRad - crosshairIn, ry);
        ctx.lineTo(rx + rRad + crosshairExt, ry);
        ctx.stroke();

        // If hovered: Draw high-tech target bracket corners
        if (isHovered) {
          const bSize = rRad + 7;
          const cornerLen = 6;
          ctx.strokeStyle = "rgba(0, 240, 255, 0.9)";
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          // Top-Left
          ctx.moveTo(rx - bSize, ry - bSize + cornerLen);
          ctx.lineTo(rx - bSize, ry - bSize);
          ctx.lineTo(rx - bSize + cornerLen, ry - bSize);
          // Top-Right
          ctx.moveTo(rx + bSize - cornerLen, ry - bSize);
          ctx.lineTo(rx + bSize, ry - bSize);
          ctx.lineTo(rx + bSize, ry - bSize + cornerLen);
          // Bottom-Left
          ctx.moveTo(rx - bSize, ry + bSize - cornerLen);
          ctx.lineTo(rx - bSize, ry + bSize);
          ctx.lineTo(rx - bSize + cornerLen, ry + bSize);
          // Bottom-Right
          ctx.moveTo(rx + bSize - cornerLen, ry + bSize);
          ctx.lineTo(rx + bSize, ry + bSize);
          ctx.lineTo(rx + bSize, ry + bSize - cornerLen);
          ctx.stroke();
        }

        // Micrometer Calibration Hashes (30 deg increments)
        ctx.strokeStyle = "rgba(0, 190, 219, 0.35)";
        ctx.lineWidth = 1;
        for (let a = 0; a < 12; a++) {
          if (a % 3 === 0) continue; // Skip cardinals
          const radAngle = (a * Math.PI) / 6;
          const cosA = Math.cos(radAngle);
          const sinA = Math.sin(radAngle);
          ctx.beginPath();
          ctx.moveTo(rx + cosA * (rRad - 2), ry + sinA * (rRad - 2));
          ctx.lineTo(rx + cosA * (rRad + 2), ry + sinA * (rRad + 2));
          ctx.stroke();
        }

        // Magnification Readout HUD Badge
        const badgeX = rx + rRad + 8;
        const badgeY = ry - rRad - 4;
        const badgeText = stateRef.current.hoverText;

        ctx.font = "600 9px monospace, sans-serif";
        const textWidth = ctx.measureText(badgeText).width;
        const padX = 6;
        const padY = 3;

        // Badge pill background
        ctx.fillStyle = "rgba(0, 47, 60, 0.85)";
        ctx.strokeStyle = isHovered
          ? "rgba(0, 240, 255, 0.8)"
          : "rgba(0, 190, 219, 0.4)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(
          badgeX,
          badgeY - 8 - padY,
          textWidth + padX * 2 + 10,
          14 + padY * 2,
          4
        );
        ctx.fill();
        ctx.stroke();

        // Blinking recording / specimen live indicator dot
        const pulseAlpha = 0.5 + Math.sin(time * 0.1) * 0.5;
        ctx.fillStyle = isHovered
          ? `rgba(56, 225, 255, ${pulseAlpha})`
          : `rgba(16, 185, 129, ${pulseAlpha})`;
        ctx.beginPath();
        ctx.arc(badgeX + padX + 2, badgeY - 1, 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Badge text
        ctx.fillStyle = isHovered ? "#38E1FF" : "#E0F7FA";
        ctx.fillText(badgeText, badgeX + padX + 9, badgeY + 2);

        ctx.restore();

        // --- DRAW LIVING BACTERIUM (Microbe Specimen) ---
        ctx.save();
        ctx.translate(bx, by);
        ctx.rotate(bAngle);

        const bacLength = isHovered ? 22 : 18;
        const bacWidth = isHovered ? 10 : 8;

        // 1. Undulating Flagella (Tail) trailing behind
        const flagellaCount = 2;
        for (let f = 0; f < flagellaCount; f++) {
          const fOffset = (f - 0.5) * 3;
          const flagLength = isHovered ? 26 : 20;
          const fFreq = isHovered ? 0.25 : 0.16;
          const fAmp = (isHovered ? 4.5 : 3) + Math.sin(time * 0.05 + f) * 0.5;

          ctx.beginPath();
          ctx.moveTo(-bacLength / 2, fOffset);

          const segments = 10;
          for (let s = 1; s <= segments; s++) {
            const segX = -bacLength / 2 - (s / segments) * flagLength;
            const progress = s / segments;
            const segY =
              fOffset +
              Math.sin(time * fFreq - progress * 4 + f * 1.5) *
                (fAmp * progress);
            ctx.lineTo(segX, segY);
          }

          const flagGrad = ctx.createLinearGradient(
            -bacLength / 2,
            0,
            -bacLength / 2 - flagLength,
            0
          );
          flagGrad.addColorStop(0, "rgba(56, 225, 255, 0.75)");
          flagGrad.addColorStop(0.6, "rgba(16, 185, 129, 0.5)");
          flagGrad.addColorStop(1, "rgba(0, 190, 219, 0)");

          ctx.strokeStyle = flagGrad;
          ctx.lineWidth = 1.3;
          ctx.stroke();
        }

        // 2. Micro-cilia around bacterial capsule membrane
        const ciliaCount = 8;
        ctx.strokeStyle = "rgba(0, 240, 255, 0.45)";
        ctx.lineWidth = 0.8;
        for (let c = 0; c < ciliaCount; c++) {
          const cProg = (c / (ciliaCount - 1)) * 2 - 1; // -1 to 1
          const cX = cProg * (bacLength * 0.38);
          const cVibe = Math.sin(time * 0.3 + c) * 1.5;

          // Top cilia
          ctx.beginPath();
          ctx.moveTo(cX, -bacWidth / 2);
          ctx.lineTo(cX - 2, -bacWidth / 2 - 2.5 + cVibe);
          ctx.stroke();

          // Bottom cilia
          ctx.beginPath();
          ctx.moveTo(cX, bacWidth / 2);
          ctx.lineTo(cX - 2, bacWidth / 2 + 2.5 - cVibe);
          ctx.stroke();
        }

        // 3. Bacterium Capsule Body (Bacillus)
        ctx.beginPath();
        ctx.roundRect(
          -bacLength / 2,
          -bacWidth / 2 + wobble * 0.2,
          bacLength,
          bacWidth,
          bacWidth / 2
        );

        // Cytoplasm gradient: Cyan to Emerald
        const cytoGrad = ctx.createLinearGradient(
          bacLength / 2,
          0,
          -bacLength / 2,
          0
        );
        cytoGrad.addColorStop(0, "rgba(56, 225, 255, 0.75)");
        cytoGrad.addColorStop(0.5, "rgba(0, 190, 219, 0.6)");
        cytoGrad.addColorStop(1, "rgba(16, 185, 129, 0.65)");
        ctx.fillStyle = cytoGrad;
        ctx.shadowColor = isHovered ? "#38E1FF" : "#00BEDB";
        ctx.shadowBlur = isHovered ? 14 : 7;
        ctx.fill();

        // Membrane outline
        ctx.strokeStyle = isHovered
          ? "rgba(255, 255, 255, 0.95)"
          : "rgba(180, 245, 255, 0.85)";
        ctx.lineWidth = 1.4;
        ctx.stroke();

        // 4. Internal Nucleoid / Genetic Plasmids (Organelles)
        // Core nucleoid
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx.beginPath();
        ctx.arc(
          2 + Math.sin(time * 0.05) * 1,
          Math.cos(time * 0.07) * 0.8,
          1.8,
          0,
          Math.PI * 2
        );
        ctx.fill();

        // Secondary plasmid dots
        ctx.fillStyle = "rgba(0, 240, 255, 0.85)";
        ctx.beginPath();
        ctx.arc(-3, -1.2, 1.2, 0, Math.PI * 2);
        ctx.arc(5, 1, 1, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();

        // --- DRAW ZERO-LAG PINPOINT CENTER FOCAL POINT ---
        // Precise white targeting dot so clicks are always 100% accurate
        ctx.save();
        ctx.beginPath();
        ctx.arc(mx, my, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "#FFFFFF";
        ctx.shadowColor = "#00BEDB";
        ctx.shadowBlur = 6;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(mx, my, 3.5, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(0, 190, 219, 0.9)";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("keydown", handleKeyDown);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [enabled, isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      {enabled && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-[99999]"
          style={{ width: "100vw", height: "100vh" }}
          aria-hidden="true"
        />
      )}

      {/* Subtle Floating Controls: Microscope Cursor Toggle & Status Pill */}
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2">
        {showToggleNotice && (
          <div className="bg-[#002F3C]/95 text-cyan-300 text-xs px-3 py-1.5 rounded-full border border-cyan-500/40 shadow-lg backdrop-blur-md animate-fade-in font-mono flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            {enabled ? "Microscope Cursor: Enabled" : "Microscope Cursor: Disabled"}
          </div>
        )}

        <button
          type="button"
          onClick={() => {
            setEnabled((prev) => {
              const next = !prev;
              localStorage.setItem("fermac_microscope_cursor", String(next));
              setShowToggleNotice(true);
              setTimeout(() => setShowToggleNotice(false), 2500);
              return next;
            });
          }}
          className={`group flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border backdrop-blur-md transition-all shadow-md ${
            enabled
              ? "bg-[#002F3C]/90 text-cyan-300 border-cyan-500/40 hover:bg-[#002F3C] hover:border-cyan-400"
              : "bg-white/80 text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
          title="Toggle Microscope Cursor (Alt + M)"
          aria-label="Toggle custom microscope cursor"
        >
          <span className="text-sm">🔬</span>
          <span className="hidden sm:inline font-sans">
            {enabled ? "Microscope Active" : "Default Cursor"}
          </span>
          <span
            className={`w-2 h-2 rounded-full ${
              enabled ? "bg-emerald-400 animate-pulse" : "bg-gray-400"
            }`}
          />
        </button>
      </div>
    </>
  );
}
