import React, { FC } from "react";
import { useInView } from "react-intersection-observer";

interface FadeInProps {
  children: React.ReactNode;
}

const FadeIn: FC<FadeInProps> = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`opacity-0 ${inView && "opacity-100 animate-fade-up"}`}>
      {children}
    </div>
  );
};

export default FadeIn;
