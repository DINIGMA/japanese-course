import { signIn, signUp, signOut, getCurrentUser, type LoginInput, type RegisterInput, type AuthUser } from '~/domains/auth';
import type { AppError } from '~/utils/errors';

export function useAuth() {
  const user = useState<AuthUser | null>(
    'auth:user',
    () => null,
  );
  const loading = ref(false);
  const error = ref<AppError | null>(
    null,
  );

  async function fetchUser() {
    loading.value = true;
    try {
      user.value = await getCurrentUser();
    }
    catch (e) {
      error.value = e as AppError;
    }
    finally {
      loading.value = false;
    }
  }

  async function login(data: LoginInput) {
    loading.value = true;
    try {
      user.value = await signIn(data);
    }
    finally {
      loading.value = false;
    }
  }

  async function register(data: RegisterInput) {
    loading.value = true;
    try {
      const result = await signUp(data);
      user.value = result.user;
    }
    finally { loading.value = false; }
  }

  async function logout() {
    await signOut();
    user.value = null;
  }

  return {
    user,
    error,
    loading,
    fetchUser,
    login,
    register,
    logout };
}
