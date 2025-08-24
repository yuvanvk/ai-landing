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
    <div className="flex flex-col items-start justify-between space-y-5 border-t border-white/20 px-4 py-4 lg:flex-row lg:items-center">
      <div className="flex items-center gap-3">
        <img src={"/assets/logo.svg"} className="h-8 w-8 rounded-lg bg-white" />
        <div>AI Landing page</div>
      </div>
      <div className="flex flex-col items-start gap-y-4 text-neutral-500 lg:flex-row lg:items-center lg:gap-x-5">
        <div>Features</div>
        <div>Developers</div>
        <div>Company</div>
        <div>Blog</div>
        <div>Changelog</div>
      </div>

      <div className="flex items-center gap-3">
        {socialHandles.map((handle) => (
          <img
            src={handle.src}
            alt={handle.alt}
            className="h-8 w-8 rounded-lg bg-neutral-500"
          />
        ))}
      </div>
    </div>
  );
};
