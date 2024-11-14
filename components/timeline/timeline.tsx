"use client";

import React from 'react';
import type { Chrono as ChronoType } from 'react-chrono';
import dynamic from 'next/dynamic';

const Chrono = dynamic(() => import('react-chrono').then(lib => lib.Chrono), {
  ssr: false,
}) as typeof ChronoType;

export const Timeline = () => {
  const items = [
    {
      title: "January 2023",
      cardTitle: "Started a New Job",
      cardSubtitle: "Company XYZ",
      cardDetailedText: "Joined Company XYZ as a software engineer in the web development team.",
    },
    {
      title: "March 2023",
      cardTitle: "Completed Project Alpha",
      cardSubtitle: "Company XYZ",
      cardDetailedText: "Led the team to successfully complete Project Alpha, enhancing the company's backend services.",
    },
    {
      title: "July 2023",
      cardTitle: "Promoted to Senior Engineer",
      cardSubtitle: "Company XYZ",
      cardDetailedText: "Promoted to senior engineer in recognition of contributions to multiple high-impact projects.",
    },
  ];

  return (
    <div style={{ width: "500px", height: "500px" }}>
      <Chrono
        items={items}
        mode="VERTICAL"
        theme={{ primary: "blue", secondary: "gray", cardBgColor: "white", cardForeColor: "black" }}
      />
    </div>
  );
};
