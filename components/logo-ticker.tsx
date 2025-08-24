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
  ];

  return (
    <div className="flex items-center justify-center w-full py-20 md:py-28">
      <div className="flex items-center  gap-5">
        <div className="flex-1 md:flex-none text-sm">
          Trusted by top innovative teams
        </div>
        <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <div className="flex flex-none gap-14">
            {images.map((img) => {
              return (
                <img
                  key={img.alt}
                  src={img.src}
                  alt={img.src}
                  className="h-6 w-auto"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
