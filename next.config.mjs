/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  async rewrites() {
    return [
      // Allow sitemap.xml to be served as static file from /public
      {
        source: "/sitemap.xml",
        destination: "/sitemap.xml",
      },
      // Global fallback (misalnya ke homepage)
      {
        source: "/:path*",
        destination: "/",
      },
    ];
  },
};

export default nextConfig;
