"use client";
import { Image } from "@heroui/image";
import { Spacer } from "@heroui/spacer";
import { ReactTyped } from "react-typed";

import { HomeTabs } from "../tabs/home-tabs";

export default function HomePageComponent() {
  return (
    <>
      <div className="container mx-auto max-w-7xl h-[calc(100vh-110px)] flex-grow">
        <div className="slider-container h-full">
          <div className="slide flex h-full flex-col items-center justify-center">
            <Spacer y={20} />
            <div className="flex flex-col justify-center items-center gap-4">
              <Image
                alt="Me"
                className="object-cover rounded-full"
                height={400}
                src="/me.jpg"
                width={400}
              />
              <h1 className="text-2xl md:text-4xl font-bold flex items-center space-x-2">
                <ReactTyped
                  loop
                  backSpeed={50}
                  strings={[
                    'Hi! I am <span class="name-highlight">Denis</span>!',
                    'Bonjour! Je suis <span class="name-highlight">Denis</span>!',
                    'Hallo! Ich bin <span class="name-highlight">Denis</span>!',
                    'Привет! Я <span class="name-highlight">Денис</span>!',
                    'អរុណសួស្តី! ខ្ញុំគឺ <span class="name-highlight">Denis</span>!',
                  ]}
                  typeSpeed={60}
                />

                <p className="hand-motion">🤚</p>
              </h1>
              <p>⬇️ for more details!</p>
            </div>
            <Spacer y={4} />
          </div>

          <div className="slide flex h-full flex-col" id="details">
            <Spacer y={14} />
            <div className="flex flex-col justify-center items-center">
              <HomeTabs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
