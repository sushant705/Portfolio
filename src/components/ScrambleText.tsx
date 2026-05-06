import { useEffect, useRef, useState } from "react";

const FONTS = [
  "'Anton', sans-serif",
  "'Caveat', cursive",
  "'Inter', sans-serif",
  "'Courier New', monospace",
  "Georgia, serif",
  "'Impact', sans-serif",
  "'Times New Roman', serif",
  "'Brush Script MT', cursive",
];

export function ScrambleText({
  text,
  className,
  speed = 120,
}: {
  text: string;
  className?: string;
  speed?: number;
}) {
  const [font, setFont] = useState<string | undefined>(undefined);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setFont(FONTS[Math.floor(Math.random() * FONTS.length)]);
    }, speed);
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setFont(undefined);
  };

  useEffect(
    () => () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    },
    [],
  );

  return (
    <span
      className={className}
      onMouseEnter={start}
      onMouseLeave={stop}
      style={font ? { fontFamily: font } : undefined}
    >
      {text}
    </span>
  );
}
