/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',            // required for `next export`
  images: { unoptimized: true } // avoids image optimizer on Netlify
};
module.exports = nextConfig;
