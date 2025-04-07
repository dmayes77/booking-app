/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "res.cloudinary.com" },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/images/:path*",
        destination:
          "https://res.cloudinary.com/mayes-auto-detailing-llc/image/upload/mad-web-app/:path*",
      },
      {
        source: "/videos/:path*",
        destination:
          "https://res.cloudinary.com/mayes-auto-detailing-llc/video/upload/mad-web-app/videos/:path*",
      },
    ];
  },
  async headers() {
    return [];
  },
  productionBrowserSourceMaps: true, // Enable source maps in production
};

module.exports = nextConfig;
