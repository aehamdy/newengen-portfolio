"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(useGSAP, ScrollTrigger, Draggable);
import careerImage1 from "@/assets/images/company/careers/careers-1.webp";
import careerImage2 from "@/assets/images/company/careers/careers-2.webp";
import careerImage3 from "@/assets/images/company/careers/careers-3.webp";
import careerImage4 from "@/assets/images/company/careers/careers-4.webp";
import careerImage5 from "@/assets/images/company/careers/careers-5.webp";
import careerImage6 from "@/assets/images/company/careers/careers-6.webp";
import careerImage7 from "@/assets/images/company/careers/careers-7.webp";
import careerImage8 from "@/assets/images/company/careers/careers-8.webp";
import careerImage9 from "@/assets/images/company/careers/careers-9.webp";

const careerImages = [
  careerImage1,
  careerImage2,
  careerImage3,
  careerImage4,
  careerImage5,
  careerImage6,
  careerImage7,
  careerImage8,
  careerImage9,
];

function CompanyCareersImageSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);
  const slides = [...careerImages, ...careerImages]; // Duplicate for infinite effect

  useGSAP(() => {
    if (!sliderRef.current || !slidesRef.current) return;

    const slides = Array.from(slidesRef.current.children) as HTMLElement[];
    const slideWidth = slides[0]?.offsetWidth || 0;
    const totalWidth = slideWidth * slides.length;
    let animation: gsap.core.Tween | null = null;
    let isDragging = false;
    let startX = 0;
    let x = 0;
    const animationId: number = 0;

    // Set initial position
    gsap.set(slidesRef.current, { x: 0 });

    const handleMouseDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      startX = "touches" in e ? e.touches[0].clientX : e.clientX;
      if (animation) {
        animation.kill();
        animation = null;
      }
      cancelAnimationFrame(animationId);
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("touchmove", handleMouseMove, {
        passive: false,
      });
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchend", handleMouseUp);
      sliderRef.current?.classList.add("active");
    };

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();

      const currentX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const diff = currentX - startX;
      x += diff;
      startX = currentX;

      // Apply boundaries
      const maxX = 0;
      const minX = -(totalWidth - slideWidth * 4);
      x = Math.max(minX, Math.min(maxX, x));

      gsap.set(slidesRef.current, { x });
    };

    const handleMouseUp = () => {
      if (!isDragging) return;
      isDragging = false;

      // Calculate momentum
      const currentX = x;
      const velocity = (currentX - x) * 0.5; // Adjust multiplier for sensitivity

      // Apply inertia
      let targetX = currentX + velocity * 10; // Adjust multiplier for distance
      const maxX = 0;
      const minX = -(totalWidth - slideWidth * 4);

      // Snap to nearest slide
      const slideIndex = Math.round(-targetX / slideWidth);
      targetX = -slideIndex * slideWidth;
      targetX = Math.max(minX, Math.min(maxX, targetX));

      // Animate to target position
      animation = gsap.to(slidesRef.current, {
        x: targetX,
        duration: 0.8,
        ease: "power3.out",
        onUpdate: () => {
          x = parseFloat(gsap.getProperty(slidesRef.current!, "x") as string);
        },
        onComplete: () => {
          // Reset position if we've reached the end for infinite effect
          if (Math.abs(x) >= totalWidth - slideWidth * 4) {
            x = 0;
            gsap.set(slidesRef.current, { x: 0 });
          }
          animation = null;
        },
      });

      // Cleanup
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchend", handleMouseUp);
      sliderRef.current?.classList.remove("active");
    };

    // Add event listeners
    const slider = sliderRef.current;
    slider?.addEventListener("mousedown", handleMouseDown);
    slider?.addEventListener("touchstart", handleMouseDown, { passive: false });

    // Cleanup
    return () => {
      slider?.removeEventListener("mousedown", handleMouseDown);
      slider?.removeEventListener("touchstart", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchend", handleMouseUp);
      if (animation) animation.kill();
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      ref={sliderRef}
      className="careers-slider w-full overflow-hidden pb-4 cursor-grab active:cursor-grabbing"
    >
      <div ref={slidesRef} className="flex gap-4 w-max select-none">
        {slides.map((image, index) => (
          <div
            key={`${index}-${image.src}`}
            className="w-64 h-64 flex-shrink-0 relative rounded-lg overflow-hidden"
          >
            <Image
              src={image}
              alt={`Career image ${(index % careerImages.length) + 1}`}
              fill
              className="object-cover pointer-events-none"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanyCareersImageSlider;
