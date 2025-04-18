/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 casket.glb -t -E 
*/

import * as THREE from "three";
import { JSX } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh;
    Plane: THREE.Mesh;
    Plane001: THREE.Mesh;
  };
  materials: {
    Beadwork: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/casket.glb`) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null} rotation={[0, -1.5, 0]}>
      <mesh geometry={nodes.Cube.geometry} material={nodes.Cube.material} />
      <mesh geometry={nodes.Plane.geometry} material={nodes.Plane.material} position={[0, 0.52, 0]} />
      <mesh geometry={nodes.Plane001.geometry} material={materials.Beadwork} position={[0, 0.52, 0]} />
    </group>
  );
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/casket.glb`);
