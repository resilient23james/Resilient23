import ServiceCard from '../../components/ServiceCard';

export default function Page() {
  return (
    <main className="px-4 md:px-6 pb-28">
      <section className="pt-6 md:pt-10">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Su socio de confianza en limpieza, restauración y mantenimiento.
        </h2>
        <p style={{color:'#cbd5e1'}} className="mt-3">
          Servicio de nivel Fortune-500 con atención de pequeña empresa. De conserjería y porteros a mecánico móvil y restauración, mantenemos su operación limpia, segura y en marcha.
        </p>
      </section>

      <section className="space-y-6 pt-8">
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