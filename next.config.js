/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

    images: {
      domains: ["img.freepik.com", "cdn.comparably.com", "undefined", "www.mindbodygreen.com", "res.cloudinary.com",  "i0.wp.com", "mindbodygreen-res.cloudinary.com" ],

    },
  }



module.exports = nextConfig
