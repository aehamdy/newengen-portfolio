import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { endpoints } from "@/lib/endpoints";
import Image from "next/image";
import companyImage1 from "@/assets/images/company/hero/company-hero-1.webp";

function CompanyHero() {
  return (
    <section className="h-[85dvh] lg:h-[83dvh] main-section-px">
      <h1 className="flex flex-col gap-0 font-black text-[55px] md:text-[100px] leading-[35px] md:leading-[110px] uppercase">
        ABOUT US
      </h1>

      <div className="flex flex-col md:flex-row justify-between gap-10 lg:h-7/10 mt-8">
        <div className="flex flex-col justify-between gap-8 lg:w-1/2">
          <p className="lg:w-[80%] font-light text-2xlarge lg:text-xs">
            We don&apos;t take ourselves too seriously but are dead serious
            about delivering results. Data fuels everything we do, but we
            aren&apos;t robots—we&apos;re humans with heart, dedicated to the
            successes of our clients and each other.
          </p>

          <Button href={endpoints.apply} isPrimary>
            Open Positions <Icon name="arrow-right" />
          </Button>
        </div>

        <div className="flex lg:w-3/5 h-[400px] lg:h-full rounded-md overflow-hidden">
          <Image
            src={companyImage1}
            alt="company-image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default CompanyHero;
