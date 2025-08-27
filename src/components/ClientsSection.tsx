import VerticalSlider from "@/components/common/VerticalSlider";
import SectionHeading from "@/components/SectionHeading";
import SectionTitle from "@/components/SectionTitle";

const clients = [
  "E-commerce",
  "Media & Entertainment",
  "Subscription",
  "Fashion & Apparel",
  "Beauty",
  "Health & Wellness",
  "CPG",
  "Outdoor & Active Lifestyle",
  "Food & Beverage",
  "Home",
];

function ClientsSection() {
  return (
    <section className="grid grid-cols-1 min-h-dvh main-section-py main-section-px bg-surface-secondary">
      <div className="flex flex-col items-start gap-md">
        <SectionTitle title="Clients" color="dark" align="start" />

        <SectionHeading color="dark" align="start" className="">
          <div className="felx items-center gap-md">
            <h3 className="text-5xlarge md:text-7xlarge leading-12 md:leading-14 lg:whitespace-nowrap">
              Our
            </h3>

            <VerticalSlider content={clients} />
          </div>

          <div className="">
            <h3 className="text-5xlarge md:text-7xlarge leading-12 md:leading-14 lg:whitespace-nowrap">
              Clietns Shine
            </h3>
          </div>
        </SectionHeading>
      </div>
    </section>
  );
}

export default ClientsSection;
