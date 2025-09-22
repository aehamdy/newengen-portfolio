import { StaticImageData } from "next/image";
import justinHayashiImage from "@/assets/images/company/leaders/justin-hayashi.webp";
import jonWhiteImage from "@/assets/images/company/leaders/jon-white.webp";
import heatherNicholsImage from "@/assets/images/company/leaders/heather-nichols.webp";
import aliceWooImage from "@/assets/images/company/leaders/alice-woo.webp";
import cindyArthurImage from "@/assets/images/company/leaders/cindy-arthur.webp";
import brianKimImage from "@/assets/images/company/leaders/brian-kim.webp";
import aliSmithImage from "@/assets/images/company/leaders/ali-smith.webp";
import andrewRichardsonImage from "@/assets/images/company/leaders/andrew-richardson.webp";
import tinaChongImage from "@/assets/images/company/leaders/tina-chong.webp";
import kathleenCoughlinImage from "@/assets/images/company/leaders/kathleen-coughlin.webp";
import melissaFearsImage from "@/assets/images/company/leaders/melissa-fears.webp";
import aimeeGoemanImage from "@/assets/images/company/leaders/aimee-goeman.webp";
import kevinGoodwinImage from "@/assets/images/company/leaders/kevin-goodwin.webp";
import candiceGrayImage from "@/assets/images/company/leaders/candice-gray.webp";
import michaelGoodwinImage from "@/assets/images/company/leaders/michael-goodwin.webp";
import ashleyHillImage from "@/assets/images/company/leaders/ashley-hill.webp";
import conorSkeaImage from "@/assets/images/company/leaders/conor-skea.webp";
import steveTazicImage from "@/assets/images/company/leaders/steve-tazic.webp";
import sabeekaDarImage from "@/assets/images/company/leaders/sabeeka-dar.webp";
import henryPrevetteImage from "@/assets/images/company/leaders/henry-prevette.webp";

export interface LeadershipMember {
  id: string;
  name: string;
  position: string;
  description: string;
  linkedIn: string;
  image: StaticImageData;
}

