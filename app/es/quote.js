'use client';
export const metadata = { title: 'Cotización | Resilient Commercial Solutions' };
export default function Page(){
  return (
    <main className="container section">
      <h1 className="h1 mb-4">Cotización</h1>
      <p className="mb-6 sub">Compártanos su necesidad y responderemos de inmediato.</p>
      <button className="btn btn-primary" onClick={()=>window.dispatchEvent(new CustomEvent('shay:open',{detail:{mode:'lead'}}))}>Abrir Formulario</button>
    </main>
  );
}
