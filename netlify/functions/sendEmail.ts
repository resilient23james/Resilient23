import type { Handler } from "@netlify/functions";
import sgMail from "@sendgrid/mail";

export const handler: Handler = async (event) => {
  const { SENDGRID_API_KEY, FROM_EMAIL, LEADS_TO } = process.env;

  if (!SENDGRID_API_KEY || !FROM_EMAIL || !LEADS_TO) {
    return {
      statusCode: 500,
      body: "Missing email environment variables"
    };
  }

  sgMail.setApiKey(SENDGRID_API_KEY);
  const { name, email, message } = JSON.parse(event.body || "{}");

  const msg = {
    to: LEADS_TO,
    from: FROM_EMAIL,
    subject: `New lead from ${name}`,
    text: `Email: ${email}\n\nMessage:\n${message}`
  };

  try {
    await sgMail.send(msg);
    return { statusCode: 200, body: "Email sent successfully" };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: "Failed to send email" };
  }
};
