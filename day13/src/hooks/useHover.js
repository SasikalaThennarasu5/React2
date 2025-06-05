import { useRef, useState, useEffect } from "react";

export default function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const enter = () => setHovered(true);
    const leave = () => setHovered(false);

    node.addEventListener("mouseenter", enter);
    node.addEventListener("mouseleave", leave);

    return () => {
      node.removeEventListener("mouseenter", enter);
      node.removeEventListener("mouseleave", leave);
    };
  }, []);

  return [hovered, ref];
}
