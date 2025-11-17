import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { SwiperArray } from "../../arrays/SwiperArrays";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SwiperPage({ string }) {

  const [bubble, setBubble] = useState(null);

  useEffect(() => {
    setBubble(null);
  }, [string]);

  const target = SwiperArray.find(v => v.name === string) || SwiperArray[0];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      effect="coverflow"
      centeredSlides={true}
      slidesPerView={1}
      speed={800}
      coverflowEffect={{
        rotate: 0,
        depth: 150,
        stretch: 0,
        slideShadows: false,
      }}
      className="mySwiper"
    >
      {target?.options?.map((temp, index) => (
        <SwiperSlide
          key={index}
          className="slide"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setBubble({ x, y, text: temp.text });
          }}
        >
          <div className="slide-content">
            {temp.source && <img src={temp.source} alt={temp.text} />}
            {temp.text && <p>{temp.text}</p>}
          </div>

          {bubble && (
            <div className="slide-bubble" style={{ left: bubble.x, top: bubble.y }}>
              {bubble.text}
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
