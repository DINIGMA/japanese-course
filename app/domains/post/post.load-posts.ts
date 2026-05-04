import { fetchPosts } from './post.repository';

export async function loadPostsSorted() {
  const posts = await fetchPosts();

  return posts.sort((a, b) =>
    b.createdAt.getTime() - a.createdAt.getTime(),
  );
}
