import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div
      className="h-[492px] md:h-[800px] flex items-center justify-center px-2 overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{ backgroundImage: `url(/assets/stars.png)` }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
      {/* planet start */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:h-96 md:w-96 rounded-full bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] border border-white/30 shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
      {/* planet end */}
      <div className="absolute w-[344px] md:w-[580px] md:h-[580px] rounded-full h-[344px] border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-2 w-2 bg-white rounded-full top-1/2 absolute left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="h-2 w-2 bg-white rounded-full absolute right-1/2 top-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="h-5 w-5 absolute top-1/2 left-full border border-white rounded-full -translate-x-1/2 -translate-y-1/2 inline-flex justify-center items-center">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </div>

      <div className="absolute h-[444px] md:h-[780px] md:w-[780px] w-[444px] border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-dashed"></div>
      <div className="absolute h-[544px] md:h-[980px] md:w-[980px] w-[544px] border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full">
        <div className="h-2 w-2 bg-white rounded-full top-1/2 absolute left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="h-2 w-2 bg-white rounded-full absolute left-full top-0 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="space-y-5 relative mt-16">
        <div className="uppercase text-8xl font-semibold text-center bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text tracking-tighter md:text-[168px] md:leading-none">
          ai seo
        </div>
        <div className="text-lg text-white/70 text-center md:text-xl max-w-xl mx-auto">
          Elevate your site's visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools
        </div>
        <div className="flex justify-center">
          <Button>Join waitlist</Button>
        </div>
      </div>
    </div>
  );
};
