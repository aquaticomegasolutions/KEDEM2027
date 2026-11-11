import { useEffect, useRef } from "react";

import { useReducedMotionSafe } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type Node = { x: number; y: number; vx: number; vy: number; r: number };

/**
 * Hero background: connected nodes + quantum-inspired probability field.
 * Canvas-based, DPR-aware, pauses off-screen, static frame under reduced motion.
 */
export function QuantumField({
  className,
  density = 1,
  interactive = true,
}: {
  className?: string;
  density?: number;
  interactive?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reduced = useReducedMotionSafe();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let raf = 0;
    let running = true;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999 };
    let nodes: Node[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(
        110,
        Math.round(((width * height) / 18000) * density),
      );
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.6 + 0.6,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      pointer.x += (pointer.tx - pointer.x) * 0.06;
      pointer.y += (pointer.ty - pointer.y) * 0.06;

      for (const n of nodes) {
        if (!reduced) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;
        }
      }

      const maxDist = Math.min(150, Math.max(90, width / 10));
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]!;
          const b = nodes[j]!;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < maxDist) {
            const t = 1 - d / maxDist;
            ctx.strokeStyle = `rgba(125, 194, 66, ${t * 0.16})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        const dp = Math.hypot(n.x - pointer.x, n.y - pointer.y);
        const near = dp < 160 ? 1 - dp / 160 : 0;
        ctx.fillStyle = `rgba(${120 + near * 80}, ${180 + near * 40}, ${
          235 - near * 40
        }, ${0.35 + near * 0.5})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + near * 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      if (running && !reduced) raf = requestAnimationFrame(draw);
    };

    const onPointer = (e: PointerEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      pointer.tx = e.clientX - rect.left;
      pointer.ty = e.clientY - rect.top;
    };

    const observer = new IntersectionObserver(([entry]) => {
      running = entry?.isIntersecting ?? false;
      if (running && !reduced) {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(draw);
      }
    });

    resize();
    draw();
    observer.observe(canvas);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointer, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
    };
  }, [reduced, density, interactive]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    />
  );
}
