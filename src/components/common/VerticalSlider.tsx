"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

interface ImageObject {
  src: StaticImageData | string;
  alt?: string;
  [key: string]: unknown;
}

interface VerticalSliderProps {
  content: StaticImageData[] | string[] | ImageObject[];
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

  // Check if content is text-based to determine if width should be dynamic
  const isTextContent = content.length > 0 && typeof content[0] === "string";

  return (
    <div
      className="relative bg-accent-primary rounded-md overflow-hidden"
      style={{
        width: isTextContent ? "auto" : width,
        minWidth: isTextContent ? "auto" : width,
        height,
      }}
    >
      <div
        className="transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateY(-${currentIndex * height}px)`,
          width: isTextContent ? "max-content" : "100%",
        }}
      >
        {content.map((item, idx) => {
          // Handle string content - render as text in span
          if (typeof item === "string") {
            return (
              <div
                key={idx}
                style={{ height, width: "auto" }}
                className="flex items-center py-2 px-4 justify-center overflow-hidden"
              >
                <span className="text-content-dark font-semibold text-center text-3xlarge whitespace-nowrap">
                  {item}
                </span>
              </div>
            );
          }

          // Handle object with src property (ImageObject)
          if (typeof item === "object" && item !== null && "src" in item) {
            return (
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
                    src={item.src}
                    alt={`Slide ${idx + 1}`}
                    fill
                    className="object-contain"
                    sizes={`${width}px`}
                  />
                </div>
              </div>
            );
          }

          // Handle StaticImageData (direct image import)
          return (
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
                  src={item as StaticImageData}
                  alt={`Slide ${idx + 1}`}
                  fill
                  className="object-contain"
                  sizes={`${width}px`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default VerticalSlider;
