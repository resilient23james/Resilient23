'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function ShayAssistant(){
  const pathname = usePathname();
  const isES = pathname?.startsWith('/es');
  const t = isES ? { quote:'Cotización', vendor:'Proveedor', restoration:'Restauración', mechanic:'Mecánica' }
                 : { quote:'Quote', vendor:'Vendor', restoration:'Restoration', mechanic:'Mechanic' };
  function open(mode){ window.dispatchEvent(new CustomEvent('shay:open', { detail:{ mode } })); }
  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-2">
      <button onClick={()=>open('lead')} className="btn btn-primary">{t.quote}</button>
      <button onClick={()=>open('vendor')} className="btn btn-outline">{t.vendor}</button>
      <button onClick={()=>open('restoration')} className="btn btn-outline">{t.restoration}</button>
      <button onClick={()=>open('mechanic')} className="btn btn-outline">{t.mechanic}</button>
      <Image src="/shay.png" alt="Shay" width={56} height={56}/>
    </div>
  );
}
