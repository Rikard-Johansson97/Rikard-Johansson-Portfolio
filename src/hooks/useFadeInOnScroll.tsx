import { useRef, useEffect, useState } from "react";

export const useFadeInOnScroll = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      if (!ref.current) {
        return;
      }

      const elementTop = ref.current.getBoundingClientRect().top;
      const elementBottom = ref.current.getBoundingClientRect().bottom;
      const elementHeight = ref.current.getBoundingClientRect().height;

      const isTopVisible = elementTop >= 0 && elementTop <= window.innerHeight;
      const isBottomVisible =
        elementBottom >= 0 && elementBottom <= window.innerHeight;

      if (
        isTopVisible ||
        isBottomVisible ||
        elementHeight < window.innerHeight
      ) {
        setIsVisible(true);
      }
    };

    checkVisibility();
    window.addEventListener("scroll", checkVisibility);

    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  return isVisible;
};
