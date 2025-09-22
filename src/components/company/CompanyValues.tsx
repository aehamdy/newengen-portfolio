import SectionTitle from "@/components/SectionTitle";
import { siteConfig } from "@/lib/config";

const values = [
  {
    id: 1,
    title: "Be the Good",
    content:
      "We act with integrity, humility, and altruism inside and outside our company. We promote diversity, equity, inclusion, and belonging in every aspect of our business. We cultivate a safe workplace where everyone feels respected, engaged, and able to reach their full potential. Bottom line: We give a shit.",
  },
  {
    id: 2,
    title: "Expertise",
    content:
      "We take pride in our work, holding ourselves to a high standard of executional excellence. We continually work to expand our skills and master our craft. Our approach sets precedent and reverberates throughout our always-changing industry, inspiring adaptation among brands, platforms, and agencies.",
  },
  {
    id: 3,
    title: "Growth Mindset",
    content:
      "We are biased toward action, starting with “What is possible?” instead of being stuck in scarcity. We embrace challenges and welcome feedback as opportunities to improve what we do and how we do it. We find joy in the process and are fueled by our curiosity to master complex problems. We aren’t afraid to take calculated risks or operate in ambiguity, recognizing that imperfection is a part of progress.",
  },
  {
    id: 4,
    title: "Empathetic Directness",
    content:
      "We give and receive feedback with courage, openness, and empathy—internally and externally, across departments, and at all levels. We do the right thing, even when it’s hard. We aim to understand (not judge) and teach (not take over). Our feedback is empirical and focuses on behaviors and outcomes.",
  },
  {
    id: 5,
    title: "All In",
    content: `${siteConfig.name} is our company. We believe in what we are building together and put the team first to accomplish our shared goals. We reject apathy and cynicism and do everything we can to help each other win. Being All In is not about the hours we log, nor does it mean we agree on every decision. Rather, it is a mentality of common purpose that guides how we engage, reach consensus and show up for our clients and teammates.`,
  },
];

function CompanyValues() {
  return (
    <section className="space-y-6 main-section-px">
      <SectionTitle title="Our Values" color="light" align="start" />

      <ul className="">
        {values.map((value) => (
          <li
            key={value.id}
            className="space-y-3 pt-4 pb-16 border-t border-surface-muted/50"
          >
            <h4 className="font-bold text-2xlarge">{value.title}</h4>
            <p className="lg:w-1/2 lg:ms-auto lg:text-end">{value.content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CompanyValues;
