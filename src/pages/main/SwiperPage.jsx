import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SwiperPage({bool,setBool}){
    return(
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}  // 사용할 기능
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop={true}
      spaceBetween={30}
      slidesPerView={1}
    >
      {
        bool ?
        <>
          <SwiperSlide>슬라이드1</SwiperSlide>
          <SwiperSlide>슬라이드2</SwiperSlide>
          <SwiperSlide>슬라이드3</SwiperSlide>
        </>:
        <>
          <SwiperSlide>슬라이드11</SwiperSlide>
          <SwiperSlide>슬라이드2</SwiperSlide>
          <SwiperSlide>슬라이드3</SwiperSlide>
        </>
      }
      
    </Swiper>
    )
}