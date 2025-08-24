export const Footer = () => {
  const socialHandles = [
    {
      src: "/assets/social-instagram.svg",
      alt: "instagram-logo",
    },
    {
      src: "/assets/social-x.svg",
      alt: "x-logo",
    },
    {
      src: "/assets/social-youtube.svg",
      alt: "youtube-logo",
    },
  ];

  return (
    <div className="flex flex-col  justify-between space-y-5 border-t border-white/20 p-4 lg:px-10 lg:py-3 lg:flex-row lg:items-center">
      <div className="flex items-center gap-3">
        <img src={"/assets/logo.svg"} className="h-8 w-8 rounded-lg bg-white" />
        <div>AI Landing page</div>
      </div>
      <div className="flex flex-col  gap-y-4 text-neutral-500 lg:flex-row lg:items-center lg:gap-x-5">
        <a href="#">Features</a>
        <a href="#">Developers</a>
        <a href="#">Company</a>
        <a href="#">Blog</a>
        <a href="#">Changelog</a>
      </div>

      <div className="flex items-center gap-3">
        {socialHandles.map((handle) => (
          <img key={handle.alt}
            src={handle.src}
            alt={handle.alt}
            className="h-8 w-8 rounded-lg bg-neutral-500"
          />
        ))}
      </div>
    </div>
  );
};
