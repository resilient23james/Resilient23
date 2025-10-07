'use client';
export default function Hero(){
  return (
    <section className="container section">
      <h1 className="h1 mb-4">The Future of Facility Services — Built on Excellence, Powered by People.</h1>
      <p className="sub mb-6">Integrated janitorial, restoration, and mobile mechanic solutions across Florida with rapid response and measurable quality.</p>
      <div className="flex gap-3">
        <button className="btn btn-primary" onClick={()=>window.dispatchEvent(new CustomEvent('shay:open',{detail:{mode:'lead'}}))}>Get a Quote</button>
        <button className="btn btn-outline" onClick={()=>window.dispatchEvent(new CustomEvent('shay:open',{detail:{mode:'vendor'}}))}>Join Our Vendor Network</button>
      </div>
    </section>
  );
}
