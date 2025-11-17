import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Paytime from '../../paytime.PNG';

export default function SwiperPage({openSide}){
    return(
    <Swiper
      modules={[Navigation, Pagination, Autoplay]} 
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop={true}
      spaceBetween={30}
      slidesPerView={1}
    >
      {
        openSide ?
        <>
          <SwiperSlide>
            <img src={Paytime}/>
          </SwiperSlide>
          <SwiperSlide>슬라이드2</SwiperSlide>
          <SwiperSlide>슬라이드3</SwiperSlide>
        </>
        : 
        <>
          <SwiperSlide>디자인</SwiperSlide>
          <SwiperSlide>슬라이드2</SwiperSlide>
          <SwiperSlide>슬라이드3</SwiperSlide>
        </>
      }
    </Swiper>
    )
}