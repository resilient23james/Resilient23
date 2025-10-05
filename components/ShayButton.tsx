'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ShayButton() {
  const [open, setOpen] = useState(false);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [open]);

  return (
    <>
      {/* Floating avatar button */}
      <button
        aria-label="Open Shay Assistant"
        onClick={() => setOpen(true)}
        className="
          fixed bottom-6 right-6 z-50
          h-16 w-16 rounded-full shadow-lg ring-2 ring-white/70
          overflow-hidden bg-white
          before:absolute before:inset-0 before:rounded-full
          before:animate-ping before:bg-red-500/20
        "
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        {/* Shay avatar */}
        <Image
          src="/shay-avatar.jpg"
          alt="Shay"
          fill
          priority
          sizes="64px"
          className="object-cover"
        />
      </button>

      {/* Overlay + dialog */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center sm:justify-center"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          {/* Card */}
          <div className="relative z-10 m-4 w-full sm:max-w-lg rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center gap-3 border-b px-4 py-3">
              <div className="relative h-8 w-8 overflow-hidden rounded-full ring-1 ring-black/10">
                <Image
                  src="/shay-avatar.jpg"
                  alt="Shay"
                  fill
                  sizes="32px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="font-semibold">Shay Assistant</div>
              <button
                onClick={() => setOpen(false)}
                className="ml-auto rounded px-2 py-1 text-sm text-gray-600 hover:bg-gray-100"
                aria-label="Close"
              >
                Close
              </button>
            </div>

            <div className="px-4 pb-4 pt-3">
              <p className="text-sm text-gray-700">
                Ask in English or Spanish. Example:{' '}
                <em>“Cotización de limpieza para oficina de 5,000 pies²”.</em>
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  // hook your runtime later (Netlify / API route / etc.)
                }}
                className="mt-3 flex gap-2"
              >
                <input
                  type="text"
                  placeholder="Type here…"
                  className="flex-1 rounded-lg border px-3 py-2 outline-none focus:ring"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-black px-4 py-2 text-white"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
