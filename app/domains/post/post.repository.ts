import { getPosts } from './post.service';
import { toPost } from './post.mapper';

export async function fetchPosts() {
  const { $supabase } = useNuxtApp();

  const rows = await getPosts($supabase);

  return rows.map(toPost);
}
