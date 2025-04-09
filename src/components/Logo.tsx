import WFCLogoWhite from "@/assets/wfc-logo-white.svg?react";

const Logo = () => {
  return (
    <nav className="flex justify-center lg:py-12 py-8 absolute top-0 w-full z-50">
      <WFCLogoWhite className="lg:h-24 h-14 w-auto" />
    </nav>
  );
};

export default Logo;
