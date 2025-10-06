'use client';
import Image from 'next/image';

export default function ShayButton() {
  // Minimal floating button that opens the cross-site modal via an event.
  function open(mode: 'lead'|'vendor'|'restoration'|'mechanic' = 'lead') {
    window.dispatchEvent(new CustomEvent('shay:open', { detail: { mode } }));
  }
  return (
    <button
      aria-label="Open Shay Assistant"
      onClick={() => open('lead')}
      className="fixed bottom-5 right-5 rounded-full border border-white/10 bg-[#1f1f22] p-2 shadow-lg hover:scale-105 transition"
    >
      <Image src="/shay.png" width={56} height={56} alt="Shay Assistant" />
    </button>
  );
}
