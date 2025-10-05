'use client';

export default function Careers(){
  async function submit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const res = await fetch('/.netlify/functions/send-email', { method:'POST', body:data });
    alert(res.ok ? 'Thanks — we’ll be in touch.' : 'Submission failed.');
    if(res.ok) form.reset();
  }
  return (
    <main className="px-6 max-w-2xl">
      <h1 className="text-4xl font-bold mb-6">Careers</h1>
      <form onSubmit={submit} className="grid gap-4">
        <input name="name" placeholder="Name" required className="border rounded px-3 py-2" />
        <input name="trade" placeholder="Trade" required className="border rounded px-3 py-2" />
        <input name="phone" placeholder="Phone" required className="border rounded px-3 py-2" />
        <input name="resume" type="file" accept=".pdf,.doc,.docx" required className="border rounded px-3 py-2" />
        <button className="bg-black text-white rounded px-4 py-2 w-fit">Submit</button>
      </form>
    </main>
  );
}
