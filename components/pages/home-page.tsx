"use client";
import { Image } from "@nextui-org/image";
import { Spacer } from "@nextui-org/spacer";
import { ReactTyped } from "react-typed";

export default function HomePageComponent() {
  return (
    <>
      <div className="container mx-auto max-w-7xl flex-grow">
        <div className="slider-container">
          <div className="slide flex flex-col">
            <Spacer y={20} />
            <div className="flex flex-col justify-center items-center gap-4">
              <Image
                alt="Me"
                className="object-cover rounded-full"
                height={400}
                src="/experiences_images/analysis_group.png"
                width={400}
              />
              <h1 className="text-2xl md:text-4xl font-bold flex items-center space-x-2">
                <ReactTyped
                  loop
                  backSpeed={50}
                  strings={["Hi! I am Denis!", "Bonjour! Je suis Denis!"]}
                  typeSpeed={60}
                />
                <p className="hand-motion">🤚</p>
              </h1>
              <p>⬇️ for more details!</p>
            </div>
          </div>

          <div className="slide flex flex-col">
            <Spacer y={20} />
            <div className="flex flex-col justify-center items-center gap-4">
              Hi!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
