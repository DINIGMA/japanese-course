import type { Profile } from '~/domains/profile';
import { getMyProfile } from '~/domains/profile';

export function useProfile() {
  const profile = useState<Profile | null>(
    'profile',
    () => null,
  );

  const loading = ref(false);

  async function fetchProfile(
    userId: string,
  ) {
    loading.value = true;

    try {
      profile.value = await getMyProfile(
        userId,
      );
    }
    finally {
      loading.value = false;
    }
  }

  return {
    profile,
    loading,
    fetchProfile,
  };
}
