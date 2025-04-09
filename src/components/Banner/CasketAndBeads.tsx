/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 casket.glb -t -E s 
Author: arloopa (https://sketchfab.com/arloopa)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/barbie-coffin-e8c112066f5f4c3a9bc62564411dc4f1
Title: Barbie Coffin
*/

import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Casket from "./Casket";
import Beads from "./Beads/Beads";
import useScreenSize from "@/utils/useScreenSize";
import { JSX } from "react";

const animationMaxDuration = 2;

const CasketAndBeads = (props: JSX.IntrinsicElements["group"]) => {
  const { screenSizeCategory } = useScreenSize();

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();

    if (elapsedTime >= animationMaxDuration) return;

    const calculatedTime = 1 - elapsedTime / 2;

    const x = Math.sin(calculatedTime) * 10;
    const y = Math.sin(calculatedTime * Math.PI) * 4 + 4;
    const z = Math.cos((calculatedTime * Math.PI) / 3) * 10;

    state.camera.position.set(x, y, z);
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group {...props} dispose={null}>
      <Casket
        scale={screenSizeCategory == "small" ? 50 : 70}
        position={[0, screenSizeCategory == "small" ? -3 : -3, 0]}
        animationMaxDuration={animationMaxDuration}
      />
      <Beads initialPopupDelay={animationMaxDuration} />
      <OrbitControls enableZoom={false} enablePan={false} />
    </group>
  );
};

export default CasketAndBeads;
