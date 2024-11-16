import { Swiper } from "swiper/react";
import { EffectFlip, Mousewheel, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-flip";

interface Props {
  slidesContent: React.ReactNode[];
}

export default function Slideshow({ slidesContent }: Props) {
  return (
    <>
      <Swiper
        className="w-full h-full"
        direction={"horizontal"}
        effect={"flip"}
        loop={true}
        modules={[EffectFlip, Mousewheel, Pagination, Navigation]}
        mousewheel={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        spaceBetween={30}
      >
        {slidesContent}
      </Swiper>
    </>
  );
}
