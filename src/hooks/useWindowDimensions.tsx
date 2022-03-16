import { useState, useEffect } from 'react';

type WindowDimensions = {
  screenWidth: number,
  // screenHeight: number
}

export default function useWindowDimensions() {
  const hasWindow = typeof window !== 'undefined';
  const [screenWidth, setScreenWidth] = useState<number | false>();

  function handleResize() {
    setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    if (hasWindow) {
      setScreenWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }
    return () => window.removeEventListener('resize', handleResize);
  }, [hasWindow, handleResize]);

  return { screenWidth } as WindowDimensions;
}
