const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
  const cors = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type"
  };
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: cors, body: 'OK' };
  }
  let data = {};
  try {
    data = JSON.parse(event.body || "{}");
  } catch(e) {
    // handle form-encoded fallback
    const qs = new URLSearchParams(event.body || '');
    data = Object.fromEntries(qs.entries());
  }
  const type = (data.type || 'lead').toLowerCase();
  const subjectMap = {
    lead: "New Lead",
    vendor: "New Vendor",
    restoration: "Restoration Lead",
    mechanic: "Mobile Mechanic Lead"
  };
  const msg = {
    to: process.env.LEADS_TO,
    from: process.env.FROM_EMAIL,
    subject: subjectMap[type] || "New Inquiry",
    text: JSON.stringify(data, null, 2)
  };
  try {
    await sgMail.send(msg);
    return { statusCode: 200, headers: cors, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    return { statusCode: 500, headers: cors, body: JSON.stringify({ ok: false, error: err.message }) };
  }
};
