
export async function handler(event) {
  const body = JSON.parse(event.body || '{}');
  return {
    statusCode: 200,
    body: JSON.stringify({ success: true, message: `Email stub processed for ${body.email}` })
  };
}
