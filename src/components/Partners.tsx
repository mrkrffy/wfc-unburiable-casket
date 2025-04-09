import Slider from "react-slick";
import WFCLogo from "@/assets/images/partners/wfc-logo.svg?react";

const Partners = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: window.innerWidth <= 768 ? "60px" : "20px",
    slidesToShow: window.innerWidth <= 768 ? 1 : 4,
    speed: 500,
    useCss: true,
    arrows: true,
  };

  return (
    <div className="bg-[var(--color-secondary)] pt-25 pb-35 max-w-screen">
      <div className="lg:text-5xl text-3xl font-bold text-white text-center"> Partner Organisations </div>
      <div className="slider-container mt-20">
        <Slider {...settings}>
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index}>
              <WFCLogo className="h-24 w-auto" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Partners;
