import Icon from "@/components/Icon";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="relative grid grid-cols-1 md:grid-cols-2 h-dvh pt-[95px] main-section-px pb-[80px] text-content-light">
      <div className="flex flex-col md:justify-between gap-md">
        <h1 className="flex flex-col gap-0 font-black text-[55px] md:text-[120px]">
          <div className="leading-[50px] md:leading-[110px]">GENUINE.</div>
          <div className="leading-[50px] md:leading-[110px]">IMPACT.</div>
        </h1>

        <p className="md:w-7/10 text-base md:text-xlarge">
          We are an industry-leading digital marketing agency partnering with
          bold brands to drive impact across every stage of the customer journey
          - maximizing it, measuring it, and repeating it.
        </p>
      </div>

      <div className=""></div>

      <Link
        href="#selected-work"
        className="absolute start-1/2 bottom-3 translate-x-1/2 flex animate-bounce"
      >
        <Icon name="arrows-down" />
      </Link>
    </section>
  );
}

export default HeroSection;
