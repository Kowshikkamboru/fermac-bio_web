"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  radius: number;
  baseAlpha: number;
  speedY: number;
  speedX: number;
  color: string;
}

export default function BiotechHeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Mouse parallax tracking
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = (e.clientX - rect.left) / rect.width - 0.5;
      targetMouseY = (e.clientY - rect.top) / rect.height - 0.5;
    };

    const updateSize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    window.addEventListener("mousemove", handleMouseMove);

    // 45 ambient floating molecular particles with 3D depth
    const particleCount = 45;
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random(),
        y: Math.random(),
        z: Math.random() * 200 - 100,
        radius: Math.random() * 2.2 + 0.8,
        baseAlpha: Math.random() * 0.4 + 0.15,
        speedY: -(Math.random() * 0.00035 + 0.00015),
        speedX: (Math.random() - 0.5) * 0.0002,
        color:
          i % 6 === 0
            ? "rgba(244, 63, 94, " // Rose active marker
            : i % 2 === 0
            ? "rgba(0, 190, 219, " // Cyan
            : "rgba(52, 211, 153, ", // Emerald
      });
    }

    let time = 0;

    const render = () => {
      time += 0.014;

      // Smooth mouse parallax easing
      currentMouseX += (targetMouseX - currentMouseX) * 0.04;
      currentMouseY += (targetMouseY - currentMouseY) * 0.04;

      const w = width;
      const h = height;

      ctx.clearRect(0, 0, w, h);

      // --- 1. BIOTECH AMBIENT RADIAL LIGHTING ---
      // Left atmospheric glow (under text)
      const leftGlow = ctx.createRadialGradient(
        w * 0.15 + currentMouseX * 30,
        h * 0.45 + currentMouseY * 30,
        0,
        w * 0.15,
        h * 0.45,
        Math.max(w * 0.55, 500)
      );
      leftGlow.addColorStop(0, "rgba(0, 190, 219, 0.07)");
      leftGlow.addColorStop(0.5, "rgba(2, 25, 42, 0.04)");
      leftGlow.addColorStop(1, "rgba(2, 17, 29, 0)");
      ctx.fillStyle = leftGlow;
      ctx.fillRect(0, 0, w, h);

      // Diagonal ambient glow following the DNA angle (deep sapphire, zero neon fog behind logo)
      const diagGlow = ctx.createRadialGradient(
        w * 0.85 + currentMouseX * 50,
        h * 0.45 + currentMouseY * 40,
        0,
        w * 0.85,
        h * 0.5,
        Math.max(w * 0.45, 420)
      );
      diagGlow.addColorStop(0, "rgba(2, 35, 60, 0.08)");
      diagGlow.addColorStop(0.5, "rgba(2, 20, 35, 0.03)");
      diagGlow.addColorStop(1, "rgba(2, 17, 29, 0)");
      ctx.fillStyle = diagGlow;
      ctx.fillRect(0, 0, w, h);

      // --- 2. AMBIENT FLOATING PARTICLES ---
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y += p.speedY;
        p.x += p.speedX;
        if (p.y < -0.05) p.y = 1.05;
        if (p.x < -0.05) p.x = 1.05;
        if (p.x > 1.05) p.x = -0.05;

        const pFocal = 300;
        const pScale = pFocal / (pFocal + p.z);
        const px = p.x * w + currentMouseX * pScale * 25;
        const py = p.y * h + currentMouseY * pScale * 25;
        const pr = Math.max(1, p.radius * pScale);
        const pAlpha = p.baseAlpha * pScale * (0.8 + Math.sin(time * 2 + i) * 0.2);

        ctx.beginPath();
        ctx.arc(px, py, pr, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.min(pAlpha, 0.85)})`;
        ctx.shadowColor = "#00BEDB";
        ctx.shadowBlur = pr * 2.5;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // --- 3. DIAGONAL 3D ROTATING DNA DOUBLE HELIX ---
      // Define the diagonal axis matching Image 2:
      // Starts near top-right corner and angles diagonally down to lower-center-right
      const isMobile = w < 768;
      const isTablet = w >= 768 && w < 1024;

      const topX = isMobile ? w * 1.05 : isTablet ? w * 0.98 : w * 0.96;
      const topY = -h * 0.15;
      const bottomX = isMobile ? w * 0.42 : isTablet ? w * 0.58 : w * 0.62;
      const bottomY = h * 1.2;

      // Vector along the diagonal line
      const dirX = bottomX - topX;
      const dirY = bottomY - topY;
      const diagLength = Math.hypot(dirX, dirY);

      // Unit vector along the diagonal
      const ux = dirX / diagLength;
      const uy = dirY / diagLength;

      // Unit normal vector perpendicular to the diagonal in screen space
      const nx = -uy;
      const ny = ux;

      const helixRadius = isMobile ? 55 : isTablet ? 72 : Math.min(w * 0.09, 82);
      const totalRungs = 58;

      interface DNAJoint {
        index: number;
        px1: number;
        py1: number;
        z1: number;
        alpha1: number;
        px2: number;
        py2: number;
        z2: number;
        alpha2: number;
        avgZ: number;
        isActive: boolean;
      }

      const joints: DNAJoint[] = [];

      for (let i = 0; i < totalRungs; i++) {
        const normT = i / (totalRungs - 1);

        // Center point along the diagonal line
        let cx = topX + dirX * normT;
        let cy = topY + dirY * normT;

        // Subtle organic flex perpendicular to diagonal
        const wave = Math.sin(normT * Math.PI) * 22;
        cx += nx * wave + currentMouseX * 40;
        cy += ny * wave + currentMouseY * 30;

        // Rotation around the diagonal axis (gives ~2.5 full helix turns)
        const rotAngle = time * 0.85 + normT * Math.PI * 4.8;

        // Coordinate in the perpendicular 2D plane: (normal vector `n`, Z out-of-screen)
        const offsetN1 = Math.cos(rotAngle) * helixRadius;
        const z1 = Math.sin(rotAngle) * helixRadius;

        const offsetN2 = Math.cos(rotAngle + Math.PI) * helixRadius;
        const z2 = Math.sin(rotAngle + Math.PI) * helixRadius;

        // 3D Perspective Projection
        const focal = 380;
        const scale1 = focal / (focal + z1);
        const scale2 = focal / (focal + z2);

        const px1 = cx + nx * offsetN1 * scale1;
        const py1 = cy + ny * offsetN1 * scale1;

        const px2 = cx + nx * offsetN2 * scale2;
        const py2 = cy + ny * offsetN2 * scale2;

        const alpha1 = ((z1 + helixRadius) / (2 * helixRadius)) * 0.65 + 0.35;
        const alpha2 = ((z2 + helixRadius) / (2 * helixRadius)) * 0.65 + 0.35;

        // Active transcription markers matching the warm coral nodes in Image 2
        const isActive = (normT >= 0.32 && normT <= 0.52) || (normT >= 0.76 && normT <= 0.86);

        joints.push({
          index: i,
          px1,
          py1,
          z1,
          alpha1,
          px2,
          py2,
          z2,
          alpha2,
          avgZ: (z1 + z2) / 2,
          isActive,
        });
      }

      // Sort base pairs by depth to ensure front rungs draw over back rungs
      const sortedByDepth = [...joints].sort((a, b) => a.avgZ - b.avgZ);

      // --- 3A. DRAW HYDROGEN BOND RUNGS (Base Pairs) ---
      for (const joint of sortedByDepth) {
        const { px1, py1, z1, px2, py2, z2, alpha1, alpha2, isActive } = joint;
        const rungAlpha = Math.min((alpha1 + alpha2) * 0.45, 0.85);

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(px1, py1);
        ctx.lineTo(px2, py2);

        if (isActive) {
          // Warm coral/rose glow (from Image 2 active transcription)
          ctx.strokeStyle = `rgba(244, 63, 94, ${rungAlpha * 0.9})`;
          ctx.shadowColor = "#F43F5E";
          ctx.shadowBlur = 9;
          ctx.lineWidth = Math.max(1.2, ((z1 + z2 + helixRadius * 2) / (4 * helixRadius)) * 2.6);
        } else {
          // Crystalline electric cyan
          ctx.strokeStyle = `rgba(0, 190, 219, ${rungAlpha * 0.75})`;
          ctx.shadowColor = "#00BEDB";
          ctx.shadowBlur = 5;
          ctx.lineWidth = Math.max(0.8, ((z1 + z2 + helixRadius * 2) / (4 * helixRadius)) * 2);
        }
        ctx.stroke();
        ctx.restore();

        // 3-4 intermediate nucleotide beads along each crossbar
        const steps = 4;
        for (let s = 1; s < steps; s++) {
          const tPos = s / steps;
          const bx = px1 + (px2 - px1) * tPos;
          const by = py1 + (py2 - py1) * tPos;
          const bz = z1 + (z2 - z1) * tPos;
          const bScale = ((bz + helixRadius) / (2 * helixRadius)) * 1.8 + 1.2;
          const bAlpha = ((bz + helixRadius) / (2 * helixRadius)) * 0.6 + 0.3;

          ctx.beginPath();
          ctx.arc(bx, by, bScale, 0, Math.PI * 2);

          if (isActive && (s === 2 || s === 3)) {
            ctx.fillStyle = `rgba(251, 113, 133, ${bAlpha})`; // Rose
          } else if (joint.index % 2 === 0) {
            ctx.fillStyle = `rgba(56, 189, 248, ${bAlpha})`; // Cyan
          } else {
            ctx.fillStyle = `rgba(52, 211, 153, ${bAlpha})`; // Emerald
          }
          ctx.fill();
        }
      }

      // --- 3B. DRAW STRAND 1 BACKBONE (Cyan/Teal) ---
      ctx.save();
      ctx.beginPath();
      for (let i = 0; i < joints.length; i++) {
        if (i === 0) ctx.moveTo(joints[i].px1, joints[i].py1);
        else ctx.lineTo(joints[i].px1, joints[i].py1);
      }
      ctx.strokeStyle = "rgba(0, 220, 255, 0.85)";
      ctx.shadowColor = "#00BEDB";
      ctx.shadowBlur = 12;
      ctx.lineWidth = 2.8;
      ctx.stroke();
      ctx.restore();

      // --- 3C. DRAW STRAND 2 BACKBONE (Emerald/Mint) ---
      ctx.save();
      ctx.beginPath();
      for (let i = 0; i < joints.length; i++) {
        if (i === 0) ctx.moveTo(joints[i].px2, joints[i].py2);
        else ctx.lineTo(joints[i].px2, joints[i].py2);
      }
      ctx.strokeStyle = "rgba(16, 185, 129, 0.8)";
      ctx.shadowColor = "#34D399";
      ctx.shadowBlur = 12;
      ctx.lineWidth = 2.8;
      ctx.stroke();
      ctx.restore();

      // --- 3D. DRAW BACKBONE PHOSPHATE/SUGAR NODES WITH GLOW ---
      for (const joint of joints) {
        // Strand 1 node
        const r1 = Math.max(2.2, ((joint.z1 + helixRadius) / (2 * helixRadius)) * 4 + 2.5);
        ctx.save();
        ctx.beginPath();
        ctx.arc(joint.px1, joint.py1, r1, 0, Math.PI * 2);
        if (joint.isActive) {
          ctx.fillStyle = `rgba(244, 63, 94, ${joint.alpha1})`;
          ctx.shadowColor = "#F43F5E";
          ctx.shadowBlur = 10;
        } else {
          ctx.fillStyle = `rgba(0, 225, 255, ${joint.alpha1})`;
          ctx.shadowColor = "#00BEDB";
          ctx.shadowBlur = 8;
        }
        ctx.fill();

        // White pinpoint core for high-depth nodes
        if (joint.z1 > 0) {
          ctx.beginPath();
          ctx.arc(joint.px1, joint.py1, r1 * 0.45, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${joint.alpha1})`;
          ctx.fill();
        }
        ctx.restore();

        // Strand 2 node
        const r2 = Math.max(2.2, ((joint.z2 + helixRadius) / (2 * helixRadius)) * 4 + 2.5);
        ctx.save();
        ctx.beginPath();
        ctx.arc(joint.px2, joint.py2, r2, 0, Math.PI * 2);
        if (joint.isActive) {
          ctx.fillStyle = `rgba(251, 113, 133, ${joint.alpha2})`;
          ctx.shadowColor = "#FB7185";
          ctx.shadowBlur = 10;
        } else {
          ctx.fillStyle = `rgba(52, 211, 153, ${joint.alpha2})`;
          ctx.shadowColor = "#10B981";
          ctx.shadowBlur = 8;
        }
        ctx.fill();

        if (joint.z2 > 0) {
          ctx.beginPath();
          ctx.arc(joint.px2, joint.py2, r2 * 0.45, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${joint.alpha2})`;
          ctx.fill();
        }
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
