'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ShayButton() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [open]);

  return (
    <>
      {/* the floating avatar button */}
      <button
        aria-label="Open Shay Assistant"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 rounded-full shadow-lg bg-white/90 ring-1 ring-black/10 overflow-hidden w-[84px] h-[84px]"
      >
        <img
          src="/shay-avatar.jpg?v=2"
          alt="Shay"
          width={84}
          height={84}
          className="w-full h-full object-cover"
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/avatar-fallback.png'; }}
        />
      </button>

      {/* modal */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm">
          <div className="absolute inset-x-4 bottom-6 md:bottom-auto md:inset-x-0 md:mx-auto md:top-24 md:w-[560px] rounded-2xl bg-neutral-900 text-white shadow-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <img src="/shay-avatar.jpg?v=2" alt="Shay" width={36} height={36} className="rounded-full" />
              <h3 className="text-xl font-semibold">Shay Assistant</h3>
            </div>
            <p className="text-neutral-200">
              Hola/Hello — this is a placeholder chat. The visual proves the avatar bubble is wired correctly.
            </p>
            <div className="mt-5 text-right">
              <button
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-xl bg-white text-black px-5 py-2 font-medium shadow"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
