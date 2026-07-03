import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Server-side Supabase client using the service role key. NEVER import this
// into a client component — the key must stay on the server.
export function getSupabaseAdmin(): SupabaseClient | null {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
