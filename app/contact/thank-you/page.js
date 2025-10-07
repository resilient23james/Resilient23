import Breadcrumbs from '@/components/Breadcrumbs';

export default function Page() {
  return (
    <main>
      <Breadcrumbs />
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Thanks — we’ve got your request.</h1>
      <p className="text-gray-300 mb-6">Our team will reach out shortly. If it’s urgent, call us 24/7.</p>
      <div className="space-x-3">
        <a href="/services" className="inline-block px-4 py-2 rounded bg-white/10 border border-white/10 hover:bg-white/20">Back to Services</a>
        <a href="/" className="inline-block px-4 py-2 rounded bg-red-600 text-white hover:bg-red-500">Return Home</a>
      </div>
    </main>
  );
}
