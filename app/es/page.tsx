import React from 'react';
import ServiceCard from '../../components/ServiceCard';
import dynamic from 'next/dynamic';

const ShayAssistant = dynamic(() => import('../../components/ShayAssistant').catch(() => ({ default: () => null })), { ssr: false });

export const metadata = { title: 'Soluciones Comerciales Resilient' };

export default function Page() {
  return (
    <main className="px-4 md:px-6 pb-28">
      <section className="space-y-3 pt-6 md:pt-10">
        <h1 className="sr-only">Soluciones Comerciales Resilient</h1>
        <p className="text-2xl md:text-[28px] leading-snug text-neutral-700 max-w-3xl">
          De Servicios de Instalaciones a Mecánico Móvil y Restauración — un solo equipo con <span className="font-semibold">resiliencia total</span>.
        </p>
      </section>

      <section className="mt-10 grid gap-6">
        <ServiceCard
          title="Servicios de Instalaciones"
          desc="Programas de conserjería, porteros, cuidado de pisos y limpieza post-construcción."
        />
        <ServiceCard
          title="Mecánico Móvil"
          desc="Reparación en sitio de flotas y equipos, mantenimiento preventivo y despacho rápido."
        />
        <ServiceCard
          title="Restauración"
          desc="Agua, fuego, moho, cierres de emergencia y respuesta 24/7."
        />
      </section>

      <ShayAssistant />
    </main>
  );
}
