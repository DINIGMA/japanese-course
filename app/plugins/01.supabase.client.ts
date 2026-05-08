import { createClient } from '@supabase/supabase-js';
import type { Database } from '~/types';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const supabase = createClient<Database>(
    config.public.supabaseUrl,
    config.public.supabaseKey,
    {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    },
  );

  return {
    provide: { supabase },
  };
});
