// netlify/functions/sendEmail.ts
import type { Handler } from '@netlify/functions';
import sgMail from '@sendgrid/mail';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // Read env AT RUNTIME so the key isn't inlined into build artifacts
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  const FROM_EMAIL = process.env.FROM_EMAIL;
  const LEADS_TO = process.env.LEADS_TO;

  if (!SENDGRID_API_KEY || !FROM_EMAIL || !LEADS_TO) {
    return { statusCode: 500, body: 'Missing email env vars' };
  }

  sgMail.setApiKey(SENDGRID_API_KEY);

  let payload: any = {};
  try {
    payload = JSON.parse(event.body ?? '{}');
  } catch (_) {}

  const { name = 'Website', email = FROM_EMAIL, message = '' } = payload;

  const msg = {
    to: LEADS_TO.split(',').map((s) => s.trim()),
    from: FROM_EMAIL,
    replyTo: email,
    subject: `New lead from ${name}`,
    text: message,
  };

  try {
    await sgMail.send(msg as any);
    return { statusCode: 200, body: 'OK' };
  } catch (err) {
    console.error('SendGrid error:', err);
    return { statusCode: 500, body: 'Email failed' };
  }
};
