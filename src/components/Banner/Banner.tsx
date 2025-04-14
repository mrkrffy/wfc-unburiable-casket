import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CasketAndBeads from "./CasketAndBeads";
import ModelLoader from "./ModelLoader";
import useScreenSize from "@/utils/useScreenSize";
import RotateIcon from "@/assets/icons/3d-rotate.svg?react";
import theUnburiedCasketAsset from "@/assets/images/the-unburied-casket.png"

const Banner = () => {
  const { screenSizeCategory } = useScreenSize();

  const renderBackground = () => {
    return (
      <div className="xl:h-[120vh] lg:h-[60vh] h-[70vh] flex flex-col justify-between items-center pt-50">
        <img src={theUnburiedCasketAsset} className="xl:w-[60vw] lg:w-[80vw] w-[95vw]" />
        <div className="text-white xl:text-sm text-xs mb-10">
          <RotateIcon className="h-6 inline text-white" /> Rotate the casket and
          click on the beads to reveal their stories
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
      <div className="xl:h-[120vh] lg:h-[65vh] h-[80vh] w-screen absolute inset-0 z-1">
        {renderCanvas()}
      </div>
    </div>
  );
};

export default Banner;
