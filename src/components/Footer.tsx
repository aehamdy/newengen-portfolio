import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { navList } from "@/data/navList";
import { socials } from "@/data/socials";
import Link from "next/link";

function Footer() {
  return (
    <footer className="h-dvh main-section-py main-section-px bg-surface-primary text-content-light">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between">
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

          <div className="w-3/4 flex justify-between items-center gap-md">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email*"
              required
              className="w-full py-1 px-2 bg-surface-muted placeholder:text-content-light text-content-light rounded-md"
            />

            <Button isPrimary className="flex items-center gap-3">
              Subscribe <Icon name="arrow-right" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <h4 className="font-bold text-medium  text-accent-primary">
              AGENCY
            </h4>
            <ul className="space-y-1">
              {navList.map((item) => (
                <li
                  key={item.id}
                  className="text-medium hover:text-accent-primary duration-normal"
                >
                  <Link href={item.href} className="">
                    {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-medium  text-accent-primary">
              LETS SOCIAL
            </h4>
            <ul className="space-y-1">
              {socials.map((social) => (
                <li
                  key={social.id}
                  className="text-medium hover:text-accent-primary duration-normal"
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

        <div className="w-1/2 text-compact text-content-light">
          <h4 className="font-bold text-medium  text-accent-primary">
            GET IN TOUCH
          </h4>

          <div className="flex justify-between">
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
          </div>

          <div className="flex justify-between">
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
    </footer>
  );
}

export default Footer;
