export default function HomeES() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-extrabold leading-tight mb-6">
        Soluciones Comerciales Resilient
      </h1>
      <p className="text-xl text-gray-600 mb-10">
        Un equipo. Tres divisiones. Resiliencia total.
      </p>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border p-5">
          <h3 className="font-semibold text-lg">Limpieza</h3>
          <p className="text-sm text-gray-600">
            Servicio diario, porteros, cuidado de pisos y limpieza post‑construcción.
          </p>
        </div>
        <div className="rounded-xl border p-5">
          <h3 className="font-semibold text-lg">Paisajismo</h3>
          <p className="text-sm text-gray-600">
            Mantenimiento, mejoras, riego y color de temporada.
          </p>
        </div>
        <div className="rounded-xl border p-5">
          <h3 className="font-semibold text-lg">Restauración</h3>
          <p className="text-sm text-gray-600">
            Agua, fuego, moho, cierre de emergencia y respuesta 24/7.
          </p>
        </div>
      </section>
    </main>
  );
}
