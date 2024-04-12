/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['firebasestorage.googleapis.com']
    },
    distDir:'build',
    reactStrictMode:false
};

export default nextConfig;
