import { Person } from "@/data/models/Person";
import people from "@/data/People";
import Slider from "react-slick";

const Stories = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 3,
    speed: 500,
    useCss: true,
    arrows: true,
  };

  const renderStory = ({ person }: { person: Person }) => {
    return (
      <>
        <div className="flex flex-row">
          <div>
            <img src={import.meta.env.BASE_URL + person.image} alt={person.name} />
          </div>
          <div className="bg-black text-white">
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
      <div className=" bg-[var(--color-primary)] py-20">
        <div className="flex flex-col justify-center items-center  px-[15vw] lg:space-y-10 space-y-5">
          <h1 className="lg:text-5xl text-3xl font-bold text-white text-center">Gone But Never Forgotten</h1>
          <p className="lg:text-2xl text-lg text-white text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio maxime odio repudiandae non
            nulla nostrum est temporibus voluptatem odit!
          </p>
        </div>
        <div className="slider-container mt-20">
          <Slider {...settings}>{people.map((person) => renderStory({ person }))}</Slider>
        </div>
      </div>
    </>
  );
};

export default Stories;
