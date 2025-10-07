'use client';

export default function ContactForm() {
  return (
    <form encType="multipart/form-data"
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/contact/thank-you"
      className="space-y-4 max-w-xl"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-300 mb-1">Full Name</label>
          <input name="name" required className="w-full rounded bg-white/5 border border-white/10 px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-1">Company</label>
          <input name="company" className="w-full rounded bg-white/5 border border-white/10 px-3 py-2" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-300 mb-1">Email</label>
          <input type="email" name="email" required className="w-full rounded bg-white/5 border border-white/10 px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-1">Phone</label>
          <input name="phone" className="w-full rounded bg-white/5 border border-white/10 px-3 py-2" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-300 mb-1">Service</label>
          <select name="service" className="w-full rounded bg-white/5 border border-white/10 px-3 py-2">
            <option>Janitorial & Facility</option>
            <option>Restoration & Rehab</option>
            <option>Fleet & Mobile Mechanic</option>
            <option>Specialty Facility</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-1">Location</label>
          <input name="location" className="w-full rounded bg-white/5 border border-white/10 px-3 py-2" />
        </div>
      </div>

      <div>
        <label className="block text-sm text-gray-300 mb-1">Message</label>
        <textarea name="message" rows={5} className="w-full rounded bg-white/5 border border-white/10 px-3 py-2" placeholder="Tell us about your facility, fleet size, or scope..." />
      </div>

      <div>
        <label className="block text-sm text-gray-300 mb-1">Attachment (PDF, optional)</label>
        <input type="file" name="attachment" accept="application/pdf" className="w-full rounded bg-white/5 border border-white/10 px-3 py-2" />
      </div>

      <label className="inline-flex items-center gap-2 text-sm text-gray-300">
        <input type="checkbox" name="consent" required className="rounded border-white/10 bg-white/5" /> I agree to be contacted regarding this request.
      </label>

      <div>
        <button type="submit" className="mt-2 inline-flex items-center px-5 py-3 rounded bg-red-600 text-white hover:bg-red-500">
          Request a Quote
        </button>
      </div>
    </form>
  );
}
