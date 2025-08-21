"use client";

import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-b md:border border-white/15 p-4 md:w-full lg:max-w-4xl mx-auto mt-2 rounded-xl">
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
        <button className="text-sm  px-3 py-2 rounded-lg bg-gradient-to-b from-[#190d2e] to-[#4a208a] cursor-pointer shadow-[0px_0px_12px_#8c45ff] relative">
          <span>Join waitlist</span>
          <div className="absolute inset-0">
            <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
            <div className="rounded-lg border border-white/40 absolute inset-0 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
            <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
          </div>
        </button>
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
