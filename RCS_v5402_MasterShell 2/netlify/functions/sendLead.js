const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
  const data = JSON.parse(event.body || "{}");
  const msg = {
    to: process.env.LEADS_TO,
    from: process.env.FROM_EMAIL,
    subject: `New Lead - ${data.type || "General"}`,
    text: JSON.stringify(data, null, 2)
  };
  try {
    await sgMail.send(msg);
    return { statusCode: 200, body: "Lead sent" };
  } catch (err) {
    return { statusCode: 500, body: err.message };
  }
};