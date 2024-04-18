import { createClient } from '@/utils/supabase/server';

export async function GET() {
  const supabase = createClient();
  const data = await supabase.from('Users').select('*');

  return Response.json({ data });
}
