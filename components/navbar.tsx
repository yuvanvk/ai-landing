"use client";

import Image from "next/image";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-b md:border border-white/15 p-4 md:max-w-2xl lg:max-w-4xl mx-auto md:rounded-xl sticky top-0 md:top-3 z-10 backdrop-blur">
      <Image
        src={"/assets/logo.svg"}
        alt="logo"
        width={40}
        height={40}
        className="text-white bg-white rounded-lg border border-white/15"
      />

      <div className="hidden md:block">
        <div className="flex gap-8 text-sm">
          <a href="#" className="text-white/70 hover:text-white">
            Features
          </a>
          <a href="#" className="text-white/70 hover:text-white">
            Developers
          </a>
          <a href="#" className="text-white/70 hover:text-white">
            Pricing
          </a>
          <a href="#" className="text-white/70 hover:text-white">
            Changelog
          </a>
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <Button>Join waitlist</Button>
        <Image
          src={"assets/icon-menu.svg"}
          alt="menu-icon"
          width={30}
          height={30}
          className="cursor-pointer md:hidden"
        />
      </div>
    </div>
  );
};
