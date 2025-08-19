import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import NavMenu from "@/components/NavMenu";

function MainNav() {
  return (
    <div className="flex items-center gap-xs">
      <div className="hidden md:flex">
        <Navbar />

        <Button isPrimary>Let&apos;s talk</Button>
      </div>

      <NavMenu />
    </div>
  );
}

export default MainNav;
