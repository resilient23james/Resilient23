export const metadata = {
  title: 'Mecánica Móvil | Resilient Commercial Solutions',
  description: 'Mantenimiento de flota en sitio y reparaciones de emergencia para vehículos y equipos comerciales.'
};
export default function Page(){return (<main className="container section">
  <h1 className="h1 mb-4">Mecánica Móvil — Flota y Equipos en Sitio</h1>
  <p className="sub mb-8">Mantenga su flota en movimiento con rutas PM y respuesta rápida a fallas.</p>
  <div className="grid lg:grid-cols-2 gap-6 mb-12">
    <div className="card"><h2 className="h2 mb-2">Mantenimiento</h2><ul className="list-disc pl-6 space-y-2 text-gray-300">
      <li>PM A/B/C con bitácoras digitales</li><li>Aceite, filtros, bandas, mangueras, baterías</li><li>Frenos y llantas</li><li>Diagnóstico de enfriamiento y A/C</li>
    </ul></div>
    <div className="card"><h2 className="h2 mb-2">Emergencia & Obra</h2><ul className="list-disc pl-6 space-y-2 text-gray-300">
      <li>Arranques, cambio de baterías, combustible</li><li>Arrancador/alternador</li><li>Diagnóstico OBD‑II en sitio</li>
    </ul></div>
  </div>
  <div className="flex gap-3"><a href="/es/quote" className="btn btn-primary">Programar Servicio</a><a href="/es/vendor-signup" className="btn btn-outline">Ser Proveedor Mecánico</a></div>
</main>);}
