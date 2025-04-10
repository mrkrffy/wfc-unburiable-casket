import people from "@/data/People";
import { FaArrowLeftLong, FaArrowRightLong, FaHeart, FaRegBookmark } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DottedTrianglePattern from "@/assets/images/dotted-triangle-pattern.svg?react";
import { useState } from "react";
import useScreenSize from "@/utils/useScreenSize";
import { Person } from "@/data/models/Person";

// @ts-expect-error swiper css module
import "swiper/css/bundle";
import SwiperButton from "./SwiperButton";

const StoriesSlider = () => {
  const initialStoryIndex = Math.round(people.length / 2);
  const [slideProgress, setSlideProgress] = useState(initialStoryIndex);
  const { screenSizeCategory } = useScreenSize();

  const handleSlideProgress = (progress: number) => {
    setSlideProgress(progress);
  };

  const calculateOpacity = (index: number, activeIndex: number) => {
    const distance = Math.abs(activeIndex - index);
    let opacity = 1 - distance * 0.5;
    if (opacity < 0) opacity = 0;

    return opacity;
  };

  const renderStory = ({ person, index, activeIndex }: { person: Person; index: number; activeIndex: number }) => {
    const opacity = calculateOpacity(index, activeIndex);

    return (
      <div
        className="flex lg:flex-row flex-col xl:space-y-0 lg:space-x-4 space-y-4 bg-black px-4 py-6 xl:mx-0 lg:mx-[15vw] mx-[5vw]  rounded-2xl lg:h-[380px] transition-opacity duration-300 ease-in-out "
        style={{ opacity }}
      >
        <div className="flex-2/5 flex flex-col">
          <div className="bg-white overflow-hidden">
            <DottedTrianglePattern className="w-full scale-150 transform origin-center text-[var(--color-primary)] fill-current" />
          </div>
          <img
            src={import.meta.env.BASE_URL + person.image}
            alt={person.name}
            className="h-full object-cover object-center"
          />
          <div className="bg-white overflow-hidden">
            <DottedTrianglePattern className="w-full  scale-150 transform origin-center text-[var(--color-primary)] fill-current" />
          </div>
        </div>
        <div className="text-white flex-3/5 flex flex-col">
          <div className="flex flex-row items-center justify-start space-x-4 bg-black py-4">
            <div className="h-10 w-10 bg-[var(--color-primary)] rounded-full"></div>
            <h2 className="lg:text-xl text-normal text-white text-center bg-[var(--color-text-background)]">
              {person.name}
            </h2>
            <div className="flex-grow" />
            <HiDotsVertical className="h-6 w-auto text-white" />
          </div>

          <div className="py-4 border-y border-y-gray-800 flex-grow">
            <p className="text-white leading-6">
              <span className="bg-[var(--color-text-background)] [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
                {person.story}
              </span>
            </p>
          </div>

          <div className="flex flex-row justify-between pt-4">
            <div className="flex flex-row space-x-4">
              <FaHeart className="h-6 w-auto text-white" />
              <HiOutlineChatBubbleOvalLeft className="h-6 w-auto text-white transform -scale-x-100" />
              <IoPaperPlaneOutline className="h-6 w-auto text-white" />
            </div>

            <FaRegBookmark className="h-6 w-auto text-white" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <Swiper
      modules={[EffectCoverflow]}
      effect="coverflow"
      coverflowEffect={{
        rotate: 0,
        depth: 500,
        stretch: screenSizeCategory === "small" || screenSizeCategory === "large" ? 100 : 300,
        slideShadows: false,
      }}
      onSlideChange={({ activeIndex }) => handleSlideProgress(activeIndex)}
      slidesPerView={screenSizeCategory == "small" || screenSizeCategory == "medium" ? 1 : 3}
      initialSlide={initialStoryIndex}
      centeredSlides
      spaceBetween={50}
      className="min-w-screen relative" // added relative positioning to Swiper
    >
      <SwiperButton
        className="absolute cursor-pointer xl:left-[25vw] left-[7vw] my-auto z-10 lg:top-1/2 top-[32%] transform -translate-y-1/2"
        onClick={(swiper) => swiper.slidePrev()}
      >
        <FaArrowLeftLong className="h-8 w-auto text-[var(--color-primary)]" />
      </SwiperButton>

      {people.map((person, index) => (
        <SwiperSlide key={index}>{renderStory({ person: person, index, activeIndex: slideProgress })}</SwiperSlide>
      ))}

      <SwiperButton
        className="absolute cursor-pointer xl:right-[25vw] right-[7vw] my-auto z-10 lg:top-1/2 top-[32%]  transform -translate-y-1/2"
        onClick={(swiper) => swiper.slideNext()}
      >
        <FaArrowRightLong className="h-8 w-auto text-[var(--color-primary)]" />
      </SwiperButton>
    </Swiper>
  );
};

export default StoriesSlider;
