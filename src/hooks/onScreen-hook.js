import { useState } from "react";

export default function useIsMobile(mobileWidth) {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [isMobile, setIsMobile] = useState(window.innerWidth < mobileWidth);
    
    const updatePageSize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      setIsMobile(width < mobileWidth);
    };
    window.addEventListener("resize", updatePageSize);

  return {
    isMobile,
    height,
    width,
  }
}