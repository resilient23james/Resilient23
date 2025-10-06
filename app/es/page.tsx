import ServiceCard from '../../components/ServiceCard';

export default function Page() {
  return (
    <main className="px-4 md:px-6 pb-28">
      <section className="space-y-6 pt-6 md:pt-10">
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
    </main>
  );
}
