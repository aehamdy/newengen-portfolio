"use client";

import CompanyCareersImageSlider from "@/components/company/CompanyCareersImageSlider";
import SectionHeading from "@/components/SectionHeading";
import SectionTitle from "@/components/SectionTitle";

const careers = [
  "Remote opportunities and flexible hours",
  "Unlimited PTO",
  "Pet perks",
  "Floating holiday",
  "Health and wellness",
  "Parental support",
  "Connection and events",
];

function CompanyCareers() {
  return (
    <section className="min-h-dvh main-section-py main-section-px text-content-dark bg-surface-secondary">
      <CompanyCareersImageSlider />

      <SectionTitle title="Careers" color="dark" align="start" />

      <div className="mt-4">
        <SectionHeading color="dark" align="start" className="">
          <h2 className="text-5xlarge md:text-6xlarge leading-12 md:leading-14">
            Our people drive digital marketing breakthroughs every day.
          </h2>
        </SectionHeading>

        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-0 mt-8">
          <h3 className="font-bold text-3xlarge lg:w-[32%]">
            Develop a best-in-class skillset and knowledge base in a culture
            driven by testing & learning.
          </h3>

          <div className="flex flex-col lg:w-2/5 me-12">
            <p className="font-medium">
              Our people drive digital marketing breakthroughs every day. At New
              Engen, we believe that great work starts with a great
              workplace—one that supports our team&apos;s well-being, growth,
              and work-life balance. That&apos;s why we offer a range of
              benefits designed to help you thrive both professionally and
              personally.
            </p>

            <ul className="mt-6 border-t">
              {careers.map((career, idx) => (
                <li
                  key={idx}
                  className="relative flex items-center gap-3 py-3 ps-3 border-b"
                >
                  <div className="w-1.5 h-1.5 rounded-circle bg-surface-dark"></div>
                  {career}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyCareers;
