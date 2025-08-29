import { endpoints } from "@/lib/endpoints";

export type NavItem = {
  id: number;
  label: string;
  href: string;
};

export const navList: NavItem[] = [
  {
    id: 1,
    label: "work",
    href: endpoints.nav.work,
  },
  {
    id: 2,
    label: "services",
    href: endpoints.nav.services,
  },
  {
    id: 3,
    label: "solutions",
    href: endpoints.nav.solutions,
  },
  {
    id: 4,
    label: "insights",
    href: endpoints.nav.insights,
  },
  {
    id: 5,
    label: "technology",
    href: endpoints.nav.technology,
  },
  {
    id: 6,
    label: "company",
    href: endpoints.nav.company,
  },
];
