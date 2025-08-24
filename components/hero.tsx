"use client";
import { Button } from "./ui/button";
import { motion } from "motion/react";

export const Hero = () => {
  return (
    <div
      className="relative flex h-[492px] items-center justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] px-2 md:h-[800px]"
      style={{ backgroundImage: `url(/assets/stars.png)` }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
      {/* planet start */}
      <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)] md:h-96 md:w-96"></div>
      {/* planet end */}

      {/* 1st ring */}
      <motion.div animate={{ rotate: '1turn' }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} className="absolute top-1/2 left-1/2 h-[344px] w-[344px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white opacity-20 md:h-[580px] md:w-[580px]">
        <div className="absolute top-1/2 left-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
        <div className="absolute top-0 right-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
        <div className="absolute top-1/2 left-full inline-flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white">
          <div className="h-2 w-2 rounded-full bg-white"></div>
        </div>
      </motion.div>
      {/* end */}

      <motion.div animate={{ rotate: "-1turn" }} transition={{ duration: 180, repeat: Infinity, ease: "linear"}} className="absolute top-1/2 left-1/2 h-[444px] w-[444px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/20 md:h-[780px] md:w-[780px]"></motion.div>
      <motion.div animate={{ rotate: "1turn" }} transition={{ duration: 90, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 left-1/2 h-[544px] w-[544px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white opacity-20 md:h-[980px] md:w-[980px]">
        <div className="absolute top-1/2 left-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
        <div className="absolute top-0 left-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
      </motion.div>
      <div className="relative mt-16 space-y-5">
        <div className="bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] bg-clip-text text-center text-8xl font-semibold tracking-tighter text-transparent uppercase md:text-[168px] md:leading-none">
          ai seo
        </div>
        <div className="mx-auto max-w-xl text-center text-lg text-white/70 md:text-xl">
          Elevate your site&apos;s visibility effortlessly with AI&#44; where smart
          technology meets user-friendly SEO tools
        </div>
        <div className="flex justify-center">
          <Button>Join waitlist</Button>
        </div>
      </div>
    </div>
  );
};
