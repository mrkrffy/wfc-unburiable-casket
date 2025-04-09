import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CasketAndBeads from "./CasketAndBeads";
import { U, N, B, R, I, A, L, E, C, S, K, T } from "./Letter";
import UnburyTheTruth from "@/assets/images/unbury-the-truth.svg?react";

const Banner = () => {
  const renderBackground = () => {
    const letterStyle = "h-36 text-red-500";

    return (
      <div className="flex flex-col items-center pt-50 space-y-100">
        <div>
          <div className="flex flex-row space-x-6">
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
          <div className="flex flex-row items-center space-x-6 mt-8">
            <C className={letterStyle} />
            <A className={letterStyle} />
            <S className={letterStyle} />
            <K className={letterStyle} />
            <E className={letterStyle} />
            <T className={letterStyle} />
          </div>
        </div>
        <UnburyTheTruth className="w-[60vw]" />
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
      <div className="h-[1122px] w-screen absolute inset-0">{renderCanvas()}</div>
    </>
  );
};

export default Banner;
