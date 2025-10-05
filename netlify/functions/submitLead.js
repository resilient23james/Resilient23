import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

export async function handler(event) {
  try {
    const payload = JSON.parse(event.body || '{}');
    const { error } = await supabase.from('leads').insert([payload]);
    if (error) throw error;
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: String(error) }) };
  }
}
