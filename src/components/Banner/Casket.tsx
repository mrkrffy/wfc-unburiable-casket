import * as THREE from "three";
import { JSX, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { GLTF } from "three-stdlib";

type ActionName = "Take 001";

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

type GLTFResult = GLTF & {
  animations: GLTFAction[];
  scene: THREE.Group<THREE.Object3DEventMap>;
};

type CasketProps = {
  animationMaxDuration: number;
};

const Casket = ({ animationMaxDuration, ...props }: CasketProps & JSX.IntrinsicElements["group"]) => {
  const { animations, scene } = useGLTF("/models/casket.glb") as GLTFResult;
  const { actions } = useAnimations(animations, scene);
  const action = actions["Take 001"];

  useEffect(() => {
    if (!action) return;

    action.play();
    action.setDuration(animationMaxDuration);
    action.paused = true;
  }, [action, animationMaxDuration]);

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();

    if (elapsedTime >= animationMaxDuration) return;
    if (action) action.time = elapsedTime;
  });

  return <primitive {...props} object={scene} />;
};

useGLTF.preload("/models/casket.glb");

export default Casket;
