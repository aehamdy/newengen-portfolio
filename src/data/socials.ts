import { endpoints } from "@/lib/endpoints";

export type socialType = {
  id: number;
  title: string;
  href: string;
};

export const socials = [
  {
    id: 1,
    title: "LinkedIn",
    href: endpoints.socials.linkedIn,
  },
  {
    id: 2,
    title: "Facebook",
    href: endpoints.socials.facebook,
  },
  {
    id: 3,
    title: "Instagram",
    href: endpoints.socials.instagram,
  },
];
