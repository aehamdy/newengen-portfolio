"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

interface VerticalSliderProps {
  content: StaticImageData[];
  width?: number;
  height?: number;
  duration?: number;
}

function VerticalSlider({
  content,
  width = 200,
  height = 60,
  duration = 2500,
}: VerticalSliderProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % content.length);
    }, duration);

    return () => clearInterval(intervalId);
  }, [content.length, duration]);

  return (
    <div
      className="relative bg-accent-primary rounded-md overflow-hidden"
      style={{ width, height }}
    >
      <div
        className="transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateY(-${currentIndex * height}px)`,
        }}
      >
        {content.map((src, idx) => (
          <div
            key={idx}
            style={{ width, height }}
            className="flex items-center py-2 px-8 justify-center overflow-hidden"
          >
            <div
              className="relative p-6"
              style={{ width: "100%", height: "100%" }}
            >
              <Image
                src={src}
                alt={`Slide ${idx + 1}`}
                fill
                className="object-contain"
                sizes={`${width}px`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VerticalSlider;
