import StoriesTitle from "@/assets/images/stories-title.svg?react";
import StoriesSlider from "./StoriesSlider";

const Stories = () => {
  const renderStoriesDescription = () => {
    const textStyle = "lg:text-xl text-lg leading-tight";

    return (
      <div className="flex flex-col justify-center items-center space-y-6 ">
        <p className="text-white text-center">
          <span className={textStyle}>Behind each bead is a woman. A mother, a daughter, a sister, a friend.</span>
        </p>
        <p className="text-white text-center">
          <span className={textStyle}>
            The women and children whose lives were cut short are more than statistics; they were individuals
          </span>
        </p>
        <p className="text-white text-center">
          <span className={textStyle}>
            with dreams and hopes. Their tragic loss leaves a void in families, communities, and society.
          </span>
        </p>
        <p className="text-white text-center">
          <span className={textStyle}>But their memory will never be buried.</span>
        </p>
        <p className="text-white text-center">
          <span className={textStyle}>We will continue to honour their lives.</span>
        </p>
        <p className="text-white text-center">
          <span className={textStyle}>This crisis demands urgent action</span>
        </p>
        <p className="text-white text-center">
          <span className={textStyle}> We want a future where every woman can live free from fear and violence.</span>
        </p>
      </div>
    );
  };

  return (
    <>
      <div className="lg:py-10 ">
        <div className="flex flex-col justify-center items-center lg:px-[15vw] px-[5vw]">
          <StoriesTitle className="lg:w-[30vw] w-[80vw]" />
          {renderStoriesDescription()}
        </div>
        <div className="slider-container mt-20 overflow-visible">
          <StoriesSlider />
        </div>
      </div>
    </>
  );
};

export default Stories;
