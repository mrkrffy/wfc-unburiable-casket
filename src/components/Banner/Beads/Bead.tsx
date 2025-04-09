import { useState, useRef, useEffect, JSX } from "react";
import { Person } from "@/data/models/Person";
import BeadOne from "./BeadOne";
import "./Bead.css";
import PersonCard from "./PersonCard";

type BeadProps = {
  person: Person;
  initialVisible: boolean;
};

const Bead = ({ person, initialVisible, ...props }: BeadProps & JSX.IntrinsicElements["group"]) => {
  const markerRef = useRef(null);
  const popupRef = useRef(null);
  const holdTimeout = useRef<NodeJS.Timeout>(null);

  const [visible, setVisible] = useState(initialVisible || false);
  const randomBeanRotation = useRef<[number, number, number]>([
    Math.random() * Math.PI * 2,
    Math.random() * Math.PI * 2,
    Math.random() * Math.PI * 2,
  ]).current;

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
  }, []); // Toggle flip

  return (
    <group {...props} ref={markerRef}>
      <mesh
        onClick={(e) => {
          e.stopPropagation();
          setVisible(true);
        }}
      >
        <BeadOne scale={1} rotation={randomBeanRotation} />
        {visible && <PersonCard ref={popupRef} person={person} />}
      </mesh>
    </group>
  );
};

export default Bead;
