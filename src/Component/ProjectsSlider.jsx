import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Project from "./Project";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function ProjectsSlider({ yourCardsArray }) {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        speed={500}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {yourCardsArray.map((card, index) => (
          <SwiperSlide key={index}>
            <Project {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default ProjectsSlider;
