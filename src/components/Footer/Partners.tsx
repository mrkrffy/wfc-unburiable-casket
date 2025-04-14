import PartnersText from "@/assets/images/letters/partner.svg?react";
import edelmanLogo from "@/assets/images/partners/edelman.webp";
import enzoLogo from "@/assets/images/partners/enzo-wood-designs.png";
import imprintMediaLogo from "@/assets/images/partners/imprint-media.png";
import amaziSheTribe from "@/assets/images/partners/amazishetribe.png";
import randFuneralsLogo from "@/assets/images/partners/rand-funerals.png";
import bigBraveLogo from "@/assets/images/partners/bigbrave.png";

const Partners = () => {
  const renderPartnersTitle = () => {
    return (
      <div className="flex flex-row justify-center items-center lg:space-x-4 space-x-2">
        <PartnersText className="lg:h-10 h-5 w-auto" />
        <div className="lg:text-5xl text-2xl text-white">Organisations</div>
      </div>
    );
  };

  const renderPartnersLogos = () => {
    return (
      <div className="lg:mt-20 mt-15 grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-14  justify-items-center px-[10vw]">
        <div className="flex flex-col space-y-2 items-center">
          <p className="text-white text-center">Stage Sponsor:</p>
          <a href="https://amazishetribe.com/" target="_blank" rel="noopener noreferrer">
            <img src={amaziSheTribe} alt="Amazi SHEtribe" className="lg:h-18 h-16 w-auto" />
          </a>
        </div>
        <div className="flex flex-col space-y-2 items-center">
          <p className="text-white text-center">Casket:</p>
          <a href="https://enzowooddesign.co.za/" target="_blank" rel="noopener noreferrer">
            <img src={enzoLogo} alt="Enzo Wood Designs" className="lg:h-18 h-16 w-auto" />
          </a>
        </div>

        <div className="flex flex-col space-y-2 items-center">
          <p className="text-white text-center">Herse:</p>
          <a href="https://randfunerals.co.za/" target="_blank" rel="noopener noreferrer">
            <img src={randFuneralsLogo} alt="Rand Funerals" className="lg:h-18 h-16 w-auto" />
          </a>
        </div>

        <div className="flex flex-col space-y-2 items-center">
          <p className="text-white text-center">Creative and PR:</p>
          <a href="https://www.edelman.com/" target="_blank" rel="noopener noreferrer">
            <img src={edelmanLogo} alt="Edelman" className="lg:h-18 h-16 w-auto" />
          </a>
        </div>

        <div className="flex flex-col space-y-2 items-center">
          <p className="text-white text-center">Print:</p>
          <a href="https://imprintmedia.co.za/" target="_blank" rel="noopener noreferrer">
            <img src={imprintMediaLogo} alt="Imprint Media" className="lg:h-18 h-16 w-62 object-contain" />
          </a>
        </div>

        <div className="flex flex-col space-y-2 items-center">
          <p className="text-white text-center">Web:</p>
          <a href="https://www.bigbrave.digital/" target="_blank" rel="noopener noreferrer">
            <img src={bigBraveLogo} alt="Big Brave Digital" className="lg:h-18 h-16  w-62 object-contain" />
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="lg:pt-10 pb-25 w-screen flex flex-col items-center justify-center relative z-2">
      {renderPartnersTitle()}
      {renderPartnersLogos()}
    </div>
  );
};

export default Partners;
