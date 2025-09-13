import { siteConfig } from "@/lib/config";

const impacts = [
  {
    id: 1,
    title: "Measurement That Drives Action",
    content: `From incrementality and MMM to triangulated testing, ${siteConfig.platform} transforms complexity into clarity—so brands can invest, optimize, and scale with confidence.`,
    canvas: (
      <svg
        viewBox="0 0 200 100"
        className="w-full h-40 rounded-lg bg-surface-dark"
      >
        <rect x="20" y="40" width="20" height="50" fill="#34D399" />
        <rect x="60" y="20" width="20" height="70" fill="#10B981" />
        <rect x="100" y="10" width="20" height="80" fill="#059669" />
        <rect x="140" y="35" width="20" height="55" fill="#047857" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Insight-Driven Creative",
    content: `${siteConfig.platform} analyzes creative performance to surface what’s working, why it’s resonating, and how we can build on that success.`,
    canvas: (
      <svg
        viewBox="0 0 200 100"
        className="w-full h-40 rounded-lg bg-surface-dark"
      >
        <polyline
          points="20,80 60,40 100,60 140,20 180,50"
          fill="none"
          stroke="#34D399"
          strokeWidth="3"
        />
        <circle cx="20" cy="80" r="4" fill="#34D399" />
        <circle cx="60" cy="40" r="4" fill="#34D399" />
        <circle cx="100" cy="60" r="4" fill="#34D399" />
        <circle cx="140" cy="20" r="4" fill="#34D399" />
        <circle cx="180" cy="50" r="4" fill="#34D399" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Connect Any Data Source",
    content: `${siteConfig.platform} integrates with virtually any data source—bringing all your signals into one place to deliver a clear, connected view of media performance and opportunity.`,
    canvas: (
      <svg
        viewBox="0 0 200 100"
        className="w-full h-40 rounded-lg bg-surface-dark"
      >
        <circle cx="40" cy="70" r="6" fill="#34D399" />
        <circle cx="80" cy="40" r="6" fill="#10B981" />
        <circle cx="120" cy="80" r="6" fill="#059669" />
        <circle cx="160" cy="30" r="6" fill="#047857" />
        <line
          x1="40"
          y1="70"
          x2="80"
          y2="40"
          stroke="#34D399"
          strokeWidth="2"
        />
        <line
          x1="80"
          y1="40"
          x2="120"
          y2="80"
          stroke="#10B981"
          strokeWidth="2"
        />
        <line
          x1="120"
          y1="80"
          x2="160"
          y2="30"
          stroke="#059669"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Powered by AI",
    content: `${siteConfig.platform} AI surfaces insights and recommendations that help teams spend smarter, optimize faster, and get more from every dollar invested.`,
    canvas: (
      <svg
        viewBox="0 0 200 100"
        className="w-full h-40 rounded-lg bg-surface-dark"
      >
        <circle
          cx="100"
          cy="50"
          r="35"
          stroke="#34D399"
          strokeWidth="6"
          fill="none"
        />
        <path
          d="M100,50 L135,50 A35,35 0 0,0 100,15 Z"
          fill="#10B981"
          opacity="0.8"
        />
        <path
          d="M100,50 L100,85 A35,35 0 0,0 135,50 Z"
          fill="#059669"
          opacity="0.8"
        />
      </svg>
    ),
  },
];

export default function TechnologyImpact() {
  return (
    <section>
      <h3 className="w-fit mb-2 font-bold text-5xlarge md:text-7xlarge">
        Built for Impact
      </h3>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {impacts.map((impact) => (
          <li
            key={impact.id}
            className="p-4 rounded-xl border-surface-muted/20"
          >
            <div className="mb-4">{impact.canvas}</div>
            <h3 className="my-2 font-bold text-2xlarge">{impact.title}</h3>
            <p className="text-xlarge">{impact.content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
