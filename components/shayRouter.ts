export function routeFreeText(input: string): string {
  const q = input.toLowerCase();
  if (/(which|service).*(need|pick)/.test(q)) return "Tell me building type, sq ft, traffic level, and pain points. I’ll map that to Janitorial, Day Porter, Floor, or High Dusting with a recommended cadence.";
  if (/(cover|state|where|location|michigan|lansing|grand rapids)/.test(q)) return "We service Michigan statewide (Lansing, Grand Rapids, Detroit) plus national partners. Multi-site is our lane.";
  if (/(price|quote|estimate|budget|cost)/.test(q)) return "I can start a quote now. Drop the address, approx. sq ft, service type, and target start date; I’ll email a private estimate.";
  if (/(contract|cancel|term)/.test(q)) return "We can do month-to-month pilots. Once you see consistency, we’ll formalize terms—fair?";
  if (/(timeline|start|asap|mobilize)/.test(q)) return "For routine janitorial we can start in 5–7 business days after a quick site intake. Post-construction can mobilize faster depending on access.";
  return "Got it. Want me to start a private quote? If yes, send the address, sq ft, building type, and any notes.";
}