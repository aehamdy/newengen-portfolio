import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import SectionTitle from "@/components/SectionTitle";
import { solutionList } from "@/data/solutionList";
import Image from "next/image";
import Link from "next/link";

function SolutionsSection() {
  return (
    <section
      id="selected-work"
      className="grid grid-cols-1 w-full min-h-dvh main-section-py main-section-px bg-surface-dark"
    >
      <div className="flex flex-col items-center gap-xs md:gap-sm">
        <SectionTitle title="Solutions" color="light" align="center" />

        <SectionHeading color="light" align="center" className="">
          <div className="flex justify-center">
            <h3 className="w-[100%] md:w-3/4 text-5xlarge md:text-7xlarge leading-10 md:leading-16">
              Our marketing solutions turn engagement into measurable growth.
            </h3>
          </div>
        </SectionHeading>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mt-12">
        {solutionList.map((solution) => (
          <li key={solution.id} className="w-full">
            <article key={solution.id}>
              <div className="w-full h-[400px] rounded-3xl overflow-hidden">
                <Image
                  src={solution.image}
                  alt={`${solution.title}-image`}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="flex flex-col items-start gap-5 mt-3">
                <div className="flex flex-col gap-2 text-content-light">
                  <h3 className="font-bold text-2xlarge">{solution.title}</h3>

                  <p className="">{solution.description}</p>
                </div>

                <Link
                  href={solution.link}
                  className="group flex items-center gap-sm  w-fit py-2 px-4 font-semibold text-content-dark bg-accent-secondary hover:bg-accent-primary rounded-md transition-all duration-300"
                >
                  Learn More{" "}
                  <Icon
                    name="arrow-right"
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SolutionsSection;
