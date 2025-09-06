// src/data/responses.ts
// Edit any wording you want. These are plain strings.

export const responses = {
  Master: `Thank you for reaching out to Resilient Commercial Solutions LLC.
We are a licensed and insured facility services provider committed to quality, compliance, and reliability.
How can we support your facility or staffing needs today?`,

  Closer: `Resilient Commercial Solutions LLC is fully insured (liability coverage up to $2M) and registered in Florida.
We specialize in professional janitorial and facility staffing solutions with compliant onboarding and training.
If we can lock in a site walk or proposal review this week, we’ll show how we lower risk and deliver consistent results.
Would Tuesday or Thursday work for a quick call?`,

  APlus: `We’d like to position Resilient Commercial Solutions LLC as a trusted subcontractor/partner.
We carry active liability coverage (up to $2M) and maintain active Florida LLC status.
With W-2 onboarding, subcontractor compliance packets, and recruitment funnels, we scale under prime contractors while meeting background, insurance, and green-product standards.
Can we schedule a short strategy session to map where Resilient plugs into your upcoming contracts?`,
};
export type ResponseKey = keyof typeof responses;
