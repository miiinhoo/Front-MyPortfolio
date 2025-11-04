import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SwiperPage(){
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
      <SwiperSlide>슬라이드1</SwiperSlide>
      <SwiperSlide>슬라이드2</SwiperSlide>
      <SwiperSlide>슬라이드3</SwiperSlide>
    </Swiper>
    )
}