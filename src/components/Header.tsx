import Logo from "@/components/Logo";
import MainNav from "@/components/MainNav";

function Header() {
  return (
    <header className="fixed top-0 start-0 end-0 flex justify-between items-center h-[53.27px] pt-lg main-section-px z-50">
      <Logo />

      <MainNav />
    </header>
  );
}

export default Header;
