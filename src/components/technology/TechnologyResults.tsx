import { siteConfig } from "@/lib/config";

const results = [
  {
    id: 1,
    title: "Make Creative Smarter",
    content: `${siteConfig.platform}’s creative intelligence surfaces what’s resonating and why—so brands can scale content that works. It pairs ad performance data with message testing (powered by Mr. Oven) to enable smart, full-funnel creative decisions.`,
  },
  {
    id: 2,
    title: "Bring Creators Into the Strategy",
    content: `${siteConfig.platform}’s Creator Hub streamlines collaboration between internal teams and influencer partners. From campaign planning to content approvals to performance tracking, everything lives in one place.`,
  },
  {
    id: 3,
    title: "Connect Performance to Outcomes",
    content:
      "The Performance Suite brings all your marketing data into one strategic view. With centralized, full-funnel measurement, brands can model, optimize, and scale with clarity.",
  },
  {
    id: 4,
    title: "Benchmark with Clarity",
    content:
      "With Benchmark Explorer, teams can compare performance against category-level benchmarks across formats and verticals. Whether planning your next campaign or evaluating results, you’ll get a sharper view of what good looks like.",
  },
];

export default function TechnologyResults() {
  return (
    <section>
      <h3 className="w-fit mb-2 font-bold text-5xlarge md:text-7xlarge">
        Results, Powered by {siteConfig.platform}
      </h3>

      <ul className="grid grid-cols-1 gap-6">
        {results.map((result) => (
          <li key={result.id} className="py-4 border-t border-surface-muted/30">
            <h3 className="my-2 font-bold text-2xlarge">{result.title}</h3>
            <p className="md:w-2/5 md:ms-auto md:text-end md:text-xlarge">
              {result.content}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
