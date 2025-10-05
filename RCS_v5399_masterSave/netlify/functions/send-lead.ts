import type { Handler } from "@netlify/functions";
import sgMail from "@sendgrid/mail";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || "";
const LEADS_TO = process.env.LEADS_TO || "";
const FROM_EMAIL = process.env.FROM_EMAIL || "no-reply@rcs.local";

if (SENDGRID_API_KEY) { sgMail.setApiKey(SENDGRID_API_KEY); }

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") { return { statusCode: 405, body: "Method Not Allowed" }; }
  const body = event.body || "";
  const params = new URLSearchParams(body);
  const formType = params.get("formType") || "Lead";
  const name = params.get("name") || "Unknown";
  const email = params.get("email") || "unknown@example.com";
  const phone = params.get("phone") || "";
  const message = params.get("message") || "";
  const text = `Form: ${formType}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;

  if (!SENDGRID_API_KEY || !LEADS_TO) {
    return { statusCode: 200, body: JSON.stringify({ ok: true, simulated: true, received: { formType, name, email, phone, message } }), headers: { "content-type": "application/json" } };
  }

  try {
    await sgMail.send({ to: LEADS_TO.split(',').map(s=>s.trim()).filter(Boolean), from: FROM_EMAIL, subject: `[RCS] ${formType} from ${name}`, text });
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: (err as any)?.message || "send failed" }) };
  }
};
