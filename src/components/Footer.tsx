import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { navList } from "@/data/navList";
import { socials } from "@/data/socials";
import Link from "next/link";
import { legalLinks } from "@/data/legalLinks";

function Footer() {
  return (
    <footer className="flex flex-col gap-y-xl h-[85dvh] main-section-py main-section-px bg-surface-primary text-content-light border-t border-accent-primary/40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl justify-between">
        <div className="flex flex-col items-start gap-md">
          <p className="w-full md:w-3/4">
            We have relentless desire to challenge the status quo, and deep
            digital expertise across hundreds of brands and verticals.
          </p>

          <Link
            href=""
            className="flex items-center gap-3 p-xs font-extrabold text-xlarge bg-accent-secondary hover:bg-accent-primary text-content-dark rounded-md transition-all duration-slow"
          >
            Let&apos;s talk <Icon name="arrow-right" />
          </Link>
        </div>

        <div className="space-y-md">
          <p className="w-full md:w-9/10">
            Get the latest from New Engen—research-driven strategies,
            data-backed trends, and thought leadership designed to fuel your
            brand’s growth.
          </p>

          <div className="w-full md:w-3/4 flex justify-between items-center gap-md">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email*"
              required
              className="w-full py-2 md:py-1 px-3 md:px-2 bg-surface-muted placeholder:text-content-light text-content-light rounded-md"
            />

            <Button isPrimary className="flex items-center gap-3">
              Subscribe <Icon name="arrow-right" />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-md text-xlarge md:text-medium">
        <div className="grid grid-cols-2 items-start">
          <ul className="flex flex-col gap-2">
            <h4 className="font-bold text-accent-primary">AGENCY</h4>
            {navList.map((item) => (
              <li
                key={item.id}
                className="w-fit hover:text-accent-primary duration-normal"
              >
                <Link href={item.href} className="">
                  {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-accent-primary">LETS SOCIAL</h4>

            <ul className="flex flex-col gap-2">
              {socials.map((social) => (
                <li
                  key={social.id}
                  className="hover:text-accent-primary duration-normal"
                >
                  <Link href={social.href} className="">
                    {social.title.charAt(0).toUpperCase() +
                      social.title.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-content-light">
          <h4 className="font-bold text-accent-primary">GET IN TOUCH</h4>

          <div className="grid grid-cols-2 gap-y-sm">
            <div className="">
              <div className="text-surface-muted">Seattle HQ</div>
              <address>
                1300 N Northlake Way, <br /> Seattle, WA 98103
              </address>
            </div>

            <div className="">
              <div className="text-surface-muted">
                Northwest Arkansas Office
              </div>
              <address>
                3301 S Market St <br />
                Suite 112 <br /> Rogers, AR 72758
              </address>
            </div>

            <div className="">
              <div className="text-surface-muted">Brooklyn Office & Studio</div>
              <address>20 Jay St#432</address>
            </div>

            <div className="">
              <div className="text-surface-muted">Manhattan Beach Studio</div>
              <address>
                324 21st St, <br />
                Manhattan Beach <br /> CA 90266
              </address>
            </div>
          </div>
        </div>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-4 gap-xs md:gap-sm text-xlarge md:text-medium">
        {legalLinks.map((link) => (
          <li
            key={link.id}
            className="w-fit text-surface-muted hover:text-accent-primary duration-normal"
          >
            <Link href={link.href} className="block">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
