
import type { Handler } from "@netlify/functions";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL!;
const anon = process.env.SUPABASE_ANON_KEY!;

export const handler: Handler = async (event) => {
  try {
    if (!supabaseUrl || !anon) return { statusCode: 500, body: "Missing Supabase env vars" };
    const payload = JSON.parse(event.body || "{}"); // { name,email,phone,message }
    const supabase = createClient(supabaseUrl, anon);
    const { error } = await supabase.from('leads').insert({
      name: payload.name || null,
      email: payload.email || null,
      phone: payload.phone || null,
      message: payload.message || null,
      source: 'Shay',
      created_at: new Date().toISOString()
    });
    if (error) throw error;
    return { statusCode: 200, body: "saved" };
  } catch (e: any) {
    return { statusCode: 500, body: e?.message ?? "lead error" };
  }
};
