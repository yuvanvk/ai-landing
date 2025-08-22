import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div
      className="h-[492px] flex items-center justify-center px-2 overflow-hidden relative"
      style={{ backgroundImage: `url(/assets/stars.png)` }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] border border-white/30 shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>

      <div className="absolute w-[344px] rounded-full h-[344px] border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-2 w-2 bg-white rounded-full top-1/2 absolute left-0 -translate-x-1/2 -translate-y-1/2"></div>
         <div className="h-2 w-2 bg-white rounded-full absolute right-1/2 top-0 -translate-x-1/2 -translate-y-1/2"></div>
         <div className="h-5 w-5 absolute top-1/2 left-full border border-white rounded-full -translate-x-1/2 -translate-y-1/2 inline-flex justify-center items-center">
            <div className="h-2 w-2 bg-white rounded-full"></div>
         </div>
      </div>

      <div className="absolute h-[444px] w-[444px] border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-dashed"></div>
      <div className="absolute h-[544px] w-[544px] border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full">
      <div className="h-2 w-2 bg-white rounded-full top-1/2 absolute left-0 -translate-x-1/2 -translate-y-1/2"></div>
         <div className="h-2 w-2 bg-white rounded-full absolute left-full top-0 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="space-y-5 relative mt-16">
        <div className="uppercase text-8xl font-semibold text-center bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text tracking-tighter">
          ai seo
        </div>
        <div className="text-lg text-white/70 text-center">
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
