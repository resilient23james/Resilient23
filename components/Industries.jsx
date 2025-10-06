export default function Industries({ locale='en' }){
  const t=(en,es)=>locale==='es'?es:en;
  const items=[
    {k:'government',en:'Government',es:'Gobierno'},
    {k:'healthcare',en:'Healthcare',es:'Salud'},
    {k:'education',en:'Education',es:'Educación'},
    {k:'multifamily',en:'Multi-Family',es:'Multifamiliar'},
    {k:'industrial',en:'Industrial',es:'Industrial'},
  ];
  return (<section className="section"><div className="container">
    <h2 className="h2 mb-6">{t('Industries Served','Industrias Atendidas')}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {items.map(x=>(<div key={x.k} className="card"><h3 className="font-semibold mb-2">{t(x.en,x.es)}</h3><p className="text-sm text-gray-300">{t('Tailored programs with compliance and safety best practices.','Programas a medida con cumplimiento y mejores prácticas de seguridad.')}</p></div>))}
    </div>
  </div></section>);
}
