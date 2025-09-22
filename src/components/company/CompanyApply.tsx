import Button from "@/components/Button";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import { endpoints } from "@/lib/endpoints";

function CompanyApply() {
  return (
    <section className="">
      <SectionHeading color="light" align="center" className="">
        <h2 className="text-5xlarge md:text-8xlarge leading-12 md:leading-22 uppercase">
          Join The
          <br /> New Engen
          <br /> Team
        </h2>

        <Button isPrimary href={`${endpoints.apply}`} className="mt-8 mx-auto">
          Open Positions <Icon name="arrow-right" />
        </Button>
      </SectionHeading>
    </section>
  );
}

export default CompanyApply;
