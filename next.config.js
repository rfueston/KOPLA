/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: {
    //     appDir: false,
    // },
    async rewrites() {
        return [
          {
            source: "/",
            destination: "/login",
          }
        ];
      },
      async redirects() {
        return [
          {
            source: "/login",
            destination: "/",
            statusCode: 301,
          }
        ];
      },
}

module.exports = nextConfig;
