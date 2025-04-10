import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CasketAndBeads from "./CasketAndBeads";
import UnburiableCasket from "@/assets/images/unburiable-casket.svg?react";
import ModelLoader from "./ModelLoader";

const Banner = () => {
  const renderBackground = () => {
    return (
      <div className="h-screen flex justify-center items-start pt-50">
        <UnburiableCasket className="xl:w-[60vw] lg:w-[80vw] w-[95vw]" />
      </div>
    );
  };

  const renderCanvas = () => {
    return (
      <Canvas camera={{ position: [0, 0, 10] }} className="absolute inset-0 z-99 ">
        <ambientLight intensity={3} />
        <Suspense fallback={<ModelLoader />}>
          <CasketAndBeads scale={0.8} position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    );
  };

  return (
    <div>
      {renderBackground()}
      <div className="xl:h-[140vh] h-[100vh] w-screen absolute inset-0 z-1">{renderCanvas()}</div>
    </div>
  );
};

export default Banner;
