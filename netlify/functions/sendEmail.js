const sgMail = require('@sendgrid/mail');
exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode:405, body:'Method Not Allowed' };
  try{
    const { SENDGRID_API_KEY, FROM_EMAIL } = process.env;
    if (!SENDGRID_API_KEY || !FROM_EMAIL) return { statusCode:500, body: JSON.stringify({ error:'Missing env vars' }) };
    sgMail.setApiKey(SENDGRID_API_KEY);
    const data = JSON.parse(event.body || '{}');
    await sgMail.send({ to: data.to, from: FROM_EMAIL, subject: data.subject || 'RCS Notification', text: data.message || '' });
    return { statusCode:200, body: JSON.stringify({ ok:true }) };
  }catch(err){ return { statusCode:500, body: JSON.stringify({ error: err.message }) }; }
};
