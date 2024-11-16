"use client";

import Slideshow from "../animations/slideshow";
import { aboutSlidesContent } from "@/config/items/about-slides-items";

export default function AboutPageComponent() {
  return (
    <>
      <div className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        <Slideshow slidesContent={aboutSlidesContent}/>
      </div>
    </>
  );
}