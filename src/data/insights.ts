import { StaticImageData } from "next/image";
import insightImage1 from "../assets/images/insights/insight-1.webp";
import insightImage2 from "../assets/images/insights/insight-2.webp";
import insightImage3 from "../assets/images/insights/insight-3.webp";

export type insightType = {
  id: number;
  image: StaticImageData;
  description: string;
  tags: string[];
  date: string;
  link: string;
};

export const insights: insightType[] = [
  {
    id: 1,
    image: insightImage1,
    description: "September 2025 TikTok Trends: Viral Moments You Need To Know",
    tags: ["For Creators", "Trends"],
    date: "08.25.25",
    link: "#",
  },
  {
    id: 2,
    image: insightImage2,
    description:
      "Quoted in Digday: Kevin Goodwin on Met's Superintellignece Labs",
    tags: ["In The News"],
    date: "08.19.25",
    link: "#",
  },
  {
    id: 3,
    image: insightImage3,
    description: "August 2025 TikTok Trends: Viral Moments You Need to Know",
    tags: ["For Creators", "Trends"],
    date: "07.28.25",
    link: "#",
  },
];
