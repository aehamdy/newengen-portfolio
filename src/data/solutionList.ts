import { StaticImageData } from "next/image";
import solutionImage1 from "../assets/images/solutions/solution-1.webp";
import solutionImage2 from "../assets/images/solutions/solution-2.webp";
import solutionImage3 from "../assets/images/solutions/solution-3.webp";
import solutionImage4 from "../assets/images/solutions/solution-4.webp";

export type solutionType = {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
  link: string;
};

export const solutionList: solutionType[] = [
  {
    id: 1,
    image: solutionImage1,
    title: "Acorn Creator Suite",
    description:
      "Connect with vetted creators to craft authentic content that drives engagement, amplifies reach, and fuels measurable growth across digital and retail channels.",
    link: "#",
  },
  {
    id: 2,
    image: solutionImage2,
    title: "Donuts Studios",
    description:
      "Create audience-first, performance-driven content—from short-form videos to premium campaigns—that captivates, converts, and scales across digital platforms.",
    link: "#",
  },
  {
    id: 3,
    image: solutionImage3,
    title: "Digital Media",
    description:
      "Extend high-performing creator content beyond social with premium ad placements, first-party retail media, and AI-driven optimization to drive engagement and conversions.",
    link: "#",
  },
  {
    id: 4,
    image: solutionImage4,
    title: "Commerce Intelligence",
    description:
      "Optimize every campaign with data-backed insights, tracking performance at every funnel stage to maximize impact and inform future strategies.",
    link: "#",
  },
];
