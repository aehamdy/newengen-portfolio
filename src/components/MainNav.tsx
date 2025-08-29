import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Navbar from "@/components/Navbar";
import NavMenu from "@/components/NavMenu";

function MainNav() {
  return (
    <div className="flex items-center">
      <div className="hidden md:flex md:gap-xs">
        <Navbar />

        <Button isPrimary>
          <div className="">Let&apos;s talk</div>

          <Icon
            name="arrow-right"
            className="group-hover:translate-x-1 transition-all"
          />
        </Button>
      </div>

      <NavMenu />
    </div>
  );
}

export default MainNav;
