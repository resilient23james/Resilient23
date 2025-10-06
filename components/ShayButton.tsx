'use client';
import Image from 'next/image';
export default function ShayButton(){
  return (
    <button onClick={()=>window.dispatchEvent(new CustomEvent('shay:open',{detail:{mode:'lead'}}))}
      className="fixed bottom-5 right-5 rounded-full p-2 border border-white/10 bg-[#1f1f22]">
      <Image src="/shay.png" width={56} height={56} alt="Shay"/>
    </button>
  );
}
