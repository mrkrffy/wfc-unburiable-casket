import { useState, useRef, useEffect, JSX } from "react";
import { Person } from "@/data/models/Person";
import * as THREE from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import PersonCard from "./PersonCard";
import "./Bead.css";

type BeadProps = {
  person: Person;
  initialVisible: boolean;
};

const Bead = ({ person, initialVisible, ...props }: BeadProps & JSX.IntrinsicElements["group"]) => {
  const markerRef = useRef(null);
  const popupRef = useRef(null);
  const holdTimeout = useRef<NodeJS.Timeout>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  const [visible, setVisible] = useState(initialVisible || false);
  const beadTexture = useLoader(THREE.TextureLoader, `${import.meta.env.BASE_URL}models/bead.png`);

  useEffect(() => {
    setVisible(initialVisible);
  }, [initialVisible]);

  useEffect(() => {
    const handlePointerDown = () => {
      holdTimeout.current = setTimeout(() => {
        holdTimeout.current = null;
      }, 500);
    };

    const handlePointerUp = (event: PointerEvent) => {
      if (holdTimeout.current) {
        clearTimeout(holdTimeout.current);
        holdTimeout.current = null;

        if ((event.target as Element)?.closest(".tooltip")) return;

        setVisible(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("pointerup", handlePointerUp);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  useFrame(({ camera }) => {
    if (meshRef.current) meshRef.current.lookAt(camera.position);
  });

  return (
    <group {...props} ref={markerRef}>
      <mesh
        ref={meshRef}
        onClick={(e) => {
          e.stopPropagation();
          setVisible(true);
        }}
      >
        <planeGeometry args={[0.6, 0.6]} />
        <meshBasicMaterial map={beadTexture} transparent={true} opacity={1} />
        {visible && <PersonCard ref={popupRef} person={person} />}
      </mesh>
    </group>
  );
};

export default Bead;
