/**
 * Netlify Background Function: submission-created
 * Triggered on every Netlify form submission.
 * Requires environment variables:
 *   SLACK_WEBHOOK_URL
 *   SENDGRID_API_KEY (optional if you want email)
 *   TO_EMAIL (e.g. ops@example.com)
 *   FROM_EMAIL (e.g. no-reply@yourdomain.com)
 */

export async function handler(event) {
  try {
    const payload = JSON.parse(event.body || '{}');

    // Extract key fields
    const formName = payload?.payload?.form_name || 'unknown-form';
    const data = payload?.payload?.data || {};

    // Send to Slack (simple formatted message)
    const slackWebhook = process.env.SLACK_WEBHOOK_URL;
    if (slackWebhook) {
      const text = `New Netlify form submission: *${formName}*\n` +
                   Object.entries(data).map(([k,v]) => `• *${k}*: ${String(v).slice(0,200)}`).join('\n');
      await fetch(slackWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      });
    }

    // Optional: Send email via SendGrid
    if (process.env.SENDGRID_API_KEY && process.env.TO_EMAIL && process.env.FROM_EMAIL) {
      const sgRes = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: process.env.TO_EMAIL }] }],
          from: { email: process.env.FROM_EMAIL, name: 'Netlify Forms' },
          subject: `New form submission: ${formName}`,
          content: [{
            type: 'text/plain',
            value: Object.entries(data).map(([k,v]) => `${k}: ${v}`).join('\n')
          }]
        })
      });
      if (!sgRes.ok) {
        console.warn('SendGrid failed', await sgRes.text());
      }
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: err?.message || 'Unknown error' }) };
  }
}
