// src/data/responses.ts
export type SavedResponse = {
  id: string;
  title: string;
  body: string;
};

export const responses: SavedResponse[] = [
  {
    id: "master",
    title: "Master Response",
    body:
`Thank you for reaching out to Resilient Commercial Solutions LLC.
We are a licensed and insured facility services provider committed to quality, compliance, and reliability.`
  },
  {
    id: "closer",
    title: "Closer Response",
    body:
`Resilient Commercial Solutions LLC is fully insured (Hiscox CGL: $2M/$2M) and actively serving clients in NC and FL.
We pair trained crews with compliance-first SOPs for reliable results.`
  },
  {
    id: "aplus",
    title: "A+ Response",
    body:
`Appreciate your time! Based on your needs, we’ll propose a right-sized program with measurable standards and routine QA.
Because we are licensed, insured, and operations-ready, you can trust in consistent delivery.`
  },
  {
    id: "followup",
    title: "Follow-Up Response",
    body:
`Just following up on your cleaning needs. We can tailor daily/weekly service, deep cleans, and compliance-friendly SOPs.
We are actively hiring and fully staffed in Wake County (NC), as well as Hillsborough, Pasco, and Pinellas Counties (FL).`
  }
];

// named export (what the page imports)
export default responses;
