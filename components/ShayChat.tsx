'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { routeFreeText } from './shayRouter';

type Chat = { role: 'shay' | 'you'; text: string };

export default function ShayChat() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [feed, setFeed] = useState<Chat[]>([
    { role: 'shay', text: "I’m Shay — America’s trusted facility partner. Ask about cleaning, restoration, mobile mechanic, or start a quote." }
  ]);
  const [typing, setTyping] = useState(false);
  const feedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!feedRef.current) return;
    feedRef.current.scrollTo({ top: feedRef.current.scrollHeight, behavior: 'smooth' });
  }, [feed, open]);

  function push(role: 'shay' | 'you', text: string) {
    setFeed(prev => [...prev, { role, text }]);
  }

  function send(text: string) {
    const msg = text.trim();
    if (!msg) return;
    push('you', msg);
    setValue('');
    setTyping(true);
    const reply = routeFreeText(msg);
    setTimeout(() => {
      push('shay', reply);
      setTyping(false);
    }, 350);
  }

  return (
    <>
      <button className="shay-launch" aria-label="Chat with Shay" onClick={() => setOpen(v => !v)}>
        <Image src="/shay-avatar.jpg?v=2" alt="Shay" width={44} height={44} className="rounded-full" />
      </button>

      {open && (
        <div className="shay-panel" role="dialog" aria-label="Shay virtual consultant">
          <div className="shay-header" style={{display:'flex',alignItems:'center',gap:8}}>
            <Image src="/shay-avatar.jpg?v=2" alt="Shay" width={28} height={28} className="rounded-full" />
            <span>Virtual Consultant</span>
          </div>

          <div className="shay-feed" ref={feedRef}>
            {feed.map((m, i) => (
              <div key={i} className={`msg ${m.role}`}>{m.text}</div>
            ))}
            {typing && <div className="msg shay">Typing…</div>}
          </div>

          <div className="shay-inputRow">
            <input
              className="shay-input"
              placeholder="Type here…"
              value={value}
              onChange={e => setValue(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send(value)}
            />
            <button className="shay-send" onClick={() => send(value)}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}