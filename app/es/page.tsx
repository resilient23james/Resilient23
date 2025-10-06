import ServiceCard from '../components/ServiceCard';   // in app/page.tsx
import ServiceCard from '../../components/ServiceCard'; // app/es/page.tsx

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="sr-only">Soluciones</h1>

      <section className="mt-10 grid gap-6">
        <ServiceCard
          title="Limpieza"
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
    </main>
  );
}
