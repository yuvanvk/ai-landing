"use client";
import { motion } from "motion/react";

export const Testimonials = () => {
  const testimonials = [
  {
    text: `"This product has completely transformed how I manage my projects and deadlines"`,
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: "/assets/avatar-1.png",
  },
  {
    text: `"These AI tools have completely revolutionized our SEO entire strategy overnight"`,
    name: "Jamie Lee",
    title: "Product @ Pulse",
    avatarImg: "/assets/avatar-2.png",
  },
  {
    text: `"This user interface is so intutive and easy to use, it has saved us countless hours"`,
    name: "Alisa Hester",
    title: "Founder @ slavan",
    avatarImg: "/assets/avatar-3.png",
  },
  {
    text: `"Our team's productivity has increased significantly since we started using this tool"`,
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: "/assets/avatar-4.png",
  },
];
  return (
    <div className="mx-auto w-full space-y-8 py-20 md:py-24 lg:max-w-7xl px-5 md:px-10 lg:px-20">
      <div className="space-y-3">
        <div className="text-5xl text-center font-medium tracking-tighter md:text-6xl">
          Beyond expectations.
        </div>
        <div className="mx-auto max-w-sm text-center text-lg tracking-tight text-white/70 md:text-xl">
          Our revolutinary AI SEO tools have transformed our client's
        </div>
      </div>
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <motion.div initial={{ translateX: "-50%" }} animate={{ translateX: "0" }} transition={{ duration: 30, repeat: Infinity, ease: "linear"}} className="flex gap-5 pr-5 flex-none">
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <div
              key={idx}
              className="max-w-xs flex-none space-y-6 rounded-xl border border-white/15 bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] p-6 md:max-w-md md:p-10"
            >
              <div className="text-lg tracking-tight md:text-2xl">
                {testimonial.text}
              </div>
              <div className="flex items-center gap-3">
                <div className="relative before:absolute before:inset-0 before:z-10 before:rounded-lg before:border before:border-white/30 before:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light after:content-['']">
                  <img
                    src={testimonial.avatarImg}
                    alt={testimonial.name}
                    className="h-11 w-11 rounded-lg grayscale"
                  />
                </div>
                <div>
                  <div>{testimonial.name}</div>
                  <div className="text-sm text-white/50">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
