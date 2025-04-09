import WFCLogo from "@/assets/wfc-logo.svg?react";

const Logo = () => {
  return (
    <nav className="flex justify-center lg:py-12 py-8 absolute top-0 w-full z-50">
      <WFCLogo className="lg:h-24 h-14 w-auto" />
    </nav>
  );
};

export default Logo;
