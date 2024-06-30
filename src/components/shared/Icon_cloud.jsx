import IconCloud from "./magicui/icon_cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",

  "react",
  "nextjs",
  "android",
  "html5",
  "css3",
  "node",
  "express",
  "nextdotjs",
  "prisma",
  "mongodb",
  "postgresql",
  "firebase",
  "expo",
  "vercel",
  "electron",
  "pandas",
  "scikit-learn",
  "flask",
  "django",
  "materialui",
  "sqlite",
  "gsap",

  "docker",
  "git",

  "github",

  "visualstudiocode",

  "figma",
  "python",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20  pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
