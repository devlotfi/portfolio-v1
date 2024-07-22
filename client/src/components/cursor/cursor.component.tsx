import { useEffect, useRef, useState } from "react";
import { cn } from "../../utils/cn";

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.top = `${e.clientY}px`;
        cursorRef.current.style.left = `${e.clientX}px`;
      }
    };

    const mouseDownHandler = () => {
      setIsMouseDown(true);
    };

    const mouseUpHandler = () => {
      setIsMouseDown(false);
    };

    window.addEventListener("mousemove", mouseMoveHandler);
    window.addEventListener("mousedown", mouseDownHandler);
    window.addEventListener("mouseup", mouseUpHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("mousedown", mouseDownHandler);
      window.removeEventListener("mouseup", mouseUpHandler);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      id="cursor"
      className={cn(
        "hidden fixed group-hover/cursor:flex origin-center h-[1rem] w-[1rem] duration-75 transition-[height,width] bg-edge-100 border-base-100 border z-[1000] pointer-events-none",
        isMouseDown && "h-[1.5rem] w-[1.5rem]"
      )}
    ></div>
  );
}
