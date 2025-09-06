// src/data/responses.ts
export type CannedResponse = {
  key: string;
  title: string;
  text: string;
};

export const responses: CannedResponse[] = [
  {
    key: "master",
    title: "Master Response",
    text: `Thank you for reaching out to Resilient Commercial Solutions LLC.
We are a licensed and insured facility services provider committed to quality, compliance, and reliability.`,
  },
  {
    key: "closer",
    title: "Closer Response",
    text: `Resilient Commercial Solutions LLC is fully insured (Hiscox CGL: $2M/$2M) and actively serving clients in NC and FL.
We pair trained crews with compliance-first SOPs for reliable results.`,
  },
  {
    key: "aplus",
    title: "A+ Response",
    text: `Appreciate your time! Based on your needs, we’ll propose a right-sized program with measurable standards and routine QA.
Because we are licensed, insured, and operations-ready, you can trust in consistent delivery.`,
  },
  {
    key: "followup",
    title: "Follow-Up Response",
    text: `Just following up on your cleaning needs. We can tailor daily/weekly service, deep cleans, and compliance-friendly SOPs.
We are actively hiring and fully staffed in Wake County (NC), as well as Hillsborough, Pasco, and Pinellas Counties (FL).`,
  },
];

export default responses;
