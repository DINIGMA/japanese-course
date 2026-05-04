import type { PostRow, Post } from './post.types';

export function toPost(row: PostRow): Post {
  return {
    id: row.id,
    name: row.name,
    desc: row.desc,
    createdAt: new Date(row.created_at),
  };
}
