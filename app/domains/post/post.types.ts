import type { Database } from '~/types';

export type PostRow
  = Database['public']['Tables']['posts']['Row'];

export type Post = {
  id: number;
  name: string | null;
  desc: string | null;
  createdAt: Date;
};
