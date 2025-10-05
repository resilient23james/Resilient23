import sgMail from "@sendgrid/mail";

export const handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }

    const { name, email, phone, message } = JSON.parse(event.body || "{}");

    const FROM_EMAIL = process.env.FROM_EMAIL;
    const LEADS_TO = process.env.LEADS_TO;
    const API_KEY = process.env.SENDGRID_API_KEY;

    if (!FROM_EMAIL || !LEADS_TO || !API_KEY) {
      return { statusCode: 500, body: "Email env vars missing" };
    }

    sgMail.setApiKey(API_KEY);

    const msg = {
      to: LEADS_TO.split(",").map((s) => s.trim()),
      from: FROM_EMAIL,
      subject: `New Resilient lead from ${name || "unknown"}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage:\n${message}`,
      html: `<p><b>Name:</b> ${name || ""}</p>
             <p><b>Email:</b> ${email || ""}</p>
             <p><b>Phone:</b> ${phone || ""}</p>
             <p><b>Message:</b><br/>${(message || "").replace(/\n/g, "<br/>")}</p>`
    };

    await sgMail.send(msg);
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: err.message }) };
  }
};
