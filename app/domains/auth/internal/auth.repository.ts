import * as service from './auth.service';
import { toAuthUser } from './auth.mapper';
import type { LoginInput, RegisterInput } from '../auth.types';
import type { DBClient } from '~/types/supabase';
import { mapSupabaseError } from '~/utils/errors';

export async function register(client: DBClient, input: RegisterInput) {
  try {
    const data = await service.signUp(client, input);
    return { user: data.user ? toAuthUser(data.user) : null };
  }
  catch (e) {
    throw mapSupabaseError(e);
  }
}

export async function login(client: DBClient, input: LoginInput) {
  try {
    const data = await service.signIn(client, input);

    if (!data.user) {
      throw new Error('User not found');
    }
    return toAuthUser(data.user);
  }
  catch (e) {
    throw mapSupabaseError(e);
  }
}

export async function logout(client: DBClient) {
  try {
    await service.signOut(client);
  }
  catch (e) {
    throw mapSupabaseError(e);
  }
}

export async function currentUser(client: DBClient) {
  try {
    const session = await service.getSession(client);
    console.log(session);
    if (!session?.user) {
      return null;
    }
    return toAuthUser(session.user);
  }
  catch (e) {
    throw mapSupabaseError(e);
  }
}
