"use client";

import React from 'react';
import type { Chrono as ChronoType } from 'react-chrono';
import dynamic from 'next/dynamic';

interface Props {
  timelineContent: React.JSX.Element[],
  timelineItems: { title: string; cardTitle: string; cardSubtitle: string; }[],
}

const Chrono = dynamic(() => import("react-chrono").then(lib => lib.Chrono), {
  ssr: false,
}) as typeof ChronoType;

export const Timeline = ({ timelineContent, timelineItems}: Props) => {
  return (
    <>
      <Chrono
        items={timelineItems}
        cardHeight={365}
        timelinePointShape="diamond"
        timelinePointDimension={12}
        mode="VERTICAL_ALTERNATING"
        disableToolbar={true}
        disableClickOnCircle={true}
        theme={{ primary: "blue", secondary: "", cardBgColor: "white", cardForeColor: "black" }}
      >
        {timelineContent}
      </Chrono>
    </>
  );
};
