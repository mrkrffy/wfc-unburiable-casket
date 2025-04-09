import { useState, useEffect, useCallback, useMemo } from "react";

type ScreenSizeCategory = "small" | "medium" | "large";

const useScreenSize = () => {
  const breakpoints = useMemo(
    () => ({
      small: 768,
      medium: 1024,
      large: 1440,
    }),
    []
  );

  const getScreenSizeCategory = useCallback(
    (width: number): ScreenSizeCategory => {
      if (width <= breakpoints.small) return "small";
      if (width <= breakpoints.medium) return "medium";
      return "large";
    },
    [breakpoints]
  );

  const [screenSize, setScreenSize] = useState<{
    width: number;
    height: number;
    screenSizeCategory: ScreenSizeCategory;
  }>({
    width: window.innerWidth,
    height: window.innerHeight,
    screenSizeCategory: getScreenSizeCategory(window.innerWidth),
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
        screenSizeCategory: getScreenSizeCategory(window.innerWidth),
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [getScreenSizeCategory]);

  return screenSize;
};

export default useScreenSize;
