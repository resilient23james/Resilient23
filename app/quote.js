export const metadata = { title: 'Get a Quote | Resilient Commercial Solutions' };
export default function Page(){
  return (
    <main className="container section">
      <h1 className="h1 mb-4">Get a Quote</h1>
      <p className="mb-6 sub">Tell us about your facility needs and we’ll respond fast.</p>
      <button className="btn btn-primary" onClick={()=>window.dispatchEvent(new CustomEvent('shay:open',{detail:{mode:'lead'}}))}>Open Quote Form</button>
    </main>
  );
}
