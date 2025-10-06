const sgMail = require('@sendgrid/mail');
function cors(result){ return { ...result, headers: { 'Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'Content-Type' } }; }
exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return cors({ statusCode:200, body:'' });
  if (event.httpMethod !== 'POST') return cors({ statusCode:405, body:'Method Not Allowed' });
  try{
    const { SENDGRID_API_KEY, FROM_EMAIL, LEADS_TO } = process.env;
    if (!SENDGRID_API_KEY || !FROM_EMAIL || !LEADS_TO) return cors({ statusCode:500, body: JSON.stringify({ error:'Missing env vars' }) });
    sgMail.setApiKey(SENDGRID_API_KEY);
    const data = JSON.parse(event.body || '{}');
    const type = data.type || 'lead';
    const subjectMap = { lead:'New Lead Submission', vendor:'New Vendor Onboarding', restoration:'Emergency Restoration Request', mechanic:'Mobile Mechanic Request' };
    const subject = subjectMap[type] || 'RCS Submission';
    const text = Object.entries(data).map(([k,v])=>`${k}: ${v}`).join('\n');
    await sgMail.send({ to: LEADS_TO, from: FROM_EMAIL, subject, text });
    return cors({ statusCode:200, body: JSON.stringify({ ok:true }) });
  }catch(err){ return cors({ statusCode:500, body: JSON.stringify({ error: err.message }) }); }
};
