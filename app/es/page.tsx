import ServiceCard from '../components/ServiceCard';   // in app/page.tsx
import ServiceCard from '../../components/ServiceCard'; // in app/es/page.tsx
export default function Page(){
  return(<main className="px-4 md:px-6 pb-28">
    <section className="space-y-6 pt-6 md:pt-10">
      <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-tight">Soluciones</h1>
      <p className="text-2xl md:text-3xl text-zinc-600 dark:text-zinc-300 max-w-3xl">Un equipo. Tres divisiones. Resiliencia total.</p>
    </section>
    <section className="mt-10 grid gap-6">
      <ServiceCard title="Limpieza" desc="Programas de conserjería, porteros, cuidado de pisos y limpieza post-construcción."/>
      <ServiceCard title="Mecánico Móvil" desc="Reparación en sitio de flotas y equipos, mantenimiento preventivo y despacho rápido."/>
      <ServiceCard title="Restauración" desc="Agua, fuego, moho, cierres de emergencia y respuesta 24/7."/>
    </section>
    <ShayButton/>
  </main>);
}
