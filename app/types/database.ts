export type Json
  = | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[];

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: '14.5';
  };
  graphql_public: {
    Tables: {
      [_ in never]: never
    };
    Views: {
      [_ in never]: never
    };
    Functions: {
      graphql: {
        Args: {
          extensions?: Json;
          operationName?: string;
          query?: string;
          variables?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never
    };
    CompositeTypes: {
      [_ in never]: never
    };
  };
  public: {
    Tables: {
      achievements: {
        Row: {
          description: string | null;
          icon: string | null;
          id: string;
          slug: string | null;
          title: string | null;
        };
        Insert: {
          description?: string | null;
          icon?: string | null;
          id?: string;
          slug?: string | null;
          title?: string | null;
        };
        Update: {
          description?: string | null;
          icon?: string | null;
          id?: string;
          slug?: string | null;
          title?: string | null;
        };
        Relationships: [];
      };
      daily_activity: {
        Row: {
          activity_date: string;
          created_at: string | null;
          id: string;
          user_id: string | null;
          xp_earned: number | null;
        };
        Insert: {
          activity_date: string;
          created_at?: string | null;
          id?: string;
          user_id?: string | null;
          xp_earned?: number | null;
        };
        Update: {
          activity_date?: string;
          created_at?: string | null;
          id?: string;
          user_id?: string | null;
          xp_earned?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'daily_activity_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          },
        ];
      };
      kanji: {
        Row: {
          created_at: string | null;
          id: string;
          jlpt_level: string | null;
          kunyomi: string | null;
          meaning: string;
          onyomi: string | null;
          stroke_count: number | null;
          symbol: string;
        };
        Insert: {
          created_at?: string | null;
          id?: string;
          jlpt_level?: string | null;
          kunyomi?: string | null;
          meaning: string;
          onyomi?: string | null;
          stroke_count?: number | null;
          symbol: string;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          jlpt_level?: string | null;
          kunyomi?: string | null;
          meaning?: string;
          onyomi?: string | null;
          stroke_count?: number | null;
          symbol?: string;
        };
        Relationships: [];
      };
      posts: {
        Row: {
          created_at: string;
          desc: string | null;
          id: number;
          name: string | null;
        };
        Insert: {
          created_at?: string;
          desc?: string | null;
          id?: number;
          name?: string | null;
        };
        Update: {
          created_at?: string;
          desc?: string | null;
          id?: number;
          name?: string | null;
        };
        Relationships: [];
      };
      profiles: {
        Row: {
          avatar_url: string | null;
          created_at: string | null;
          daily_goal: number | null;
          email: string;
          id: string;
          level: string | null;
          streak: number | null;
          updated_at: string | null;
          username: string | null;
          xp: number | null;
        };
        Insert: {
          avatar_url?: string | null;
          created_at?: string | null;
          daily_goal?: number | null;
          email: string;
          id: string;
          level?: string | null;
          streak?: number | null;
          updated_at?: string | null;
          username?: string | null;
          xp?: number | null;
        };
        Update: {
          avatar_url?: string | null;
          created_at?: string | null;
          daily_goal?: number | null;
          email?: string;
          id?: string;
          level?: string | null;
          streak?: number | null;
          updated_at?: string | null;
          username?: string | null;
          xp?: number | null;
        };
        Relationships: [];
      };
      review_history: {
        Row: {
          id: string;
          item_id: string;
          item_type: string;
          rating: number;
          reviewed_at: string | null;
          user_id: string | null;
        };
        Insert: {
          id?: string;
          item_id: string;
          item_type: string;
          rating: number;
          reviewed_at?: string | null;
          user_id?: string | null;
        };
        Update: {
          id?: string;
          item_id?: string;
          item_type?: string;
          rating?: number;
          reviewed_at?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'review_history_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          },
        ];
      };
      user_achievements: {
        Row: {
          achievement_id: string | null;
          id: string;
          unlocked_at: string | null;
          user_id: string | null;
        };
        Insert: {
          achievement_id?: string | null;
          id?: string;
          unlocked_at?: string | null;
          user_id?: string | null;
        };
        Update: {
          achievement_id?: string | null;
          id?: string;
          unlocked_at?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'user_achievements_achievement_id_fkey';
            columns: ['achievement_id'];
            isOneToOne: false;
            referencedRelation: 'achievements';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'user_achievements_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          },
        ];
      };
      user_kanji: {
        Row: {
          created_at: string | null;
          ease_factor: number | null;
          id: string;
          kanji_id: string | null;
          mastery: number | null;
          next_review_at: string | null;
          review_interval: number | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string | null;
          ease_factor?: number | null;
          id?: string;
          kanji_id?: string | null;
          mastery?: number | null;
          next_review_at?: string | null;
          review_interval?: number | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string | null;
          ease_factor?: number | null;
          id?: string;
          kanji_id?: string | null;
          mastery?: number | null;
          next_review_at?: string | null;
          review_interval?: number | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'user_kanji_kanji_id_fkey';
            columns: ['kanji_id'];
            isOneToOne: false;
            referencedRelation: 'kanji';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'user_kanji_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          },
        ];
      };
      user_vocabulary: {
        Row: {
          created_at: string | null;
          ease_factor: number | null;
          id: string;
          last_reviewed_at: string | null;
          mastery: number | null;
          next_review_at: string | null;
          review_interval: number | null;
          reviews_count: number | null;
          user_id: string | null;
          vocabulary_id: string | null;
        };
        Insert: {
          created_at?: string | null;
          ease_factor?: number | null;
          id?: string;
          last_reviewed_at?: string | null;
          mastery?: number | null;
          next_review_at?: string | null;
          review_interval?: number | null;
          reviews_count?: number | null;
          user_id?: string | null;
          vocabulary_id?: string | null;
        };
        Update: {
          created_at?: string | null;
          ease_factor?: number | null;
          id?: string;
          last_reviewed_at?: string | null;
          mastery?: number | null;
          next_review_at?: string | null;
          review_interval?: number | null;
          reviews_count?: number | null;
          user_id?: string | null;
          vocabulary_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'user_vocabulary_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'user_vocabulary_vocabulary_id_fkey';
            columns: ['vocabulary_id'];
            isOneToOne: false;
            referencedRelation: 'vocabulary';
            referencedColumns: ['id'];
          },
        ];
      };
      vocabulary: {
        Row: {
          audio_url: string | null;
          created_at: string | null;
          example_sentence: string | null;
          example_translation: string | null;
          id: string;
          japanese: string;
          jlpt_level: string | null;
          part_of_speech: string | null;
          reading: string | null;
          translation: string;
        };
        Insert: {
          audio_url?: string | null;
          created_at?: string | null;
          example_sentence?: string | null;
          example_translation?: string | null;
          id?: string;
          japanese: string;
          jlpt_level?: string | null;
          part_of_speech?: string | null;
          reading?: string | null;
          translation: string;
        };
        Update: {
          audio_url?: string | null;
          created_at?: string | null;
          example_sentence?: string | null;
          example_translation?: string | null;
          id?: string;
          japanese?: string;
          jlpt_level?: string | null;
          part_of_speech?: string | null;
          reading?: string | null;
          translation?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never
    };
    Functions: {
      [_ in never]: never
    };
    Enums: {
      [_ in never]: never
    };
    CompositeTypes: {
      [_ in never]: never
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, '__InternalSupabase'>;

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, 'public'>];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
  | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
  | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
      & DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    & DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
      ? R
      : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables']
    & DefaultSchema['Views'])
    ? (DefaultSchema['Tables']
      & DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
        ? R
        : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
  | keyof DefaultSchema['Tables']
  | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
    Insert: infer I;
  }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
      Insert: infer I;
    }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
  | keyof DefaultSchema['Tables']
  | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
    Update: infer U;
  }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
      Update: infer U;
    }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
  | keyof DefaultSchema['Enums']
  | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
    ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
  | keyof DefaultSchema['CompositeTypes']
  | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
    ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {},
  },
} as const;
