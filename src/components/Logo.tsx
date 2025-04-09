import WFCLogo from "@/assets/wfc-logo.svg?react";

const Logo = () => {
  return (
    <nav className="flex justify-center lg:py-12 py-8 absolute top-0 w-full z-50">
      <WFCLogo className="h-24 w-auto" />
    </nav>
  );
};

export default Logo;
