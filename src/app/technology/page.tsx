import TechnologyHero from "@/components/technology/TechnologyHero";
import TechnologyImpact from "@/components/technology/TechnologyImpact";
import TechnologyResults from "@/components/technology/TechnologyResults";
import { siteConfig } from "@/lib/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Technology | ${siteConfig.name}`,
  description: `${siteConfig.platform} is ${siteConfig.name}’s proprietary platform, purpose-built to fuel faster, smarter marketing across strategy, creative, media, and measurement.`,
};

function Technology() {
  return (
    <main className="space-y-20 main-section-py main-section-px pt-[95px]">
      <TechnologyHero />
      <TechnologyImpact />
      <TechnologyResults />
    </main>
  );
}

export default Technology;
