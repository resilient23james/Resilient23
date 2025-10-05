import "./globals.css";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

const ShayMount = dynamic(() => import("@/components/ShayMount"), { ssr: false });

export const metadata: Metadata = {
  title: "Resilient Commercial Solutions",
  description: "Facility Services • Janitorial • Floor Care • Nationwide Vendor Network"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ShayMount />
      </body>
    </html>
  );
}
