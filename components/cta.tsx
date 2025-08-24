import { Button } from "./ui/button";

export const CTA = () => {
  const stars = "/assets/stars.png";
  const gridLines = "/assets/grid-lines.png";
  return (
    <div className="px-5 py-20 md:py-24 max-w-7xl mx-auto">
      <div
        className="relative overflow-hidden rounded-xl border border-white/15 py-24"
        style={{ backgroundImage: `url(${stars})` }}
      >
        <div
          className="absolute inset-0 bg-[rgb(74,32,138)] [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] bg-blend-overlay"
          style={{ backgroundImage: `url(${gridLines})` }}
        ></div>
        <div className="relative space-y-10">
          <div className="space-y-3">
            <div className="text-center text-5xl md:text-6xl font-medium tracking-tighter max-w-sm mx-auto">
              AI-driven SEO for everyone.
            </div>
            <div className="px-4 text-center text-lg md:text-xl max-w-xs mx-auto tracking-tight text-white/70">
              Achieve clear, impactful results without the complexity.
            </div>
          </div>
          <div className="flex justify-center">
            <Button>Join waitlist</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
