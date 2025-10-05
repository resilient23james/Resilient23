import ShayButton from '@components/ShayButton';
import ShayAssistant from '@components/ShayAssistant';
export const dynamic = 'force-static';
export default function Page(){
  return (
    <main className="container">
      <section className="hero">
        <h1>Facility Services You Can Trust</h1>
        <p>Resilient Commercial Solutions LLC delivers dependable, compliant, high‑quality cleaning and facility care.</p>
        <div style={{display:'flex', gap:'12px', marginTop:'14px'}}>
          <ShayButton href="/quote">Get a Quote</ShayButton>
          <ShayButton variant="secondary" href="/#services">View Services</ShayButton>
        </div>
      </section>
      <ShayAssistant />
    </main>
  );
}
