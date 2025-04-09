import { Person } from "@/data/models/Person";
import people from "@/data/People";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Stories.css";
import StoriesTitle from "@/assets/images/stories-title.svg?react";
import useScreenSize from "@/utils/useScreenSize";

// @ts-expect-error swiper css module
import "swiper/css";

const Stories = () => {
  const { screenSizeCategory } = useScreenSize();

  const renderLineDivider = () => {
    return <div className="w-2.5 h-7 my-0.5 bg-[var(--color-text-background)]"></div>;
  };

  const renderStoriesDescription = () => {
    return (
      <div className="flex flex-col justify-center items-center">
        <p className="lg:text-xl text-lg text-white text-center bg-[var(--color-text-background)] pr-2">
          Behind each bead is a woman. A mother, a daughter, a sister, a friend.
        </p>
        {renderLineDivider()}
        <p className="lg:text-xl text-lg text-white text-center bg-[var(--color-text-background)] pr-2">
          The women and children whose lives were cut short are more than statistics; they were individuals
        </p>
        <p className="lg:text-xl text-lg text-white text-center bg-[var(--color-text-background)] pr-2 mt-0.5">
          with dreams and hopes. Their tragic loss leaves a void in families, communities, and society.
        </p>
        {renderLineDivider()}
        <p className="lg:text-xl text-lg text-white text-center bg-[var(--color-text-background)] pr-2">
          But their memory will never be buried.
        </p>
        {renderLineDivider()}
        <p className="lg:text-xl text-lg text-white text-center bg-[var(--color-text-background)] pr-2">
          We will continue to honour their lives.
        </p>
        <p className="lg:text-xl text-lg text-white text-center bg-[var(--color-text-background)] pr-2 mt-0.5">
          This crisis demands urgent action
        </p>
        <p className="lg:text-xl text-lg text-white text-center bg-[var(--color-text-background)] pr-2 mt-0.5">
          We want a future where every woman can live free from fear and violence.
        </p>
      </div>
    );
  };

  const renderStory = ({ person }: { person: Person }) => {
    return (
      <>
        <div className="flex flex-row">
          <div className="flex-1/3">
            <img
              src={import.meta.env.BASE_URL + person.image}
              alt={person.name}
              className="h-full object-cover object-center"
            />
          </div>
          <div className="bg-black text-white flex-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eos ipsum quisquam tempora. Harum modi
            similique velit odio ratione est dolores, provident beatae ullam quam quibusdam vitae consectetur
            accusantium deserunt.
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="lg:py-10 pb-10">
        <div className="flex flex-col justify-center items-center lg:px-[15vw] px-[5vw]">
          <StoriesTitle className="lg:w-[30vw] w-[80vw]" />
          {renderStoriesDescription()}
        </div>
        <div className="slider-container mt-20 overflow-visible px-[15vw]">
          <Swiper
            slidesPerView={screenSizeCategory == "small" ? 1 : 3}
            initialSlide={Math.round(people.length / 2)}
            centeredSlides={true}
            spaceBetween={30}
          >
            {people.map((person) => (
              <SwiperSlide>{renderStory({ person })}</SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Stories;
