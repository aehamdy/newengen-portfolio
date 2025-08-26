import SectionHeading from "@/components/SectionHeading";
import SectionTitle from "@/components/SectionTitle";

function ServicesSection() {
  return (
    <section className="grid grid-cols-1 min-h-dvh main-section-py main-section-px bg-surface-parimary">
      <div className="flex flex-col items-start gap-md">
        <SectionTitle title="Services" color="light" align="start" />

        <SectionHeading color="light" align="start" className="">
          <h3 className="text-5xlarge md:text-7xlarge leading-14 whitespace-nowrap">
            Driving marketing impact <br /> across the customer journey.
          </h3>
        </SectionHeading>
      </div>
    </section>
  );
}

export default ServicesSection;
