const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
  const data = JSON.parse(event.body || "{}");
  const msg = {
    to: data.to,
    from: process.env.FROM_EMAIL,
    subject: data.subject || "Resilient Notification",
    text: data.message || ""
  };
  try {
    await sgMail.send(msg);
    return { statusCode: 200, body: "Email sent" };
  } catch (err) {
    return { statusCode: 500, body: err.message };
  }
};