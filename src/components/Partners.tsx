import PartnersText from "@/assets/images/letters/partner.svg?react";
import wlmLogo from "@/assets/images/partners/WLM-Logo.png";
import rapeCrisisLogo from "@/assets/images/partners/Rape-Crisis-Logo.png";
import theSafeHouseLogo from "@/assets/images/partners/The-Safe-House-logo.png";
import tearsLogo from "@/assets/images/partners/TEARS-LOGO.png";

const Partners = () => {
  const renderPartnersTitle = () => {
    return (
      <div className="flex flex-row justify-center items-center space-x-5">
        <PartnersText className="lg:h-10 h-5 w-auto" />
        <div className="lg:text-5xl text-2xl text-white bg-[var(--color-text-background)] lg:pb-2.5 pb-1">
          Organisations
        </div>
      </div>
    );
  };

  const renderPartnersLogos = () => {
    return (
      <div className="mt-20 grid lg:grid-cols-4 grid-cols-1 gap-8 justify-items-center">
        <img src={wlmLogo} alt="Women Lead Movement" className="lg:h-24 h-16 w-auto" />
        <img src={rapeCrisisLogo} alt="Rape Crisis" className="lg:h-24 h-16 w-auto" />
        <img src={theSafeHouseLogo} alt="The Safe House" className="lg:h-24 h-16 w-auto" />
        <img src={tearsLogo} alt="Tears" className="lg:h-24 h-16 w-auto" />
      </div>
    );
  };

  return (
    <div className="pt-10 pb-25 w-screen flex flex-col items-center justify-center relative z-2">
      {renderPartnersTitle()}
      {renderPartnersLogos()}
    </div>
  );
};

export default Partners;
