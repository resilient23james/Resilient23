---
import Base from "../layouts/Base.astro";

const master = `Thank you for reaching out to Resilient Commercial Solutions LLC.
We are a licensed and insured facility services provider committed to quality, compliance, and reliability.
Florida LLC (Active since Nov 6, 2023; Document #L23000503930).
Insurance: Hiscox Commercial General Liability — $2M per occurrence, $2M aggregate (effective Aug 25, 2025–Aug 25, 2026).
Please share your scope, timeline, and site details and we will provide a clear, itemized quote.`;

const closer = `Resilient Commercial Solutions LLC is fully insured (Hiscox CGL $2M/$2M) and registered as a Florida LLC.
We operate with documented SOPs, safety-first practices, and verifiable completion.
If the scope and schedule look good, we can confirm crew assignment and start date today.`;

const aPlus = `Appreciate the opportunity. Our approach is simple: plan the work, execute to spec, verify completion.
We provide checklists, photo verification, and a single point of contact so there are no surprises.
Happy to align on budget and start with a trial service to earn your trust.`;
---

<Base title="Response Library — Resilient Commercial Solutions LLC">
  <h1 class="mb-6 text-3xl font-extrabold tracking-tight">Response Library</h1>

  <div class="space-y-8">
    <section class="rounded-lg border border-slate-200 bg-white p-5">
      <h2 class="mb-2 text-xl font-bold">Master Response</h2>
      <textarea readonly class="h-48 w-full rounded-md border border-slate-300 p-3">{master}</textarea>
      <button
        class="mt-3 rounded-md bg-sky-600 px-4 py-2 text-white"
        onclick="navigator.clipboard.writeText(document.querySelector('#master').value)"
        hidden
      >Copy</button>
    </section>

    <section class="rounded-lg border border-slate-200 bg-white p-5">
      <h2 class="mb-2 text-xl font-bold">Closer Response</h2>
      <textarea readonly class="h-40 w-full rounded-md border border-slate-300 p-3">{closer}</textarea>
    </section>

    <section class="rounded-lg border border-slate-200 bg-white p-5">
      <h2 class="mb-2 text-xl font-bold">A+ Response</h2>
      <textarea readonly class="h-40 w-full rounded-md border border-slate-300 p-3">{aPlus}</textarea>
    </section>
  </div>
</Base>
