import { register, login, logout, currentUser } from './internal/auth.repository';
import type { RegisterInput, LoginInput } from './auth.types';

export async function signUp(input: RegisterInput) {
  const { $supabase } = useNuxtApp();

  return register($supabase, input);
}

export async function signIn(input: LoginInput) {
  const { $supabase } = useNuxtApp();
  return login($supabase, input);
}

export async function signOut() {
  const { $supabase } = useNuxtApp();
  return logout($supabase);
}

export async function getCurrentUser() {
  const { $supabase } = useNuxtApp();

  return currentUser($supabase);
}
