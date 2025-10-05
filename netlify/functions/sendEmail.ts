
import type { Handler } from "@netlify/functions";
import sgMail from "sendgrid";

const FROM = process.env.FROM_EMAIL!;
const TO = process.env.LEADS_TO!;
const KEY = process.env.SENDGRID_API_KEY!;

export const handler: Handler = async (event) => {
  try {
    if (!KEY || !FROM || !TO) return { statusCode: 500, body: "Missing email env vars" };
    const { subject = "New lead", text = "" } = JSON.parse(event.body || "{}");

    // @ts-ignore
    sgMail.setApiKey(KEY);
    // @ts-ignore
    await sgMail.send({ to: TO, from: FROM, subject, text });
    return { statusCode: 200, body: "sent" };

  } catch (e: any) {
    return { statusCode: 500, body: e?.message ?? "email error" };
  }
};
