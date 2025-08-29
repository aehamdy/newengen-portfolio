import SectionHeading from "@/components/SectionHeading";
import SectionTitle from "@/components/SectionTitle";

export const services = [
  {
    id: 1,
    title: "Strategy",
    description:
      "Genuine impact starts with a plan. Before we spend a single dollar on media, we immerse ourselves in your business to deliver insights on your market, customers, and competition, providing deeply researched perspectives on where and how to grow your brand across the full customer journey",
    tags: [
      "Market Research",
      "Consumer Segmentation & Market Sizing",
      "Competitive Intelligence",
      "Media & Comms Planning",
      "Strategic Consulting",
    ],
    link: "#",
  },
  {
    id: 2,
    title: "Strategy",
    description:
      "Real growth takes more than quick wins—it demands a strategic, full-funnel media approach. At New Engen, we leverage deep consumer research and insights, innovative creative strategy, and precision media planning and buying to craft high-performance campaigns that maximize impact while fueling long-term brand momentum.",
    tags: [
      "Paid Search & Shipping",
      "Paid Social",
      "TikTok",
      "Affiliate Marketing",
      "Acorn Creator Suite",
      "Display",
      "Video & Audio",
      "Retail Media & Marketplaces",
    ],
    link: "#",
  },
  {
    id: 3,
    title: "Creative",
    description:
      "Creative that captivates and converts. We craft audience-first content that doesn’t just look good—it performs. From brand storytelling to performance-driven assets, our creative breaks through the noise, builds brand equity, and drives measurable results across every channel.",
    tags: [
      "Short-Form Video",
      "Hi-Fi Video",
      "Statics",
      "Landing Pages",
      "Photography",
    ],
    link: "#",
  },
  {
    id: 4,
    title: "Measurement",
    description:
      "At New Engen, measurement isn’t an afterthought—it’s the foundation of success. Our always-on, AI-powered analytics provide a real-time, cross-channel view of performance, empowering brands to optimize spend, maximize impact, and scale with confidence.",
    tags: [
      "Audience Management",
      "Intelligence & Insights",
      "Targeting & Activation",
      "Measurement & Attribution",
    ],
    link: "#",
  },
  {
    id: 5,
    title: "Retail Marketing",
    description:
      "Retail marketing is more than just shelf space—it’s about strategic execution that drives measurable growth. At New Engen, we take a data-first approach to retail, combining digital media, shopper insights, and omnichannel activation to create campaigns that convert. With deep expertise in CPG and retail media, we optimize every touchpoint to turn browsers into buyers.",
    tags: [
      "Multi-Channel Activation",
      "Retail Media",
      "Creator & Affiliate",
      "Shopper Content",
      "Partnership Planning",
      "Commerce Intelligence",
    ],
    link: "#",
  },
];

function ServicesSection() {
  return (
    <section className="grid grid-cols-1 min-h-dvh main-section-py main-section-px bg-surface-parimary">
      <div className="flex flex-col items-start gap-md">
        <SectionTitle title="Services" color="light" align="start" />

        <SectionHeading color="light" align="start" className="">
          <h3 className="text-5xlarge md:text-7xlarge leading-12 md:leading-14 lg:whitespace-nowrap">
            Driving marketing impact <br /> across the customer journey.
          </h3>
        </SectionHeading>
      </div>
    </section>
  );
}

export default ServicesSection;
