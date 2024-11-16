import React from "react";
import { Image } from "@nextui-org/image";

export const timelineItems = [
  {
    title: "Sep 2023 - Dec 2024",
    cardTitle: "Columbia University",
    cardSubtitle: "M.S. in Data Science",
  },
  {
    title: "Sep 2020 - Aug 2023",
    cardTitle: "Télécom Saint-Étienne",
    cardSubtitle: "B.S./M.S. in Computer Science (Diplôme d'ingénieur)",
  },
  {
    title: "Sep 2017 - Aug 2020",
    cardTitle: "Lycée du Parc",
    cardSubtitle:
      "Preparation for the French national entrance examinations to Grandes Ecoles",
  },
];

export const timelineContent = [
  <React.Fragment key="content_three">
    <Image
      isZoomed
      alt="Columbia University"
      className="object-cover w-[400px] h-[230px]"
      src="/timeline_images/columbia_university.jpg"
    />
    <span className="text-primary-500">New York City, NY, USA</span>
  </React.Fragment>,
  <React.Fragment key="content_two">
    <Image
      isZoomed
      alt="Telecom Saint-Etienne"
      className="object-cover w-[400px] h-[230px]"
      src="/timeline_images/telecom_saint_etienne.jpeg"
    />
    <span className="text-primary-500">Saint-Étienne, France</span>
  </React.Fragment>,
  <React.Fragment key="content_one">
    <Image
      isZoomed
      alt="Lycee du Parc"
      className="object-cover w-[400px] h-[200px]"
      src="/timeline_images/lycee_du_parc.jpg"
    />
    <span className="text-primary-500">Lyon, France</span>
  </React.Fragment>,
];
