import { useEffect, useRef } from "react";

export default function useTimeout(callback, delay) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;

    const timer = setTimeout(() => callbackRef.current(), delay);
    return () => clearTimeout(timer);
  }, [delay]);
}
