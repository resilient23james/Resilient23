'use client';
import { useState } from 'react';

export default function Home() {
  const [form, setForm] = useState({name:'', email:'', message:''});
  const [status, setStatus] = useState('');

  async function submitLead(e){
    e.preventDefault();
    setStatus('Sending...');
    try {
      // Save to Supabase
      await fetch('/.netlify/functions/submitLead', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ ...form, source:'website' })
      });

      // Send email
      await fetch('/.netlify/functions/sendEmail', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(form)
      });

      setStatus('Thanks! We’ll be in touch.');
      setForm({name:'', email:'', message:''});
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    }
  }

  return (
    <main>
      <h1 style={{fontSize:40, marginBottom:8}}>Resilient Commercial Solutions</h1>
      <p style={{opacity:.8, marginBottom:24}}>Janitorial • Post-Construction • Day Porter • Floor Care • High Dusting</p>

      <section style={{background:'#161922', padding:24, borderRadius:16, border:'1px solid #2a2f3b'}}>
        <h2 style={{marginTop:0}}>Request a private quote</h2>
        <form onSubmit={submitLead} style={{display:'grid', gap:12, maxWidth:520}}>
          <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Your name" required style={input}/>
          <input value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="Your email" type="email" required style={input}/>
          <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} placeholder="What do you need?" rows={5} style={input}/>
          <button type="submit" style={btn}>Send</button>
        </form>
        <div style={{marginTop:10, minHeight:20, opacity:.9}}>{status}</div>
      </section>
    </main>
  );
}

const input = {
  background:'#0f1320', color:'#e8e8ea', border:'1px solid #2a2f3b', borderRadius:10, padding:'12px 14px', outline:'none'
};
const btn = {
  background:'#e64646', color:'#fff', border:'none', borderRadius:10, padding:'12px 16px', cursor:'pointer', fontWeight:700
};
