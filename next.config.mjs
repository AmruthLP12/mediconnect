/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript:{
        ignoreBuildErrors:true,
    },
    eslint :{
        ignoreDuringBuilds: true,
    }
};

module.exports = {
  images: {
    domains: ['your-domain.com'],
  },
};


export default nextConfig;
