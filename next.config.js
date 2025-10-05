/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  experimental: { serverActions: { bodySizeLimit: '2mb' } },
  env: {
  FROM_EMAIL: process.env.FROM_EMAIL,
  LEADS_TO: process.env.LEADS_TO,
  SUPABASE_URL: process.env.SUPABASE_URL,
  SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY
  // ❌ Do not include SENDGRID_API_KEY here
}
};
export default nextConfig;
