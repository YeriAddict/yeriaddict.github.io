"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-flip";

import { Spacer } from "@heroui/spacer";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Divider } from "@heroui/divider";

import { Timeline } from "@/components/timeline/timeline";
import { ExperienceCard } from "@/components/cards/experience-card";
import { experiences } from "@/config/items/experiences-items";
import { timelineContent, timelineItems } from "@/config/items/timeline-items";

export default function AboutPageComponent() {
  return (
    <>
      <div className="container mx-auto max-w-7xl pt-16 flex-grow">
        <div className="h-[1400px] pt-12 mb-6">
          <Swiper
            className="w-full h-full"
            direction={"horizontal"}
            loop={true}
            modules={[Pagination, Navigation]}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            slidesPerView={1}
            spaceBetween={30}
          >
            <SwiperSlide key={1}>
              <div className="flex flex-col w-full justify-start items-center">
                <div className="w-full flex flex-col items-center justify-center">
                  <h1 className="text-4xl font-bold">EDUCATION</h1>
                  <Spacer y={2} />
                  <Divider className="bg-primary-500" />
                </div>
                <Spacer y={6} />
                <div className="w-full flex justify-center items-center">
                  <Timeline
                    timelineContent={timelineContent}
                    timelineItems={timelineItems}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide key={2}>
              <div className="flex flex-col w-full justify-start items-center">
                <div className="w-full flex flex-col items-center justify-center">
                  <h1 className="text-4xl font-bold">EXPERIENCE</h1>
                  <Spacer y={2} />
                  <Divider className="bg-primary-500" />
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
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
