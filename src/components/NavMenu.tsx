"use client";

import Icon from "@/components/Icon";
import NavItem from "@/components/NavItem";
import { navList } from "@/data/navList";
import { useState } from "react";

function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex md:hidden">
      <button
        type="button"
        onClick={handleMenuClick}
        className="absolute z-[45] end-2 top-1/2 -translate-y-1/10 p-xs bg-accent-secondary rounded-sm cursor-pointer"
      >
        {<Icon name={`${isMenuOpen ? "close" : "menu"}`} />}
      </button>

      {isMenuOpen && (
        <ul className="absolute w-full h-screen top-0 start-0 pt-4xl bg-surface-primary z-40">
          {navList.map((item) => (
            <NavItem key={item.id} navItem={item} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default NavMenu;
