import Swiper from "swiper";
import { useSwiper } from "swiper/react";

type SwiperButtonProps = {
  onClick?: (swiper: Swiper) => void;
  children?: React.ReactNode;
  className?: string;
};

const SwiperButton = ({ onClick, children, className }: SwiperButtonProps) => {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => onClick?.(swiper)}
      className={`h-16 w-16 rounded-full bg-white flex justify-center items-center ${className || ""}`}
    >
      {children}
    </button>
  );
};

export default SwiperButton;
