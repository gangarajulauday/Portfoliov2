"use client"

import React, { useEffect, useRef } from "react";

const Gradient = () => {
  const gradientRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      if (gradientRef.current) {
        gradientRef.current.style.left = `${clientX - 240}px`; 
        gradientRef.current.style.top = `${clientY - 240}px`;  
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={gradientRef}
      className="hidden md:block w-[480px] h-[480px] rounded-full bg-accent/70 absolute z-40 blur-[300px] pointer-events-none transition-all duration-300"
    />
  );
};

export default Gradient;
