import { loadPostsSorted, type Post } from '~/domains/post';

export function usePosts() {
  const posts = ref<Post[]>([]);
  const loading = ref(false);

  async function fetch() {
    loading.value = true;
    posts.value = await loadPostsSorted();
    loading.value = false;
  }

  return { posts, fetch, loading };
}
