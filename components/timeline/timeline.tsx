"use client";

import React from 'react';
import type { Chrono as ChronoType } from 'react-chrono';
import dynamic from 'next/dynamic';
import { timelineItems } from "@/components/timeline/timeline-items";
import { Image } from "@nextui-org/image";

const Chrono = dynamic(() => import('react-chrono').then(lib => lib.Chrono), {
  ssr: false,
}) as typeof ChronoType;

export const Timeline = () => {
  const timelineContent = [
    <React.Fragment key="content_three">
      <Image
        isZoomed
        alt="Columbia University"
        className="object-cover w-full h-full"
        src="/columbia_university.jpg"
      />
      <span className="text-primary-500">New York City, NY, USA</span>
    </React.Fragment>,
    <React.Fragment key="content_two">
      <Image
        isZoomed
        alt="Telecom Saint-Etienne"
        className="object-cover w-full h-full"
        src="/telecom_saint_etienne.jpeg"
      />
      <span className="text-primary-500">Saint-Étienne, France</span>
    </React.Fragment>,
    <React.Fragment key="content_one">
      <Image
        isZoomed
        alt="Lycee du Parc"
        className="object-cover w-full h-full"
        src="/lycee_du_parc.jpg"
      />
      <span className="text-primary-500">Lyon, France</span>
    </React.Fragment>,
  ];

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
