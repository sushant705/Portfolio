import { useEffect, useRef } from "react";
import headImg from "@/assets/robot-head.png";

export function CursorRobot() {
  const headRef = useRef<HTMLImageElement>(null);
  const target = useRef({ rx: 0, ry: 0 });
  const current = useRef({ rx: 0, ry: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = headRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const max = 28;
      target.current.ry = Math.max(-max, Math.min(max, dx / 14));
      target.current.rx = Math.max(-max, Math.min(max, -dy / 14));
    };

    const tick = () => {
      current.current.rx += (target.current.rx - current.current.rx) * 0.12;
      current.current.ry += (target.current.ry - current.current.ry) * 0.12;
      const el = headRef.current;
      if (el) {
        el.style.transform = `perspective(1000px) rotateX(${current.current.rx}deg) rotateY(${current.current.ry}deg)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center select-none">
      <img
        ref={headRef}
        src={headImg}
        alt="Robot head"
        width={1024}
        height={1024}
        loading="lazy"
        className="w-[260px] md:w-[360px] h-auto will-change-transform drop-shadow-[0_20px_40px_rgba(255,80,200,0.25)]"
        style={{ transformStyle: "preserve-3d" }}
      />
      <div
        className="-mt-6 w-10 h-16 rounded-b-full"
        style={{
          background: "linear-gradient(180deg, #5a1f6b 0%, #2a0a3a 100%)",
          boxShadow: "inset -4px 0 8px rgba(255,100,200,.4), inset 4px 0 8px rgba(0,0,0,.5)",
        }}
      />
      <div
        className="w-44 md:w-56 h-32 md:h-40 rounded-md"
        style={{
          background: "linear-gradient(135deg, #5a1f6b 0%, #2a0a3a 50%, #4a1a5a 100%)",
          boxShadow:
            "inset -10px 0 30px rgba(255,80,180,.35), inset 10px 0 30px rgba(0,0,0,.6), 0 30px 60px rgba(255,40,140,.25)",
        }}
      />
      <div className="absolute -bottom-8 w-[80%] h-12 rounded-full blur-2xl bg-pink-500/40 pointer-events-none" />
    </div>
  );
}
