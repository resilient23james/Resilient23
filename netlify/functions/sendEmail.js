const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS"
  };
  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers };

  try {
    const { to, subject, text, html } = JSON.parse(event.body || '{}');
    const msg = {
      to,
      from: process.env.FROM_EMAIL,
      subject: subject || 'Message from Resilient',
      text: text || '',
      html: html || `<pre>${text||''}</pre>`
    };
    await sgMail.send(msg);
    return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
  } catch (e) {
    return { statusCode: 500, headers, body: JSON.stringify({ ok:false, error: e.message }) };
  }
};
