import { endpoints } from "@/lib/endpoints";

type LegalLink = {
  id: number;
  label: string;
  href: string;
};

export const legalLinks: LegalLink[] = [
  { id: 1, label: "Privacy Policy", href: endpoints.legal.privacyPolicy },
  { id: 2, label: "Cookie Policy", href: endpoints.legal.cookiePolicy },
  {
    id: 3,
    label: "Terms and Conditions",
    href: endpoints.legal.termsAndConditions,
  },
];
