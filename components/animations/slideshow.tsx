import { Swiper } from "swiper/react";
import { EffectFlip, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-flip';

interface Props {
  slidesContent: React.ReactNode[];
}

export default function Slideshow({ slidesContent }: Props) {
  return (
    <>
      <Swiper
        direction={"horizontal"}
        effect={"flip"}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFlip, Mousewheel, Pagination, Navigation]}
        className="w-full h-full"
      >
        {slidesContent}
      </Swiper>
    </>
  )
}