"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";

export const Features = () => {
  const tabs = [
    {
      icon: "/assets/lottie/vroom.lottie",
      title: "User-friendly dashboard",
      isNew: false,
      backgroundPositonX: 0,
      backgroundPositionY: 0,
      backgroundSize: 150,
    },
    {
      icon: "/assets/lottie/click.lottie",
      title: "One-click optimization",
      isNew: false,
      backgroundPositonX: 98,
      backgroundPositionY: 100,
      backgroundSize: 135,
    },
    {
      icon: "/assets/lottie/vroom.lottie",
      title: "Smart keyword generator",
      isNew: true,
      backgroundPositonX: 100,
      backgroundPositionY: 27,
      backgroundSize: 177,
    },
  ];

  const icon = "/assets/product-image.png";

  return (
    <div className="max-w-7xl mx-auto py-20 md:py-24 space-y-5">
      <div className="space-y-3">
        <div className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
        Elevate your seo efforts.
      </div>
      <div className="text-center text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight">
        From small startups to large enterprises, our AI-driven tool has
        revolutionized the way business approach SEO.
      </div>
      </div>
      <div className="flex flex-col gap-3 lg:flex-row w-full">
        {tabs.map((tab) => (
          <div
            key={tab.title}
            className="flex items-center border border-white/15 p-2.5 gap-2.5 rounded-xl flex-1"
          >
            <div className="w-12 h-12 inline-flex justify-center items-center border border-white/15 rounded-lg">
              <DotLottieReact className="w-5 h-5" src={tab.icon} autoplay />
            </div>
            <div className="font-medium">{tab.title}</div>
            {tab.isNew && (
              <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">
                new
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="border border-white/20 p-2.5 rounded-xl">
        <div
          className="bg-cover aspect-video border border-white/20 rounded-lg"
          style={{
            backgroundImage: `url(${icon})`,
          }}
        ></div>
      </div>
    </div>
  );
};
