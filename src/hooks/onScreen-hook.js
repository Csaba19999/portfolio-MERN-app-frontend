import { useState, useEffect } from "react";

export default function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);
  const [unmount, setUnmount] = useState(false);

  const observer = new IntersectionObserver(([entry]) => {
    setIntersecting(entry.isIntersecting);
  });

  useEffect(() => {
      observer.observe(ref.current);
      if (isIntersecting) {
        setUnmount(true);
      }
  });
      

  return unmount ? unmount : isIntersecting;
}
