'use client';
import Image from 'next/image';
export default function ShayModal({open,onClose}:{open:boolean;onClose:()=>void}){
  if(!open) return null;
  return(<div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-4">
    <div className="w-full max-w-xl rounded-2xl bg-white dark:bg-zinc-900 shadow-2xl border border-black/10 p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="relative h-9 w-9 rounded-full overflow-hidden">
          <Image src="/shay-avatar.webp" alt="Shay" fill className="object-cover"/>
        </div>
        <h2 className="text-xl font-semibold">Shay Assistant</h2>
      </div>
      <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
        Hola/Hello — this is a placeholder chat. The visual proves the avatar bubble is wired correctly.
      </p>
      <div className="mt-6 flex justify-end">
        <button onClick={onClose} className="px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition">Close</button>
      </div>
    </div>
  </div>);
}