/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  experimental: { serverActions: { bodySizeLimit: '2mb' } },
  env: {
    FROM_EMAIL: process.env.FROM_EMAIL,
    LEADS_TO: process.env.LEADS_TO,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY
  }
};
export default nextConfig;