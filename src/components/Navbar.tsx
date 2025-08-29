import NavItem from "@/components/NavItem";
import { navList } from "@/data/navList";

function Navbar() {
  return (
    <nav className="hidden md:flex bg-surface-primary px-sm py-xs rounded-md">
      <ul className="flex items-center gap-md">
        {navList.map((item) => (
          <NavItem key={item.id} navItem={item} />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
