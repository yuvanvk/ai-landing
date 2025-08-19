"use client";

import { useState } from "react";
import Image from "next/image";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center border-b border-white/15 p-4">
      <Image
        src={"/assets/logo.svg"}
        alt="logo"
        width={40}
        height={40}
        className="text-white bg-white rounded-lg border border-white/15"
      />
      <div className="flex items-center gap-x-4">
        <button className="text-sm border px-2 py-3 rounded-lg">Join waitlist</button>
        <Image src={"assets/icon-menu.svg"} alt="menu-icon" width={40} height={40}/>
      </div>
    </div>
  );
};
