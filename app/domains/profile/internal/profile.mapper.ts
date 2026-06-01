import type { Profile } from '../profile.types';
import type { Database } from '~/types/database';

type ProfileRow
  = Database['public']['Tables']['profiles']['Row'];

export function toProfile(
  row: ProfileRow,
): Profile {
  return {
    id: row.id,

    email: row.email,
    username: row.username,

    level: row.level,

    avatarUrl: row.avatar_url,

    xp: row.xp,
    streak: row.streak,

    createdAt: row.created_at,
  };
}
