import Navbar from "@/components/Navbar";
import NavMenu from "@/components/NavMenu";
import PrimaryButton from "@/components/PrimaryButton";

function MainNav() {
  return (
    <div className="flex items-center gap-xs">
      <div className="hidden md:flex">
        <Navbar />

        <PrimaryButton>Let&apos;s talk</PrimaryButton>
      </div>

      <NavMenu />
    </div>
  );
}

export default MainNav;
