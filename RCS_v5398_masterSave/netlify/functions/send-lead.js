// Netlify Function: send-lead
const Busboy = require('busboy');
const sgMail = require('@sendgrid/mail');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };

  const API = process.env.SENDGRID_API_KEY || '';
  const TO = process.env.LEADS_TO || 'resilient23.james@gmail.com';
  const FROM = process.env.FROM_EMAIL || 'no-reply@resilientclean.com';
  if (!API) {
    return { statusCode: 200, body: JSON.stringify({ ok:false, error:'Missing SENDGRID_API_KEY (simulation mode)' }) };
  }
  sgMail.setApiKey(API);

  const fields = {};
  const files = [];

  await new Promise((resolve, reject) => {
    const bb = Busboy({ headers: event.headers });
    bb.on('file', (name, file, info) => {
      const chunks = [];
      file.on('data', d => chunks.push(d));
      file.on('end', () => {
        const buf = Buffer.concat(chunks);
        if (buf.length > 0) {
          files.push({
            content: buf.toString('base64'),
            filename: info.filename || name,
            type: info.mimeType || 'application/octet-stream',
            disposition: 'attachment'
          });
        }
      });
    });
    bb.on('field', (n, val) => { fields[n] = val; });
    bb.on('close', resolve);
    bb.on('error', reject);
    bb.end(Buffer.from(event.body || '', event.isBase64Encoded ? 'base64' : 'utf8'));
  });

  const subject = `RCS Lead • ${fields.formType || 'Form'} • ${fields.name || fields.email || ''}`;
  const lines = Object.entries(fields).map(([k,v]) => `${k}: ${v}`).join('\n');
  const msg = { to: TO, from: FROM, subject, text: lines, attachments: files };

  try {
    await sgMail.send(msg);
    return { statusCode: 302, headers: { Location: '/thank-you' }, body: 'OK' };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ ok:false, error: e.message }) };
  }
};
