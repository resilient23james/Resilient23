import { site } from "@/content/resilient";
export default function Page(){
  return (
    <main className="px-6">
      <h1 className="text-5xl font-extrabold max-w-[12ch]">Resilient Commercial Solutions</h1>
      <p className="mt-6 text-xl">One team. Three divisions. Total resilience.</p>
    </main>
  );
}


/* --- Injected: Resilient divisions (safe append) --- */
export function ResilientDivisions() {
  return (
    <section className="container grid" style={{padding:'24px 16px'}}>
      {site.divisions.map(d => (
        <article key={d.key} className="card" style={{background:'#13161a',border:'1px solid #222833',borderRadius:12,padding:16,margin:8}}>
          <h3 style={{marginTop:0}}>{d.name}</h3>
          <p style={{opacity:.9}}>{d.blurb}</p>
        </article>
      ))}
    </section>
  );
}

/* auto-mount divisions under the page content if a default export exists */
try {
  const Orig = exports.default;
  if (typeof Orig === 'function') {
    exports.default = function WrappedPage(props){
      const el = Orig(props);
      return (
        <>
          {el}
          <ResilientDivisions/>
        </>
      );
    }
  }
} catch {}
