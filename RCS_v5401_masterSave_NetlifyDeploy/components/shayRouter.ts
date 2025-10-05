
export type ShayMsg = { role: 'shay' | 'you'; text: string };

const rebuttals: Record<string, string> = {
  price: "We’re rarely the cheapest—because we include QA visits, trained crews, and guaranteed coverage. If budget is tight, I can tune scope or cadence so you still hit your outcomes.",
  contract: "We can do month-to-month pilots. Once you see the consistency, we’ll formalize terms. Fair?",
  timeline: "For routine janitorial we can start in 5–7 business days after a quick site intake. Post-construction can mobilize faster depending on access.",
  scope: "Tell me building type, sq ft, traffic level, and pain points. I’ll map that to Janitorial, Day Porter, Floor, or High Dusting with a recommended cadence.",
  coverage: "We service Michigan statewide (Lansing, Grand Rapids, Detroit) plus national partners. Multi-site is our lane.",
  quote: "I can start a quote now. Drop the address, approx. sq ft, service type, and target start date. I’ll push it to the team and email you a private estimate."
};

export function routeFreeText(input: string): string {
  const q = input.toLowerCase();
  if (/(which|service).*(need|pick)/.test(q)) return rebuttals.scope;
  if (/(cover|state|where|location|michigan|lansing|grand rapids)/.test(q)) return rebuttals.coverage;
  if (/(how).*(quote|price|estimate)/.test(q)) return rebuttals.quote;
  if (/(price|cheap|cost|budget)/.test(q)) return rebuttals.price;
  if (/(contract|cancel|term)/.test(q)) return rebuttals.contract;
  if (/(timeline|start|asap|mobilize)/.test(q)) return rebuttals.timeline;
  return "Got it. I can help. Want me to start a private quote? If yes, send the address, sq ft, building type, and any service notes.";
}

export const quickPills: { id: string; label: string; payload: string }[] = [
  { id: "svc", label: "Which service do I need?", payload: "Which service do I need?" },
  { id: "cov", label: "Coverage & states", payload: "coverage" },
  { id: "qte", label: "How do I get a quote?", payload: "quote" },
  { id: "pc",  label: "Post-construction: Final vs Punch?", payload: "post construction final vs punch" }
];

export function cannedReply(payload: string): string {
  const q = payload.toLowerCase();
  if (payload === "Which service do I need?") return rebuttals.scope;
  if (q.includes("coverage")) return rebuttals.coverage;
  if (q.includes("quote")) return rebuttals.quote;
  if (q.includes("post construction")) {
    return "Final clean = ready-for-turnover. Punch clean = detail pass after trades punch list. We can do both or sequence them.";
  }
  return routeFreeText(payload);
}
