import { Person } from "@/data/models/Person";
import people from "@/data/People";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Stories.css";

// @ts-expect-error swiper css module
import "swiper/css";

const Stories = () => {
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
      <div className=" bg-[var(--color-primary)] py-20">
        <div className="flex flex-col justify-center items-center  px-[15vw] lg:space-y-10 space-y-5">
          <h1 className="lg:text-5xl text-3xl font-bold text-white text-center">Gone But Never Forgotten</h1>
          <p className="lg:text-2xl text-lg text-white text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio maxime odio repudiandae non
            nulla nostrum est temporibus voluptatem odit!
          </p>
        </div>
        <div className="slider-container mt-20 overflow-visible px-32">
          <Swiper slidesPerView={3} centeredSlides={true} spaceBetween={30}>
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
