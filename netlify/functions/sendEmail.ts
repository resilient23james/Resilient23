// BEFORE
// import sgMail from "sendgrid";
// sgMail.setApiKey(KEY as any);

// AFTER
import sgMail from "@sendgrid/mail";

export const handler: Handler = async (event) => {
  try {
    if (!KEY || !FROM || !TO) return { statusCode: 500, body: "Missing email env vars" };

    const { subject = "New lead", text = "" } = JSON.parse(event.body || "{}");

    sgMail.setApiKey(KEY);
    await sgMail.send({ to: TO, from: FROM, subject, text });

    return { statusCode: 200, body: "sent" };
  } catch (e: any) {
    return { statusCode: 500, body: e?.message ?? "email error" };
  }
};
