import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "parkimmo.app" }],
        destination: "https://kpkc.app/immo",
        permanent: false,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.parkimmo.app" }],
        destination: "https://kpkc.app/immo",
        permanent: false,
      },
    ]
  },
}

export default nextConfig
