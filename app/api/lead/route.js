export async function POST(req) {
  try {
    const body = await req.json();
    const webhook = process.env.SLACK_WEBHOOK_URL;
    if (webhook) {
      await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `New API lead: ${body?.service || 'Service'}\n` +
                Object.entries(body || {}).map(([k,v]) => `• *${k}*: ${String(v).slice(0,200)}`).join('\n')
        })
      });
    }
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: e?.message || 'Unknown error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
