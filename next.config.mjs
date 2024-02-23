/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, env: {
    API_URL: process.env.REACT_APP_URL,
    API_ENV: process.env.REACT_APP_ENV,
  }
};

export default nextConfig;
