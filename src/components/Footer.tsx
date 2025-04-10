import DottedTrianglePattern from "@/assets/images/dotted-triangle-pattern.svg?react";
import Partners from "./Partners";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import WFCLogoWhite from "@/assets/wfc-logo-white.svg?react";

const Footer = () => {
  const renderSocialIcons = () => {
    return (
      <div className="flex flex-row items-center space-x-8">
        <a href="https://www.facebook.com/womenforchangeSA" target="_blank" rel="noopener noreferrer">
          <div className=" bg-white rounded-full h-14 flex items-center justify-center">
            <FaFacebook className="h-14 w-auto text-[var(--color-primary)] -m-[1px]" />
          </div>
        </a>
        <a href="https://twitter.com/womenforchange5" target="_blank" rel="noopener noreferrer">
          <div className=" bg-[var(--color-primary)] h-14 w-14 rounded-full flex items-center justify-center">
            <RiTwitterXFill className="h-8 w-auto text-white" />
          </div>
        </a>
        <a href="https://www.tiktok.com/@womenforchange.sa" target="_blank" rel="noopener noreferrer">
          <div className=" bg-[var(--color-primary)] h-14 w-14 rounded-full flex items-center justify-center">
            <FaTiktok className="h-8 w-auto text-white" />
          </div>
        </a>
        <a href="https://www.instagram.com/womenforchangesa/" target="_blank" rel="noopener noreferrer">
          <div className=" bg-[var(--color-primary)] h-14 w-14 rounded-full flex items-center justify-center">
            <FaInstagram className="h-8 w-auto text-white" />
          </div>
        </a>
      </div>
    );
  };

  return (
    <>
      <DottedTrianglePattern className="w-full text-white fill-current" />
      <div className="flex flex-col bg-black pt-16 pb-20 -mt-[1vw] ">
        <Partners />
        <div className="flex lg:flex-row flex-col justify-between items-center space-y-10 px-20">
          {renderSocialIcons()}
          <WFCLogoWhite className="h-32 w-auto" />
        </div>
      </div>
    </>
  );
};

export default Footer;
