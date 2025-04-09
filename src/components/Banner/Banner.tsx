import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CasketAndBeads from "./CasketAndBeads";
import { U, N, B, R, I, A, L, E, C, S, K, T } from "./Letter";
import UnburyTheTruth from "@/assets/images/unbury-the-truth.svg?react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Banner = () => {
  const renderBackground = () => {
    const letterStyle = "lg:h-36 h-12";

    return (
      <div className="flex flex-col items-center pt-50 lg:space-y-100 space-y-80">
        <div>
          <div className="flex flex-row lg:space-x-6 space-x-2">
            <U className={letterStyle} />
            <N className={letterStyle} />
            <B className={letterStyle} />
            <U className={letterStyle} />
            <R className={letterStyle} />
            <I className={letterStyle} />
            <A className={letterStyle} />
            <B className={letterStyle} />
            <L className={letterStyle} />
            <E className={letterStyle} />
          </div>
          <div className="flex flex-row items-center lg:space-x-6 space-x-2 mt-8">
            <C className={letterStyle} />
            <A className={letterStyle} />
            <S className={letterStyle} />
            <K className={letterStyle} />
            <E className={letterStyle} />
            <T className={letterStyle} />
          </div>
        </div>
        <UnburyTheTruth className="lg:w-[60vw] w-[95vw]" />
      </div>
    );
  };

  const renderCanvas = () => {
    return (
      <Canvas camera={{ position: [0, 0, 10] }} className="absolute inset-0 z-99 ">
        <ambientLight intensity={3} />
        <Suspense fallback={null}>
          <CasketAndBeads />
        </Suspense>
      </Canvas>
    );
  };

  return (
    <>
      {renderBackground()}
      <div className="lg:h-[1122px] h-[80vh] w-screen absolute inset-0">{renderCanvas()}</div>

      <div
        className="lg:hidden z-50 absolute bottom-2 right-2 mx-auto w-16 h-16 flex justify-center items-center text-white text-center rounded-full bg-[var(--color-icon-background)] bg-opacity-70 cursor-pointer pointer-events-auto"
        onClick={() => document.getElementById("campaign-message-section")?.scrollIntoView({ behavior: "smooth" })}
      >
        <MdKeyboardDoubleArrowDown className="text-[var(--color-icon-foreground)] h-6 w-auto" />
      </div>
    </>
  );
};

export default Banner;
