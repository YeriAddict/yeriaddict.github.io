"use client";

import type { Chrono as ChronoType } from "react-chrono";

import React from "react";
import dynamic from "next/dynamic";

interface Props {
  timelineContent: React.JSX.Element[];
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
        {timelineContent}
      </Chrono>
    </>
  );
};
