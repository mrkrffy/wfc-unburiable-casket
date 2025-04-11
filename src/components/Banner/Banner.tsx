import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CasketAndBeads from "./CasketAndBeads";
import UnburiableCasket from "@/assets/images/unburiable-casket.svg?react";
import ModelLoader from "./ModelLoader";
import useScreenSize from "@/utils/useScreenSize";
import RotateIcon from "@/assets/icons/3d-rotate.svg?react";

const Banner = () => {
  const { screenSizeCategory } = useScreenSize();

  const renderBackground = () => {
    return (
      <div className="xl:h-[110vh] lg:h-[65vh] h-[80vh] flex flex-col justify-start items-center pt-50">
        <div className="flex flex-col space-y-4">
          <UnburiableCasket className="xl:w-[60vw] lg:w-[80vw] w-[95vw]" />
          <div className="self-end text-white xl:text-sm text-xs justify-end">
            <RotateIcon className="h-6 inline text-white" /> Rotate the casket
            and click on the beads to reveal their stories
          </div>
        </div>
      </div>
    );
  };

  const renderCanvas = () => {
    return (
      <Canvas
        camera={{ position: [0, 0, 10] }}
        className="absolute inset-0 z-99 "
      >
        <ambientLight intensity={3} />
        <Suspense fallback={<ModelLoader />}>
          <CasketAndBeads
            scale={screenSizeCategory == "medium" ? 0.7 : 0.8}
            position={[0, screenSizeCategory == "small" ? -1 : -1.5, 0]}
          />
        </Suspense>
      </Canvas>
    );
  };

  return (
    <div>
      {renderBackground()}
      <div className="xl:h-[110vh] lg:h-[65vh] h-[80vh] w-screen absolute inset-0 z-1">
        {renderCanvas()}
      </div>
    </div>
  );
};

export default Banner;
