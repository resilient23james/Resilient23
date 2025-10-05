
'use client';
import { useState } from 'react';

export default function ShayBubble() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: 'Shay', text: 'Hi, I’m Shay — your virtual consultant!' }]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { from: 'User', text: input }, { from: 'Shay', text: 'Thanks! I’ll assist you shortly.' }];
    setMessages(newMessages);
    setInput('');
  };

  return (
    <div style={{position:'fixed', bottom:'20px', right:'20px', zIndex:9999}}>
      {open ? (
        <div style={{width:'300px', background:'#111', color:'#fff', borderRadius:'10px', padding:'1rem'}}>
          <div style={{height:'200px', overflowY:'auto', marginBottom:'1rem'}}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{textAlign: msg.from === 'Shay' ? 'left' : 'right'}}>
                <p><b>{msg.from}:</b> {msg.text}</p>
              </div>
            ))}
          </div>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type here..."
            style={{width:'80%', padding:'5px'}}
          />
          <button onClick={sendMessage} style={{width:'18%', background:'#e60000', color:'#fff'}}>Send</button>
        </div>
      ) : (
        <button onClick={() => setOpen(true)} style={{border:'none', background:'transparent'}}>
          <img src="/shay-avatar.png" alt="Shay" style={{width:'60px', borderRadius:'50%'}} />
        </button>
      )}
    </div>
  );
}
