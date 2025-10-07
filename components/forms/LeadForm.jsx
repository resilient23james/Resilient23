'use client';

export default function LeadForm({ service }) {
  const formName = `lead-${service?.toLowerCase().replace(/[^a-z0-9]+/g,'-') || 'service'}`;
  return (
    <form encType="multipart/form-data"
      name={formName}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/contact/thank-you"
      className="space-y-3 p-4 rounded border border-white/10 bg-white/5 max-w-md"
    >
      <input type="hidden" name="form-name" value={formName} />
      <input type="hidden" name="service" value={service || 'Service Inquiry'} />
      <p className="hidden">
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input name="name" required placeholder="Name" className="rounded bg-black/30 border border-white/10 px-3 py-2" />
        <input type="email" name="email" required placeholder="Email" className="rounded bg-black/30 border border-white/10 px-3 py-2" />
      </div>
      <input name="phone" placeholder="Phone" className="w-full rounded bg-black/30 border border-white/10 px-3 py-2" />
      <textarea name="message" rows={3} placeholder="Scope or timeline..." className="w-full rounded bg-black/30 border border-white/10 px-3 py-2" />
      <input type="file" name="attachment" accept="application/pdf" className="w-full rounded bg-black/30 border border-white/10 px-3 py-2" />

      <button type="submit" className="inline-flex items-center px-4 py-2 rounded bg-red-600 text-white hover:bg-red-500">
        Get a fast quote
      </button>
    </form>
  );
}
