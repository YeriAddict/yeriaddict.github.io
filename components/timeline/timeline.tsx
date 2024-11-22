"use client";

import type { Chrono as ChronoType } from "react-chrono";

import React from "react";
import dynamic from "next/dynamic";
import { Image } from "@nextui-org/image";
import { Spacer } from "@nextui-org/spacer";

import {
  FranceIcon,
  UnitedStatesOfAmericaIcon,
} from "../icons/countries-icons";

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
        activeItemIndex={3}
        cardHeight={380}
        disableClickOnCircle={true}
        disableToolbar={true}
        items={timelineItems}
        mode="VERTICAL_ALTERNATING"
        theme={{
          primary: "#2D353D",
          secondary: "",
          cardBgColor: "#D8DDE3",
          cardForeColor: "#828B90",
          cardSubtitleColor: "#1F2833",
          cardTitleColor: "#828B90",
          titleColor: "#828B90",
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
            <div className="flex flex-row items-center text-primary-500">
              {content.location?.split(", ").pop()?.trim() === "USA" ? (
                <>
                  <UnitedStatesOfAmericaIcon height={18} width={24} />
                  <Spacer x={2} />
                  <span className="text-[#131C29]">{content.location}</span>
                </>
              ) : (
                <>
                  <FranceIcon height={18} width={24} />
                  <Spacer x={2} />
                  <span className="text-[#131C29]">{content.location}</span>
                </>
              )}
            </div>
          </React.Fragment>
        ))}
      </Chrono>
    </>
  );
};
