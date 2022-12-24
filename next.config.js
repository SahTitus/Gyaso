/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");


const withPWA = require("next-pwa")({
  runtimeCaching,
dest: "public",
register: true,
disable: process.env.NODE_ENV === "development",
skipWaiting: true,
});


const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: false,
  images: {
    domains: [
      "img.freepik.com",
      "img.livestrong.com",
      "upload.wikimedia.org",
      "www.wikihow.com",
      "cdn.sanity.io",
      "www.health.harvard.edu",
      "domf5oio6qrcr.cloudfront.net",
      "www.freelogovectors.net",
      "play-lh.googleusercontent.com",
      "intmedicaltreatment.com",
      "cdn.comparably.com",
      "www.santeplusmag.com",
      "media.self.com",
      "greatpeopleinside.com",
      "encrypted-tbn0.gstatic.com",
      "beta.mountelizabeth.com.sg",
      "newsghana.com.gh",
      "www.emploi.ma",
      "www.eatthis.com",
      "artofhealthyliving.com",
      "www.shape.com",
      "beta.mountelizabeth.com",
      "cdn.shopify.com",
      "undefined",
      "images.onhealth.com",
      "www.mindbodygreen.com",
      "res.cloudinary.com",
      "20fd661yccar325znz1e9bdl-wpengine.netdna-ssl.com",
      "i0.wp.com",
      "mindbodygreen-res.cloudinary.com",
      "peopleshistorynhs.org",
      "www.jagranimages.com",
      "images.everydayhealth.com",
      "stylesatlife.com",
      "www.kindpng.com",
      "www.pngitem.com",
      "www.wellandgood.com",
      "img.webmd.com",
      "manmatters.com",
      "patient.info",
      "patient.azureedge.net",
      "www.verywellhealth.com",
      "justhealthlife.com",
      "prestigemensmedical.com",
      "cdn.lifehack.org",
      "dailyburn.com",
      "logodix.com",
      "scontent.facc6-1.fna.fbcdn.net",
      "images.onlymyhealth.com",
    ],
  },
});
module.exports = nextConfig;