export default function Industries(){
  const items = ['Government','Healthcare','Education','Multi-Family','Industrial'];
  return (
    <section className="container section">
      <h2 className="h2 mb-4">Industries Served</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {items.map(x=> <div key={x} className="card text-center">{x}</div>)}
      </div>
    </section>
  );
}
