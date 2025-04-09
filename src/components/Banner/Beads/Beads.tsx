import { useState, useMemo, useEffect } from "react";
import Bead from "./Bead";
import people from "@/data/People";

const minRadius = 3;
const maxRadius = 8;

function generateRandomPosition(): [number, number, number] {
  const radius = Math.random() * (maxRadius - minRadius) + minRadius;
  const theta = Math.acos(2 * Math.random() - 1);
  const phi = Math.random() * Math.PI * 2;

  const x = radius * Math.sin(theta) * Math.cos(phi);
  const y = radius * Math.sin(theta) * Math.sin(phi);
  const z = radius * Math.cos(theta);

  return [x, y, z];
}

interface BeadsProps {
  initialPopupDelay: number;
}

const Beads = ({ initialPopupDelay }: BeadsProps) => {
  const [showInitialPopup, setShowInitialPopup] = useState(false);

  const beadPositions = useMemo(() => {
    const positions: Array<[number, number, number]> = [];

    for (let i = 0; i < 56; i++) positions.push(generateRandomPosition());

    return positions;
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInitialPopup(true);
    }, initialPopupDelay * 1000);

    return () => clearTimeout(timer);
  }, [initialPopupDelay]);

  const randomUserIndex = useMemo(() => Math.floor(Math.random() * people.length), []);

  return (
    <>
      {beadPositions.map((position, index) => {
        return (
          <Bead
            key={index}
            position={position}
            person={people[index]}
            initialVisible={showInitialPopup && index === randomUserIndex}
          />
        );
      })}
    </>
  );
};

export default Beads;
