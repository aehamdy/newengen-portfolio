"use client";
import Image from "next/image";
import slide1 from "../assets/images/sliding-images/slide-1.webp";
import slide2 from "../assets/images/sliding-images/slide-2.webp";
import slide3 from "../assets/images/sliding-images/slide-3.webp";
import slide4 from "../assets/images/sliding-images/slide-4.webp";
import { useEffect, useState } from "react";

function SlidingImagesSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const images = [slide1, slide2, slide3, slide4];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(intervalId);
  }, [images.length]);
  return (
    <section className="w-full h-[100dvh] relative overflow-hidden">
      <div className="flex w-full h-full relative">
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 w-full h-full transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
            }}
          >
            <Image
              src={image}
              alt={`Sliding Image ${index + 1}`}
              fill
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default SlidingImagesSection;
