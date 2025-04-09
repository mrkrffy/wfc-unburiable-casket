/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 bead-one.glb -t -E s 
Author: Igor Denisov (https://sketchfab.com/Digor)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/bead-i1k11b2sk3n54-2ca86cd496414814b6b084f2168ba109
Title: Bead I1K11B2Sk3N54
*/

import * as THREE from "three";
import { JSX } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
    Object_3: THREE.Mesh;
  };
  materials: {
    Bs_55: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/bead-one.glb") as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-2.254, 1.409, 0.69]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Bs_55} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Bs_55} />
      </group>
    </group>
  );
}

useGLTF.preload("/models/bead-one.glb");
