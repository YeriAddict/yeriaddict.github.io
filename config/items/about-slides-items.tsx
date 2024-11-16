import { SwiperSlide } from "swiper/react";

import { timelineContent, timelineItems } from "./timeline-items";

import { Timeline } from "@/components/timeline/timeline";

export const aboutSlidesContent = [
  <SwiperSlide key={"one"}>
    <div
      style={{
        width: "100%",
        height: "1200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Timeline
        timelineContent={timelineContent}
        timelineItems={timelineItems}
      />
    </div>
  </SwiperSlide>,
  <SwiperSlide key={"two"}>
    <div
      style={{
        width: "100%",
        height: "1200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      WORK IN PROGRESS
    </div>
  </SwiperSlide>,
];
