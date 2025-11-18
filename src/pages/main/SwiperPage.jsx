import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { SwiperArray } from "../../arrays/SwiperArrays";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SwiperPage({ string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const target = SwiperArray.find(v => v.name === string) || SwiperArray[0];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
      effect="coverflow"
      centeredSlides={true}
      grabCursor={true}
      slidesPerView={3}
      loop={true}
      coverflowEffect={{
        rotate: 15,        // 좌우 카드 기울기
        stretch: 0,
        depth: 250,        // 입체감
        modifier: 1.2,
        slideShadows: false,
      }}
      speed={1200}
      navigation
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      pagination={{ clickable: true }}
      className="mySwiper"
    >
      {target?.options?.map((temp, index) => (
        <>
          <SwiperSlide
          key={index}
          className="slide"
          >
            <div className="slide-content">
              {temp.source && <img src={temp.source} alt={temp.text} />} 
            </div>
            {activeIndex === index && (
            <div className="slide-title">{temp.text}</div>
            )}
          </SwiperSlide>
          </>
      ))}
    </Swiper>
  );
}
