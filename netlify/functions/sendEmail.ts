// netlify/functions/sendEmail.ts
import type { Handler } from "@netlify/functions";
import sgMail from "@sendgrid/mail";

const KEY = process.env.SENDGRID_API_KEY!;
const FROM = process.env.FROM_EMAIL!;
const TO = process.env.LEADS_TO!;

sgMail.setApiKey(KEY);

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const body = JSON.parse(event.body ?? "{}");
    const { name, email, phone, message } = body;

    const msg = {
      to: TO,
      from: FROM,
      subject: "New lead from website",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    await sgMail.send(msg);
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: JSON.stringify({ error: "Failed to send" }) };
  }
};
