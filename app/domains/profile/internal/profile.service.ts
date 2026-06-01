import type { DBClient } from '~/types/supabase';

export async function getProfile(
  client: DBClient,
  userId: string,
) {
  const { data, error } = await client
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) throw error;

  return data;
}
