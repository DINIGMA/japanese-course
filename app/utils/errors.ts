import type { AuthError }
  from '@supabase/supabase-js';

export class AppError extends Error {
  code: string;
  status?: number;

  constructor(
    message: string,
    code = 'unknown',
    status?: number,
  ) {
    super(message);

    this.name = 'AppError';
    this.code = code;
    this.status = status;
  }
}

export function mapSupabaseError(
  error: unknown,
): AppError {
  if (
    typeof error === 'object'
    && error !== null
    && 'message' in error
  ) {
    const err = error as Partial<AuthError> & {
      code?: string;
      status?: number;
    };

    return new AppError(
      err.message || 'Unknown error',
      err.code || 'unknown',
      err.status,
    );
  }

  if (error instanceof Error) {
    return new AppError(error.message);
  }

  return new AppError(
    'Unexpected error occurred',
  );
}
