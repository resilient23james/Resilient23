
'use client';
import { useEffect, useRef, useState } from 'react';
import { cannedReply, quickPills, routeFreeText } from './shayRouter';

type Chat = { role: 'shay' | 'you'; text: string };

export default function ShayChat() {
  const [open, setOpen] = useState(false);
  const [feed, setFeed] = useState<Chat[]>([
    { role: 'shay', text: "I’m Shay. I can pick services, explain scope, and start a private quote. How can I help?" }
  ]);
  const [value, setValue] = useState('');
  const feedRef = useRef<HTMLDivElement | null>(null);
  const [pillsHidden, setPillsHidden] = useState(false);

  useEffect(() => {
    const el = feedRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [feed, open]);

  function push(role: 'shay' | 'you', text: string) {
    setFeed(prev => [...prev, { role, text }]);
  }

  function send(text: string) {
    if (!text.trim()) return;
    push('you', text.trim());
    const reply = routeFreeText(text);
    setTimeout(() => push('shay', reply), 200);
    setValue('');
    setPillsHidden(true); // convert to strict chat after first user send
  }

  function pillClick(payload: string) {
    push('you', payload);
    push('shay', cannedReply(payload));
    setPillsHidden(true);
  }

  return (
    <>
      <button className="shay-launch" aria-label="Chat with Shay" onClick={() => setOpen(v => !v)}>
        <img src="/avatar-shay.png" alt="Shay" />
      </button>

      {open && (
        <div className="shay-panel" role="dialog" aria-label="Shay virtual consultant">
          <div className="shay-header">Virtual Consultant</div>

          {!pillsHidden && (
            <div className="shay-pills">
              {quickPills.map(p => (
                <button key={p.id} className="shay-pill" onClick={() => pillClick(p.payload)}>
                  {p.label}
                </button>
              ))}
            </div>
          )}

          <div className="shay-feed" ref={feedRef}>
            {feed.map((m, i) => (
              <div key={i} className={`msg ${m.role}`}>{m.text}</div>
            ))}
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
