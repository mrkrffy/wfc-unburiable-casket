import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CasketAndBeads from "./CasketAndBeads";
import UnburiableCasket from "@/assets/images/unburiable-casket.svg?react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Banner = () => {
  const renderBackground = () => {
    return (
      <div className="h-screen flex justify-center items-start pt-50">
        <UnburiableCasket className="lg:w-[60vw] w-[95vw]" />
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
