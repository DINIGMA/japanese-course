import * as service from './profile.service';
import { toProfile } from './profile.mapper';
import { mapSupabaseError } from '~/utils/errors';
import type { DBClient } from '~/types/supabase';

export async function getUserProfile(
  client: DBClient,
  userId: string,
) {
  try {
    const data = await service.getProfile(
      client,
      userId,
    );

    return toProfile(data);
  }
  catch (e) {
    throw mapSupabaseError(e);
  }
}
