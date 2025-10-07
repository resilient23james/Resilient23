const qs = require('querystring');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

const subjectMap = {
  lead: 'New Lead',
  vendor: 'New Vendor',
  restoration: 'Restoration Request',
  mechanic: 'Mobile Mechanic Request'
};

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS"
  };
  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers };

  const data = event.headers['content-type']?.includes('application/json')
    ? JSON.parse(event.body || '{}')
    : qs.parse(event.body || '');

  const type = data.type || 'lead';
  const subject = subjectMap[type] || 'Website Message';
  const to = process.env.LEADS_TO || process.env.FROM_EMAIL;

  const html = `
    <h3>${subject}</h3>
    <ul>
      <li><b>Name:</b> ${data.name || ''}</li>
      <li><b>Email:</b> ${data.email || ''}</li>
      <li><b>Phone:</b> ${data.phone || ''}</li>
      <li><b>Type:</b> ${type}</li>
    </ul>
    <p>${(data.message || '').toString().replace(/</g,'&lt;')}</p>
  `;

  try {
    await sgMail.send({
      to,
      from: process.env.FROM_EMAIL,
      subject: `[RCS] ${subject}`,
      html
    });
    return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
  } catch (e) {
    return { statusCode: 500, headers, body: JSON.stringify({ ok:false, error: e.message }) };
  }
};
