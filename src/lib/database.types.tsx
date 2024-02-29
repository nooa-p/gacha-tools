export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      genshin_achievements: {
        Row: {
          category: string | null
          commission: boolean | null
          id: number
          name: string | null
          primogem_one: number | null
          primogem_three: string | null
          primogem_two: string | null
          tier_one: string | null
          tier_three: string | null
          tier_two: string | null
          tiered: boolean | null
          version: number | null
        }
        Insert: {
          category?: string | null
          commission?: boolean | null
          id: number
          name?: string | null
          primogem_one?: number | null
          primogem_three?: string | null
          primogem_two?: string | null
          tier_one?: string | null
          tier_three?: string | null
          tier_two?: string | null
          tiered?: boolean | null
          version?: number | null
        }
        Update: {
          category?: string | null
          commission?: boolean | null
          id?: number
          name?: string | null
          primogem_one?: number | null
          primogem_three?: string | null
          primogem_two?: string | null
          tier_one?: string | null
          tier_three?: string | null
          tier_two?: string | null
          tiered?: boolean | null
          version?: number | null
        }
        Relationships: []
      }
      genshin_artifacts: {
        Row: {
          "2_bonus": string | null
          "4_bonus": string | null
          circlet_description: string | null
          circlet_name: string | null
          flower_description: string | null
          flower_name: string | null
          goblet_description: string | null
          goblet_name: string | null
          id: number
          max_rarity: number | null
          min_rarity: number | null
          plume_description: string | null
          plume_name: string | null
          prayer: boolean | null
          sands_description: string | null
          sands_name: string | null
          set_name: string | null
        }
        Insert: {
          "2_bonus"?: string | null
          "4_bonus"?: string | null
          circlet_description?: string | null
          circlet_name?: string | null
          flower_description?: string | null
          flower_name?: string | null
          goblet_description?: string | null
          goblet_name?: string | null
          id: number
          max_rarity?: number | null
          min_rarity?: number | null
          plume_description?: string | null
          plume_name?: string | null
          prayer?: boolean | null
          sands_description?: string | null
          sands_name?: string | null
          set_name?: string | null
        }
        Update: {
          "2_bonus"?: string | null
          "4_bonus"?: string | null
          circlet_description?: string | null
          circlet_name?: string | null
          flower_description?: string | null
          flower_name?: string | null
          goblet_description?: string | null
          goblet_name?: string | null
          id?: number
          max_rarity?: number | null
          min_rarity?: number | null
          plume_description?: string | null
          plume_name?: string | null
          prayer?: boolean | null
          sands_description?: string | null
          sands_name?: string | null
          set_name?: string | null
        }
        Relationships: []
      }
      genshin_characters: {
        Row: {
          atk: Json | null
          birthday: string | null
          boss_drop: string | null
          common_drop: string | null
          constellation: string | null
          constellation_3: string | null
          constellation_5: string | null
          constellations: Json | null
          def: Json | null
          description: string | null
          element: string | null
          hp: Json | null
          id: number
          local_specialty: string | null
          name: string | null
          rarity: number | null
          release: string | null
          special: Json | null
          talent_book: string | null
          talents: Json | null
          version: number | null
          voice_actors: Json | null
          weapon: string | null
          weekly_drop: string | null
        }
        Insert: {
          atk?: Json | null
          birthday?: string | null
          boss_drop?: string | null
          common_drop?: string | null
          constellation?: string | null
          constellation_3?: string | null
          constellation_5?: string | null
          constellations?: Json | null
          def?: Json | null
          description?: string | null
          element?: string | null
          hp?: Json | null
          id?: number
          local_specialty?: string | null
          name?: string | null
          rarity?: number | null
          release?: string | null
          special?: Json | null
          talent_book?: string | null
          talents?: Json | null
          version?: number | null
          voice_actors?: Json | null
          weapon?: string | null
          weekly_drop?: string | null
        }
        Update: {
          atk?: Json | null
          birthday?: string | null
          boss_drop?: string | null
          common_drop?: string | null
          constellation?: string | null
          constellation_3?: string | null
          constellation_5?: string | null
          constellations?: Json | null
          def?: Json | null
          description?: string | null
          element?: string | null
          hp?: Json | null
          id?: number
          local_specialty?: string | null
          name?: string | null
          rarity?: number | null
          release?: string | null
          special?: Json | null
          talent_book?: string | null
          talents?: Json | null
          version?: number | null
          voice_actors?: Json | null
          weapon?: string | null
          weekly_drop?: string | null
        }
        Relationships: []
      }
      genshin_weapons: {
        Row: {
          ascension_material: string | null
          atk: Json | null
          common_drop: string | null
          description: string | null
          id: number
          name: string | null
          obtained: string | null
          passive: Json | null
          rare_drop: string | null
          rarity: number | null
          release: string | null
          sub_stat: Json | null
          type: string | null
          version: number | null
        }
        Insert: {
          ascension_material?: string | null
          atk?: Json | null
          common_drop?: string | null
          description?: string | null
          id: number
          name?: string | null
          obtained?: string | null
          passive?: Json | null
          rare_drop?: string | null
          rarity?: number | null
          release?: string | null
          sub_stat?: Json | null
          type?: string | null
          version?: number | null
        }
        Update: {
          ascension_material?: string | null
          atk?: Json | null
          common_drop?: string | null
          description?: string | null
          id?: number
          name?: string | null
          obtained?: string | null
          passive?: Json | null
          rare_drop?: string | null
          rarity?: number | null
          release?: string | null
          sub_stat?: Json | null
          type?: string | null
          version?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
