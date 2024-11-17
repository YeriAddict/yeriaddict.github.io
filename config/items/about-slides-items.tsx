import { SwiperSlide } from "swiper/react";
import { Spacer } from "@nextui-org/spacer";
import React from "react";

import { timelineContent, timelineItems } from "./timeline-items";
import { experiences } from "./experiences-items";

import { Timeline } from "@/components/timeline/timeline";
import { ExperienceCard } from "@/components/cards/experience-card";

export const aboutSlidesContent = [
  <SwiperSlide key={"one"}>
    <div className="flex flex-col w-full justify-start items-center">
      <div className="w-full flex justify-start">
        <Spacer x={28} />
        <h1 className="text-4xl font-bold">EDUCATION</h1>
      </div>
      <Spacer y={6} />
      <div className="w-full flex justify-center items-center">
        <Timeline
          timelineContent={timelineContent}
          timelineItems={timelineItems}
        />
      </div>
    </div>
  </SwiperSlide>,
  <SwiperSlide key={"two"}>
    <div className="flex flex-col w-full justify-start items-center">
      <div className="w-full flex justify-start">
        <Spacer x={28} />
        <h1 className="text-4xl font-bold">EXPERIENCE</h1>
      </div>
      {experiences.map((experience, index) => (
        <React.Fragment key={index}>
          <Spacer y={6} />
          <ExperienceCard
            company={experience.company}
            date={experience.date}
            image={experience.image}
            location={experience.location}
            technologies={experience.technologies}
            title={experience.title}
          />
        </React.Fragment>
      ))}
    </div>
  </SwiperSlide>,
];
