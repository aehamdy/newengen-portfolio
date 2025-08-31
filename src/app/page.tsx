import BrandSvg from "@/components/BrandSvg";
import ClientsSection from "@/components/ClientsSection";
import HeroSection from "@/components/HeroSection";
import Insights from "@/components/Insights";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import ServicesSection from "@/components/ServicesSection";
import SlidingImagesSection from "@/components/SlidingImagesSection";
import SolutionsSection from "@/components/SolutionsSection";

export default function Home() {
  return (
    <main className="relative bg-surface-primary ">
      <HeroSection />

      <SelectedWorkSection />

      <ServicesSection />

      <ClientsSection />

      <SolutionsSection />

      <SlidingImagesSection />

      <Insights />

      <BrandSvg />
    </main>
  );
}
