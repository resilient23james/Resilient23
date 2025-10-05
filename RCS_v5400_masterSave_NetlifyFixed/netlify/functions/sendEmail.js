import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function handler(event) {
  try {
    const { name='', email='', message='' } = JSON.parse(event.body || '{}');
    const msg = {
      to: process.env.LEADS_TO,
      from: process.env.FROM_EMAIL,
      subject: `New Inquiry from ${name || 'Website Visitor'}`,
      text: `From: ${name} <${email}>\n\n${message}`
    };
    await sgMail.send(msg);
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: String(error) }) };
  }
}
