import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { leadershipMembers } from "@/data/leadershipMembers";
import Link from "next/link";
import Icon from "@/components/Icon";

function CompanyLeaderships() {
  return (
    <section className="bg-surface-primary">
      <SectionHeading color="light" align="center" className="">
        <h2 className="text-5xlarge md:text-8xlarge leading-12 md:leading-22 uppercase">
          {siteConfig.name} <br /> Leadership
        </h2>
      </SectionHeading>

      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20 px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
        {leadershipMembers.map((member) => (
          <li
            key={member.id}
            className="group relative flex flex-col h-[378px] overflow-hidden"
          >
            <div className="relative w-full h-[310px] bg-surface-highlight rounded-lg">
              <div className="absolute w-full h-full start-0 top-0 flex justify-center items-center bg-surface-primary opacity-0 group-hover:opacity-100 z-0 group-hover:z-10 transition-all duration-normal">
                <p className="scale-0 group-hover:scale-100 w-3/4 text-accent-primary font-semibold text-center transition-all delay-200 duration-slowest">
                  {member.description}
                </p>
              </div>
              <Image
                src={member.image}
                alt={`${member.name}, ${member.position}`}
                fill
                className="w-full h-full object-contain"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
            </div>

            <div className="flex flex-col justify-end p-4">
              <div className="flex justify-between items-center">
                <h3 className="text-white font-bold text-lg">{member.name}</h3>

                <Link href={member.linkedIn} className="text-accent-secondary">
                  <Icon name="linkedin" />
                </Link>
              </div>

              <p className="text-gray-200 text-sm">{member.position}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CompanyLeaderships;
