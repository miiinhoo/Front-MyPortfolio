import FrontSlide from "./swiper/FrontSlide";
import DesignSlide from "./swiper/DesignSlide";

export default function SwiperPage({ string }) {
 
  return (
    <div className="swipers">
      <FrontSlide />
      <DesignSlide />
    </div>
  );
}
