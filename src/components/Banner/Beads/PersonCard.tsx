import { Person } from "@/data/models/Person";
import useScreenSize from "@/utils/useScreenSize";
import { Html } from "@react-three/drei";
import { AnimatePresence, motion } from "motion/react";
import { JSX, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import DottedTrianglePattern from "@/assets/images/dotted-triangle-pattern.svg?react";

type PersonCardProps = {
  person: Person;
};

const PersonCard = ({ person }: PersonCardProps & JSX.IntrinsicElements["group"]) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const { screenSizeCategory } = useScreenSize();

  const handleImageLoad = () => setImageLoaded(true);

  const handleFlip = () => setFlipped(!flipped);

  return (
    <Html>
      <AnimatePresence>
        <motion.div
          className="tooltip fixed inset-0 flex items-center justify-center z-50 space-y-0"
          initial={{ opacity: 0, scale: 0, y: -20 }}
          animate={{ opacity: 1, scale: screenSizeCategory == "small" ? 0.7 : 0.8, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: -20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <div className="min-w-[390px] h-[600px] rounded-[17px] overflow-hidden shadow-sm  relative">
            <motion.div
              className="flip-container w-full h-full"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className="flip-card-front w-full h-full absolute top-0 left-0 backface-hidden bg-black">
                <div className="flex flex-row items-center justify-start space-x-4 bg-black px-6 h-[80px]">
                  <div className="h-8 w-10 relative bg-[var(--color-primary)] rounded-full"></div>
                  <h2 className="text-white font-medium text-[18px] flex-grow">{person.name}</h2>
                  <HiDotsVertical className="h-6 w-auto text-white" />
                </div>
                <div className="bg-white overflow-hidden">
                  <DottedTrianglePattern className="w-full  scale-150 transform origin-center text-[var(--color-primary)] fill-current" />
                </div>
                <div className="relative">
                  <img
                    src={import.meta.env.BASE_URL + person.image}
                    loading="lazy"
                    className={`${
                      !imageLoaded && "animate-pulse"
                    } object-cover h-[400px] w-full bg-[var(--color-primary)]`}
                    onLoad={handleImageLoad}
                  />
                </div>
                <div className="bg-white overflow-hidden">
                  <DottedTrianglePattern className="w-full  scale-150 transform origin-center text-[var(--color-primary)] fill-current" />
                </div>
                <div className="flex items-center justify-center bg-[var(--color-primary)] py-4 px-6">
                  <button
                    className="px-6 py-2 flex space-x-3 justify-center items-center text-white font-bold text-xl tracking-wide rounded-lg"
                    onClick={handleFlip}
                  >
                    <span>READ HER STORY</span>
                    <div className="h-8 w-8 flex justify-center items-center rounded-xl bg-white shadow-lg">
                      <FaArrowRightLong className="h-4 w-auto text-[var(--color-primary)]" />
                    </div>
                  </button>
                </div>
              </div>

              <div className="flip-card-back w-full shadow-lg h-full absolute top-0 left-0 backface-hidden bg-black text-white">
                <div className="flex flex-row items-center justify-start space-x-4 bg-black p-6">
                  <div className=" h-8 w-10 bg-[var(--color-primary)] rounded-full"></div>
                  <h2 className="text-white font-medium text-[18px] flex-grow">{person.name}</h2>
                  <HiDotsVertical className="h-6 w-auto text-white" />
                </div>
                <div className="bg-white overflow-hidden">
                  <DottedTrianglePattern className="w-full  scale-150 transform origin-center text-[var(--color-primary)] fill-current" />
                </div>
                <div className="text-white h-[400px] p-6 text-xl whitespace-pre-line overflow-y-auto scrollbar-thin scrollbar-thumb-[var(--color-primary)] scrollbar-track-transparent">
                  {person.story}
                </div>
                <div className="bg-white overflow-hidden">
                  <DottedTrianglePattern className="w-full  scale-150 transform origin-center text-[var(--color-primary)] fill-current" />
                </div>
                <div className="flex items-center justify-center bg-black py-2">
                  <button
                    className="px-6 py-4 text-white font-bold text-lg tracking-widest rounded-lg"
                    onClick={handleFlip}
                  >
                    #UnburyTheTruth
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </Html>
  );
};

export default PersonCard;
