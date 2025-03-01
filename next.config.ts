import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./src/utils/supabase-image-loader.ts",
  },
};

export default nextConfig;
