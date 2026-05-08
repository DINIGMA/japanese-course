import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '~/types/database';
import type { LoginInput, RegisterInput } from '../auth.types';

type DBClient = SupabaseClient<Database>;

export async function signUp(client: DBClient, input: RegisterInput) {
  const { data, error } = await client.auth.signUp(input);

  if (error) throw error;

  return data;
}

export async function signIn(client: DBClient, input: LoginInput) {
  const { data, error } = await client.auth.signInWithPassword({ email: input.email, password: input.password });

  if (error) throw error;

  return data;
}

export async function signOut(client: DBClient) {
  const { error } = await client.auth.signOut();

  if (error) throw error;
}

export async function getSession(client: DBClient) {
  const { data, error } = await client.auth.getSession();
  console.log(data);

  if (error) throw error;

  return data.session;
}
