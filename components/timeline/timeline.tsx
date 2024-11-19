"use client";

import type { Chrono as ChronoType } from "react-chrono";

import React from "react";
import dynamic from "next/dynamic";
import { Image } from "@nextui-org/image";
import { Spacer } from "@nextui-org/spacer";

interface Props {
  timelineContent: {
    alt: string;
    src: string;
    url: string;
    location: string;
  }[];
  timelineItems: { title: string; cardTitle: string; cardSubtitle: string }[];
}

const Chrono = dynamic(() => import("react-chrono").then((lib) => lib.Chrono), {
  ssr: false,
}) as typeof ChronoType;

export const Timeline = ({ timelineContent, timelineItems }: Props) => {
  return (
    <>
      <Chrono
        cardHeight={380}
        disableClickOnCircle={true}
        disableToolbar={true}
        items={timelineItems}
        mode="VERTICAL_ALTERNATING"
        theme={{
          primary: "blue",
          secondary: "",
          cardBgColor: "white",
          cardForeColor: "black",
        }}
        timelinePointDimension={12}
        timelinePointShape="diamond"
      >
        {timelineContent.map((content, index) => (
          <React.Fragment key={index}>
            <Image
              isZoomed
              alt={content.alt}
              className={`object-cover w-[400px] ${index === 2 ? "h-[200px]" : "h-[230px]"} cursor-pointer`}
              src={content.src}
              onClick={() => window.open(content.url, "_blank")}
            />
            <Spacer y={2} />
            <p className="text-primary-500">{content.location}</p>
          </React.Fragment>
        ))}
      </Chrono>
    </>
  );
};
