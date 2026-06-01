export type Profile = {
  id: string;
  email: string;
  username: string | null;

  level: string | null;

  avatarUrl: string | null;

  xp: number | null;
  streak: number | null;

  createdAt: string | null;
};
