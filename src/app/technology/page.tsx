import TechnologyHero from "@/components/technology/TechnologyHero";
import TechnologyImpact from "@/components/technology/TechnologyImpact";
import TechnologyResults from "@/components/technology/TechnologyResults";

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
