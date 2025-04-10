/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 casket.glb -t -E s 
*/

import * as THREE from "three";
import { JSX, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type ActionName = "Plane.002Action";

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

type GLTFResult = GLTF & {
  animations: GLTFAction[];
  scene: THREE.Group<THREE.Object3DEventMap>;
};

const Casket = ({ ...props }: JSX.IntrinsicElements["group"]) => {
  const { animations, scene } = useGLTF(`${import.meta.env.BASE_URL}models/casket.glb`) as GLTFResult;
  const { actions } = useAnimations(animations, scene);
  const action = actions["Plane.002Action"];
  const actionDuration = action?.getClip().duration ?? 0;

  useEffect(() => {
    if (!action) return;

    action.play();
    action.paused = true;
  }, [action]);

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();

    if (elapsedTime >= actionDuration) return;
    if (action) action.time = elapsedTime * 1.4;
  });

  return <primitive {...props} object={scene} />;
};

useGLTF.preload(`${import.meta.env.BASE_URL}models/casket.glb`);

export default Casket;
