import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const onEnter = () => setHover(true);
    const onLeave = () => setHover(false);

    window.addEventListener("mousemove", move);
    document.querySelectorAll<HTMLElement>("a, button, [data-cursor='hover']").forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    document.body.classList.add("cursor-hidden");

    return () => {
      window.removeEventListener("mousemove", move);
      document.querySelectorAll<HTMLElement>("a, button, [data-cursor='hover']").forEach(el => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      document.body.classList.remove("cursor-hidden");
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" style={{ left: pos.x, top: pos.y }} />
      <div
        className="cursor-ring transition-all duration-150"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) scale(${hover ? 1.1 : 1})`,
          background: hover ? "hsl(var(--primary) / 0.06)" : "transparent",
        }}
      />
    </>
  );
}
