import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for static export
  },
  turbopack: {
    root: "/Users/yogeshwarpatel/Workspace/PrinceHardwareAndSanitaryStore",
  },
};

export default nextConfig;
