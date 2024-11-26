import { useEffect, useState } from "react";

export const useScrollPosition = (scrollFactor: number = 0): number => {
  // const isClient = typeof window !== "undefined"; // Check if window is defined
  const [position, setPosition] = useState<number>(0);
  const onscroll = (): void => {
    setPosition(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", onscroll);
    return () => {
      window.removeEventListener("scroll", onscroll);
    };
  }, []);
  return position * scrollFactor;
};
