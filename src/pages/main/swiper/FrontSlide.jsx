import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { SwiperArray } from "../../../arrays/SwiperArrays";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function FrontSlide() {
  const front = SwiperArray.find(v => v.name === "Front");

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
      effect="coverflow"
      centeredSlides={true}
      grabCursor={true}
      slidesPerView={3}
      autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
      loop={true}
      coverflowEffect={{
        rotate: 15,
        stretch: 0,
        depth: 250,
        modifier: 1.2,
        slideShadows: false,
      }}
      speed={1200}
      navigation
      pagination={{ clickable: true }}
      className="frontSwiper"
    >
      {front.options.map((slider, index) => (
        <SwiperSlide key={index} className="slide">
          <div className="slide-content">
            {slider.source && <img src={slider.source} alt={slider.text} />}
          </div>
          <div className="slide-title">{slider.text}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
