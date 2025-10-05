'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ShayButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [open]);

  return (
    <>
      {/* Floating avatar button */}
      <button
        aria-label="Open Shay Assistant"
        onClick={() => setOpen(true)}
        style={{
          position: 'fixed',
          right: 20,
          bottom: 20,
          width: 72,
          height: 72,
          borderRadius: 9999,
          boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
          overflow: 'hidden',
          border: '0',
          background: '#fff'
        }}
      >
        <Image
          src="/shay-avatar.jpg"
          alt="Shay"
          fill
          sizes="72px"
          style={{ objectFit: 'cover' }}
        />
      </button>

      {/* Very simple modal placeholder so you see it works */}
      {open ? (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.4)',
            display: 'grid',
            placeItems: 'center',
            zIndex: 50
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ background: '#fff', borderRadius: 12, padding: 20, width: 360 }}
          >
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10 }}>
              <div style={{ position: 'relative', width: 36, height: 36, borderRadius: 9999, overflow: 'hidden' }}>
                <Image src="/shay-avatar.jpg" alt="Shay" fill sizes="36px" style={{ objectFit: 'cover' }} />
              </div>
              <strong>Shay Assistant</strong>
            </div>
            <p style={{ color: '#444', fontSize: 14 }}>
              Hola/Hello — this is a placeholder chat. The visual proves the avatar bubble is wired correctly.
            </p>
            <button onClick={() => setOpen(false)} style={{ marginTop: 12, padding: '8px 12px', borderRadius: 8, background: '#000', color: '#fff' }}>Close</button>
          </div>
        </div>
      ) : null}
    </>
  );
}
