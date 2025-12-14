import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Project from "./Project";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function ProjectsSlider({ yourCardsArray, isDarkMode }) {
  return (
    <div className="relative">
      <button
        className={`swiper-button-prev-custom absolute -left-2 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full border flex items-center justify-center transition-all ${
          isDarkMode
            ? "border-slate-700 bg-slate-900/70 text-slate-100 hover:bg-slate-900"
            : "border-slate-200 bg-white/80 backdrop-blur text-slate-800 hover:bg-white"
        }`}
        aria-label="Previous"
        type="button"
      >
        <FiChevronLeft size={22} />
      </button>

      <button
        className={`swiper-button-next-custom absolute -right-2 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full border flex items-center justify-center transition-all ${
          isDarkMode
            ? "border-slate-700 bg-slate-900/70 text-slate-100 hover:bg-slate-900"
            : "border-slate-200 bg-white/80 backdrop-blur text-slate-800 hover:bg-white"
        }`}
        aria-label="Next"
        type="button"
      >
        <FiChevronRight size={22} />
      </button>

      <Swiper
        modules={[Navigation]}
        spaceBetween={18}
        slidesPerView={1}
        speed={450}
        loop
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {yourCardsArray.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="px-1">
              <Project {...card} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProjectsSlider;
