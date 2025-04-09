import { useState, useRef, useEffect, JSX } from "react";
import { Html } from "@react-three/drei";
import { HiHeart } from "react-icons/hi2";
import { IoChatbubbleOutline, IoPaperPlaneOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "motion/react";
import { HiDotsVertical, HiOutlineBookmark } from "react-icons/hi";
import { Person } from "@/data/models/Person";
import BeadOne from "./BeadOne";

type BeadProps = {
  person: Person;
  initialVisible: boolean;
};

const Bead = ({ person, initialVisible, ...props }: BeadProps & JSX.IntrinsicElements["group"]) => {
  const markerRef = useRef(null);
  const popupRef = useRef(null);
  const holdTimeout = useRef<NodeJS.Timeout>(null);

  const [visible, setVisible] = useState(initialVisible || false);
  const [imageLoaded, setImageLoaded] = useState(false);

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
  }, []);

  const handleImageLoad = () => setImageLoaded(true);

  return (
    <group {...props} ref={markerRef}>
      <mesh
        onClick={(e) => {
          e.stopPropagation();
          setVisible(true);
        }}
      >
        <BeadOne scale={1} rotation={randomBeanRotation} />
        {visible && (
          <Html>
            <AnimatePresence>
              <motion.div
                ref={popupRef}
                className={`tooltip fixed inset-0 flex items-center justify-center z-50 space-y-0 `}
                initial={{ opacity: 0, scale: 0, y: -20 }}
                animate={{ opacity: 1, scale: 0.8, y: 0 }}
                exit={{ opacity: 0, scale: 0, y: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="min-w-[390px] rounded-[17px] overflow-hidden bg-black">
                  <div className="flex flex-row items-center justify-start space-x-4 bg-black p-6">
                    <div className="h-10 w-10 bg-[var(--color-primary)] rounded-full"></div>
                    <h2 className="text-white font-medium text-[18px] flex-grow">{person.name}</h2>
                    <HiDotsVertical className="h-6 w-auto text-white" />
                  </div>
                  <img
                    src={person.image}
                    loading="lazy"
                    className={`${
                      !imageLoaded && "animate-pulse"
                    } object-cover h-[420px] w-full bg-[var(--color-primary)]  `}
                    onLoad={handleImageLoad}
                  />
                  <div className="flex flex-row items-center justify-start space-x-2 bg-[var(--color-primary)] px-6 pt-6 pb-8 ">
                    <HiHeart className="h-8 w-8 text-white" />
                    <IoChatbubbleOutline className="h-8 w-8 text-white  scale-x-[-1]" />
                    <IoPaperPlaneOutline className="h-8 w-8 text-white" />
                    <HiOutlineBookmark className="h-8 w-8 text-white ml-auto" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </Html>
        )}
      </mesh>
    </group>
  );
};

export default Bead;
