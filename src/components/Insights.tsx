import SectionHeading from "@/components/SectionHeading";
import { insights } from "@/data/insights";
import { siteConfig } from "@/lib/config";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import { endpoints } from "@/lib/endpoints";
import Icon from "@/components/Icon";

function Insights() {
  return (
    <section
      id="selected-work"
      className="grid grid-cols-1 w-full min-h-dvh main-section-py main-section-px bg-surface-secondary"
    >
      <div className="flex flex-col items-center gap-xs md:gap-sm">
        <SectionHeading color="light" align="center" className="">
          <h3 className="font-black text-7xlarge md:text-8xlarge leading-14 md:leading-24 text-content-dark uppercase">
            Insights By <br /> {siteConfig.name}
          </h3>
        </SectionHeading>

        <p className="text-center text-content-dark">
          Insights that drive impact—rooted in research, supported by data, and
          made to fuel brand growth.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 mt-6">
          {insights.map((insight) => (
            <li key={insight.id} className="group text-content-dark">
              <Link href={insight.link}>
                <div className="rounded-md overflow-hidden">
                  <Image
                    src={insight.image}
                    alt={insight.description}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col items-start gap-4 mt-3">
                  <div className="flex items-center gap-2 text-xlarge lg:text-base">
                    <div className="flex items-center gap-1">
                      {insight.tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex py-1 px-2 border border-dark rounded-4xl"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="">
                      <p className="">{insight.date}</p>
                    </div>
                  </div>

                  <div className="relative w-fit before:absolute before:w-0 group-hover:before:w-full before:h-full before:top-0 before:start-0 before:bg-accent-primary before:transition-all before:duration-500">
                    <p className="relative group-hover:underline">
                      {insight.description}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <Button isPrimary href={endpoints.nav.insights} className="">
          View All
          <Icon
            name="arrow-right"
            className="group-hover:translate-x-1 transition-all"
          />
        </Button>
      </div>
    </section>
  );
}

export default Insights;
