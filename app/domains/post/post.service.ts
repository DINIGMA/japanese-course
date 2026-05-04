import type { PostRow } from './post.types';
import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '~/types/database';

export async function getPosts(client: SupabaseClient<Database>): Promise<PostRow[]> {
  const { data, error } = await client
    .from('posts')
    .select('*');

  if (error) throw error;

  return data;
}
