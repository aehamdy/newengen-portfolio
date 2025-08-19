import type { NavItem } from "@/data/navList";
import Link from "next/link";

function NavItem({ navItem }: { navItem: NavItem }) {
  return (
    <li className="group relative w-full md:w-fit py-[15px] px-[20px] md:p-0 font-bold md:font-normal text-content-light text-2xlarge md:text-compact border-b-[0.5px] first:border-t-[1px] md:border-none border-white/20">
      <Link href={navItem.href} className="">
        {navItem.label.charAt(0).toUpperCase() + navItem.label.slice(1)}
      </Link>

      <span
        className="hidden md:flex absolute left-0 -bottom-0.5 h-[1px] w-full bg-current 
            scale-x-0 transition-transform duration-300 ease-in-out
            group-hover:scale-x-100 
            [transform-origin:0%] group-hover:[transform-origin:100%]"
      />
    </li>
  );
}

export default NavItem;
