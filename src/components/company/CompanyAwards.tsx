import SectionHeading from "@/components/SectionHeading";
import SectionTitle from "@/components/SectionTitle";
import { awardsList } from "@/data/awardsList";

function CompanyAwards() {
  return (
    <section className="space-y-12">
      <div className="space-y-8">
        <SectionTitle title="Awards" color="light" align="center" />

        <SectionHeading color="light" align="center" className="">
          <h2 className="text-5xlarge md:text-6xlarge leading-12 md:leading-14">
            Our hard work <br />
            keeps paying off.
          </h2>
        </SectionHeading>
      </div>

      <ul className="">
        {awardsList.map((award) => (
          <li
            key={award.id}
            className="hover:text-accent-primary border-t last:border-b border-accent-primary/30 transition-colors duration-normal"
          >
            <div className="py-5 px-8 font-medium text-sm">
              <p className="">{award.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CompanyAwards;
