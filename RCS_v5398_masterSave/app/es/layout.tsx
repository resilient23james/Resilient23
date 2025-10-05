import "../globals.css";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

const ShayMount = dynamic(() => import("@/components/ShayMount"), { ssr: false });

export const metadata: Metadata = {
  title: "Resilient Commercial Solutions (ES)",
  description: "Servicios de instalaciones • Limpieza • Red nacional de proveedores"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
        <ShayMount />
      </body>
    </html>
  );
}
