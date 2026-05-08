import type { User } from '@supabase/supabase-js';
import type { AuthUser } from '../auth.types';

export function toAuthUser(user: User): AuthUser {
  return {
    id: user.id,
    email: user.email || '',
  };
}
