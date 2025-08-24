"use client";
import { motion } from "motion/react";
export const LogoTicker = () => {
  const images = [
    {
      src: "/assets/logo-acme.png",
      alt: "logo-acme",
    },
    {
      src: "/assets/logo-pulse.png",
      alt: "logo-pulse",
    },
    {
      src: "/assets/logo-echo.png",
      alt: "logo-echo",
    },
    {
      src: "/assets/logo-celestial.png",
      alt: "logo-celestial",
    },
    {
      src: "assets/logo-apex.png",
      alt: "logo-apex",
    },
    {
      src: "assets/logo-quantum.png",
      alt: "logo-quantum",
    },
    {
      src: "/assets/logo-acme.png",
      alt: "logo-acme",
    },
    {
      src: "/assets/logo-pulse.png",
      alt: "logo-pulse",
    },
    {
      src: "/assets/logo-echo.png",
      alt: "logo-echo",
    },
    {
      src: "/assets/logo-celestial.png",
      alt: "logo-celestial",
    },
    {
      src: "assets/logo-apex.png",
      alt: "logo-apex",
    },
    {
      src: "assets/logo-quantum.png",
      alt: "logo-quantum",
    },
  ];

  return (
    <div className="flex items-center justify-center w-full py-20 md:py-28 max-w-7xl mx-auto">
      <div className="flex items-center  gap-5">
        <div className="flex-1 md:flex-none text-sm">
          Trusted by top innovative teams
        </div>
        <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div initial={{ translateX: "-50%" }} animate={{ translateX: "0" }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="flex flex-none gap-14 pr-14 -translate-x-0">
            {images.map((img) => {
              return (
                <img
                  key={img.alt}
                  src={img.src}
                  alt={img.src}
                  className="h-6 w-auto flex-none"
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
