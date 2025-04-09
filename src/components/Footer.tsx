import DottedTrianglePattern from "@/assets/images/dotted-triangle-pattern.svg?react";
import Partners from "./Partners";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import WFCLogoWhite from "@/assets/wfc-logo-white.svg?react";

const Footer = () => {
  const renderSocialIcons = () => {
    return (
      <div className="flex flex-row space-x-8">
        <div className=" bg-white rounded-full max-h-14 flex items-center justify-center">
          <FaFacebook className="h-14 w-auto text-[var(--color-primary)] -m-0.5" />
        </div>
        <div className=" bg-[var(--color-primary)] max-h-14 w-14 rounded-full flex items-center justify-center">
          <RiTwitterXFill className="h-8 w-auto text-white" />
        </div>
        <div className=" bg-[var(--color-primary)] max-h-14 w-14 rounded-full flex items-center justify-center">
          <FaTiktok className="h-8 w-auto text-white" />
        </div>
        <div className=" bg-[var(--color-primary)] max-h-14 w-14 rounded-full flex items-center justify-center">
          <FaInstagram className="h-8 w-auto text-white" />
        </div>
      </div>
    );
  };

  return (
    <>
      <DottedTrianglePattern className="w-full" />
      <div className="flex flex-col bg-black pt-16 pb-20 lg:px-20 -mt-5 ">
        <Partners />
        <div className="flex lg:flex-row flex-col justify-between items-center space-y-10">
          {renderSocialIcons()}
          <WFCLogoWhite className="h-32 w-auto" />
        </div>
      </div>
    </>
  );
};

export default Footer;
