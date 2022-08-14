import { useState } from "react";

export default function useIsMobile(mobileWidth) {
    const [width, setWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(window.innerWidth < mobileWidth);
    
    const updateWidth = () => {
      setWidth(window.innerWidth);
      setIsMobile(width < mobileWidth);
    };
    window.addEventListener("resize", updateWidth);

  return {
    isMobile,
    width,
  }
}