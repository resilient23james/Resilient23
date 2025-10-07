'use client';
import { usePathname } from 'next/navigation';
export default function ShayAssistant(){
  const pathname = usePathname() || '/';
  const isES = pathname.startsWith('/es');
  const labels = isES
    ? {quote:'Cotización', vendor:'Proveedor', restoration:'Restauración', mechanic:'Mecánica'}
    : {quote:'Quote', vendor:'Vendor', restoration:'Restoration', mechanic:'Mechanic'};
  const click = (mode)=> window.dispatchEvent(new CustomEvent('shay:open',{detail:{mode}}));
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-2">
      <button className="btn btn-primary" onClick={()=>click('lead')}>{labels.quote}</button>
      <button className="btn btn-outline" onClick={()=>click('vendor')}>{labels.vendor}</button>
      <button className="btn btn-outline" onClick={()=>click('restoration')}>{labels.restoration}</button>
      <button className="btn btn-outline" onClick={()=>click('mechanic')}>{labels.mechanic}</button>
    </div>
  );
}
