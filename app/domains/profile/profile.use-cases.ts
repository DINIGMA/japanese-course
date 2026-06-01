import { getUserProfile } from './internal/profile.repository';

export async function getMyProfile(
  userId: string,
) {
  const { $supabase } = useNuxtApp();

  return getUserProfile(
    $supabase,
    userId,
  );
}
