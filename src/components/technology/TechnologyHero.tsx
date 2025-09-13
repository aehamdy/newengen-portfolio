import { siteConfig } from "@/lib/config";
import dashboardImage from "@/assets/images/technology-dashboard.webp";
import Image from "next/image";

const mainHeading = [
  "Discover",
  `${siteConfig.platform} by`,
  `${siteConfig.name}`,
];

const paragraphs = [
  "Our differentiator isn’t just what we do—it’s how we do it.",
  `${siteConfig.platform} is New Engen’s proprietary platform, purpose-built to fuel faster, smarter marketing across strategy, creative, media, and measurement. It connects the dots between what you say, where you say it, and how it performs—giving teams the clarity to act and the tools to scale what works.`,
  `From creative insights and media performance to cross-channel measurement and creator collaboration, ${siteConfig.platform} brings it all together in one connected system.`,
  "It’s how we help brands move with speed, precision, and confidence.",
];

export default function TechnologyHero() {
  return (
    <section className="space-y-20">
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <h1 className="flex flex-col gap-0 font-black text-[55px] md:text-[120px] uppercase">
          {mainHeading.map((word, index) => (
            <div key={index} className="leading-[55px] md:leading-[110px]">
              {word}
            </div>
          ))}
        </h1>

        <div className="flex justify-center h-fit py-0 md:py-2 px-6 font-semibold text-9xlarge text-surface-primary bg-accent-primary rounded-lg">
          {siteConfig.platform}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-6 main-section-px">
        <h4 className="font-bold text-3xlarge">
          The Platform That Powers Smarter Marketing
        </h4>

        <div className="md:w-1/2 lg:pe-8 text-xlarge">
          {paragraphs.map((para, index) => (
            <p key={index} className="lg:w-[90%] mb-4">
              {para}
            </p>
          ))}
        </div>
      </div>

      <div className="flex justify-center py-14 bg-surface-dark rounded-md">
        <div className="w-3/4 overflow-hidden">
          <Image
            src={dashboardImage}
            alt="dashbaord-image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
