import WFCLogoWhite from "@/assets/wfc-logo-white.svg?react";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="max-w-[75w] flex flex-row justify-between bg-black py-16 px-24">
      <div className="flex flex-col space-y-4">
        <WFCLogoWhite className="h-24 w-auto mx-auto" />
        <div className="text-white">Developed with love by BIGBrave</div>
      </div>
      <div className="flex flex-col items-end space-y-4">
        <div className="flex flex-row space-x-12">
          <div className="h-16 w-16 rounded-2xl flex justify-center items-center bg-[var(--color-icon-background)]">
            <FiInstagram className="h-6 w-auto text-[var(--color-icon-foreground)]" />
          </div>
          <div className="h-16 w-16 rounded-2xl flex justify-center items-center bg-[var(--color-icon-background)]">
            <FiInstagram className="h-6 w-auto text-[var(--color-icon-foreground)]" />
          </div>
          <div className="h-16 w-16 rounded-2xl flex justify-center items-center bg-[var(--color-icon-background)]">
            <FiInstagram className="h-6 w-auto text-[var(--color-icon-foreground)]" />
          </div>
          <div className="h-16 w-16 rounded-2xl flex justify-center items-center bg-[var(--color-icon-background)]">
            <FiInstagram className="h-6 w-auto text-[var(--color-icon-foreground)]" />
          </div>
        </div>
        <div className="flex flex-row space-x-4 text-white">
          <div>Privacy Policy</div>
          <div>Terms & Conditions</div>
          <div>Cookie Policy</div>
          <div>Contact</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
