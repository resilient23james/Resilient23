const sgMail = require('@sendgrid/mail');
const Busboy = require('busboy');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }
  try {
    const API = process.env.SENDGRID_API_KEY;
    if (!API) return { statusCode: 500, body: JSON.stringify({ ok:false, error:'Missing SENDGRID_API_KEY' }) };
    sgMail.setApiKey(API);

    const contentType = event.headers['content-type'] || event.headers['Content-Type'] || '';
    const bb = Busboy({ headers: { 'content-type': contentType } });
    const fields = {};
    const files = [];

    await new Promise((resolve, reject) => {
      bb.on('file', (name, file, info) => {
        const chunks = [];
        file.on('data', d => chunks.push(d));
        file.on('end', () => {
          const buf = Buffer.concat(chunks);
          files.push({
            content: buf.toString('base64'),
            filename: info.filename || 'attachment',
            type: info.mimeType || 'application/octet-stream',
            disposition: 'attachment'
          });
        });
      });
      bb.on('field', (n, val) => { fields[n] = val; });
      bb.on('error', reject);
      bb.on('finish', resolve);
      const body = event.isBase64Encoded ? Buffer.from(event.body || '', 'base64') : Buffer.from(event.body || '');
      bb.end(body);
    });

    const to = process.env.LEADS_TO || 'resilient23.james@gmail.com';
    const from = process.env.FROM_EMAIL || 'no-reply@resilientcs.com';
    const { name='', trade='', phone='' } = fields;

    const msg = {
      to, from,
      subject: `RCS Careers – ${name || 'Applicant'}`,
      text: `Name: ${name}\nTrade: ${trade}\nPhone: ${phone}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Trade:</b> ${trade}</p><p><b>Phone:</b> ${phone}</p>`,
      attachments: files
    };

    await sgMail.send(msg);
    return { statusCode: 200, body: JSON.stringify({ ok:true }) };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: JSON.stringify({ ok:false, error: String(err && err.message || err) }) };
  }
};