export const leadershipMembers: LeadershipMember[] = [
  {
    id: "1",
    name: "Justin Hayashi",
    position: "CEO",
    description:
      "Founder, board director & girl dad. Led Zulily's growth & analytics through IPO. Intermediate pickleball player.",
    linkedIn: "#",
    image: justinHayashiImage,
  },
  {
    id: "2",
    name: "Jon White",
    position: "President",
    description:
      "20+ years of leading and scaling businesses, specializing in finance, strategy and fatherhood.",
    linkedIn: "#",
    image: jonWhiteImage,
  },
  {
    id: "3",
    name: "Heather Nichols",
    position: "Chief Revenue Officer",
    description:
      "Deep expertise in CPG, omnichannel marketing, influencer strategy, full-funnel media—and making work fun.",
    linkedIn: "#",
    image: heatherNicholsImage,
  },
  {
    id: "4",
    name: "Alice Woo",
    position: "Chief Creative Officer",
    description:
      "Built Honey's marketing, driving its $4B PayPal acquisition—now leading Creative growth and strategy.",
    linkedIn: "#",
    image: aliceWooImage,
  },
  {
    id: "5",
    name: "Cindy Arthur",
    position: "General Manager, Digital Marketing",
    description:
      "Acquisition marketing expert driving full-funnel, seasonal, and omni-channel retail growth.",
    linkedIn: "#",
    image: cindyArthurImage,
  },
  {
    id: "6",
    name: "Brian Kim",
    position: "Managing Partner, Disruptors",
    description:
      "Led growth at Honey, PayPal, and Venmo—previously drove media at Dollar Shave Club through its $1B sale.",
    linkedIn: "#",
    image: brianKimImage,
  },
  {
    id: "7",
    name: "Ali Smith",
    position: "SVP Growth, Solutions",
    description:
      "Philanthropist & thought leader—15+ years experience of driving growth in shopper marketing and mobile tech.",
    linkedIn: "#",
    image: aliSmithImage,
  },
  {
    id: "8",
    name: "Andrew Richardson",
    position: "SVP, Advanced Analytics & Measurement",
    description:
      "Expert in data, strategy, and analytics—scaling teams, solving challenges, and perfecting backyard pizza.",
    linkedIn: "#",
    image: andrewRichardsonImage,
  },
  {
    id: "9",
    name: "Tina Chong",
    position: "VP, Finance",
    description:
      "Building financial operations and driving sustainable growth; enthused by high growth and pace—and family love.",
    linkedIn: "#",
    image: tinaChongImage,
  },
  {
    id: "10",
    name: "Kathleen Coughlin",
    position: "VP, Retail Social Commerce",
    description:
      "Building hybrid affiliate-influencer solutions & enhancing client ROI. Lake life and antique enthusiast.",
    linkedIn: "#",
    image: kathleenCoughlinImage,
  },
  {
    id: "11",
    name: "Melissa Fears",
    position: "VP Solutions, Client Success",
    description:
      "Experienced leader in marketing and retail, fostering teamwork, delivering excellence, and winning at limbo!",
    linkedIn: "#",
    image: melissaFearsImage,
  },
  {
    id: "12",
    name: "Aimee Goeman",
    position: "VP Channel Partnerships, Solutions",
    description:
      "Expert in social commerce and brand growth—outdoor adventurer who never says no to a thrill.",
    linkedIn: "#",
    image: aimeeGoemanImage,
  },
  {
    id: "13",
    name: "Kevin Goodwin",
    position: "SVP of Strategy & Growth",
    description:
      "Driving paid media with $1B+ in spend—strategic growth, data-driven impact, and a love for obscure Substacks.",
    linkedIn: "#",
    image: kevinGoodwinImage,
  },
  {
    id: "14",
    name: "Candice Gray",
    position: "VP Brand Commerce, Solutions",
    description:
      "Digital sales leader, problem solver, team builder—driving growth, lasting partnerships, and reviving plants.",
    linkedIn: "#",
    image: candiceGrayImage,
  },
  {
    id: "15",
    name: "Michael Goodwin",
    position: "VP, Strategic Operations & Corporate Development",
    description:
      "Strategic Ops leader driving growth, innovation and execution—minus the mustache these days.",
    linkedIn: "#",
    image: michaelGoodwinImage,
  },
  {
    id: "16",
    name: "Ashley Hill",
    position: "VP, Affiliate",
    description:
      "Affiliate marketing expert with a decade in retail and luxury sectors. Often found strategizing in sneakers.",
    linkedIn: "#",
    image: ashleyHillImage,
  },
  {
    id: "17",
    name: "Conor Skea",
    position: "VP, Growth",
    description:
      "Leading enterprise growth and sales strategy—formerly at VaynerX. Knicks fan & aspiring Italian speaker.",
    linkedIn: "#",
    image: conorSkeaImage,
  },
  {
    id: "18",
    name: "Steve Tazic",
    position: "VP, Technology & Affiliate Operations",
    description:
      "E-commerce leader building tools for impactful growth. Dad, coach, and aspiring woodworker.",
    linkedIn: "#",
    image: steveTazicImage,
  },
  {
    id: "19",
    name: "Sabeeka Dar",
    position: "Senior Director Strategic Partnerships, Services",
    description:
      "Driving growth, partnerships & digital wins—sneaker collector, storyteller, and chaos coordinator.",
    linkedIn: "#",
    image: sabeekaDarImage,
  },
  {
    id: "20",
    name: "Henry Prevette",
    position: "Senior Director, Partnerships",
    description:
      "Built impact.com's partner channel, now driving world-class partnerships—fueled by coffee, books, and miles.",
    linkedIn: "#",
    image: henryPrevetteImage,
  },
];
