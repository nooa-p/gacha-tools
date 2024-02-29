export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  genshin: {
    Tables: {
      achivements: {
        Row: {
          category: string
          commission: boolean
          id: number
          name: string
          primogem_one: number
          primogem_three: number | null
          primogem_two: number | null
          tier_one: string
          tier_three: string | null
          tier_two: string | null
          tiered: boolean
          version: number
        }
        Insert: {
          category?: string
          commission?: boolean
          id?: number
          name?: string
          primogem_one: number
          primogem_three?: number | null
          primogem_two?: number | null
          tier_one?: string
          tier_three?: string | null
          tier_two?: string | null
          tiered?: boolean
          version: number
        }
        Update: {
          category?: string
          commission?: boolean
          id?: number
          name?: string
          primogem_one?: number
          primogem_three?: number | null
          primogem_two?: number | null
          tier_one?: string
          tier_three?: string | null
          tier_two?: string | null
          tiered?: boolean
          version?: number
        }
        Relationships: []
      }
      artifacts: {
        Row: {
          "2_bonus": string
          "4_bonus": string | null
          circlet_description: string | null
          circlet_name: string | null
          flower_description: string | null
          flower_name: string | null
          goblet_description: string | null
          goblet_name: string | null
          id: number
          max_rarity: number
          min_rarity: number
          plume_description: string | null
          plume_name: string | null
          prayer: boolean
          sands_description: string | null
          sands_name: string | null
          set_name: string
        }
        Insert: {
          "2_bonus"?: string
          "4_bonus"?: string | null
          circlet_description?: string | null
          circlet_name?: string | null
          flower_description?: string | null
          flower_name?: string | null
          goblet_description?: string | null
          goblet_name?: string | null
          id?: number
          max_rarity: number
          min_rarity: number
          plume_description?: string | null
          plume_name?: string | null
          prayer?: boolean
          sands_description?: string | null
          sands_name?: string | null
          set_name?: string
        }
        Update: {
          "2_bonus"?: string
          "4_bonus"?: string | null
          circlet_description?: string | null
          circlet_name?: string | null
          flower_description?: string | null
          flower_name?: string | null
          goblet_description?: string | null
          goblet_name?: string | null
          id?: number
          max_rarity?: number
          min_rarity?: number
          plume_description?: string | null
          plume_name?: string | null
          prayer?: boolean
          sands_description?: string | null
          sands_name?: string | null
          set_name?: string
        }
        Relationships: []
      }
      characters: {
        Row: {
          atk: Json
          birthday: string
          boss_drop: string
          common_drop: string
          constellation: string
          constellation_3: string
          constellation_5: string
          constellations: Json
          def: Json
          description: string
          element: string
          hp: Json
          id: number
          local_specialty: string
          name: string
          rarity: number
          release: string
          special: Json
          talent_book: string
          talents: Json
          version: number
          voice_actors: Json
          weapon: string
          weekly_drop: string
        }
        Insert: {
          atk: Json
          birthday: string
          boss_drop?: string
          common_drop?: string
          constellation?: string
          constellation_3?: string
          constellation_5?: string
          constellations: Json
          def: Json
          description?: string
          element?: string
          hp: Json
          id?: number
          local_specialty?: string
          name?: string
          rarity: number
          release: string
          special: Json
          talent_book?: string
          talents: Json
          version: number
          voice_actors: Json
          weapon?: string
          weekly_drop?: string
        }
        Update: {
          atk?: Json
          birthday?: string
          boss_drop?: string
          common_drop?: string
          constellation?: string
          constellation_3?: string
          constellation_5?: string
          constellations?: Json
          def?: Json
          description?: string
          element?: string
          hp?: Json
          id?: number
          local_specialty?: string
          name?: string
          rarity?: number
          release?: string
          special?: Json
          talent_book?: string
          talents?: Json
          version?: number
          voice_actors?: Json
          weapon?: string
          weekly_drop?: string
        }
        Relationships: []
      }
      weapons: {
        Row: {
          ascension_material: string
          atk: Json
          common_drop: string
          description: string
          id: number
          name: string
          obtained: string
          passive: Json
          rare_drop: string
          rarity: number
          release: string
          sub_stat: Json
          type: string
          version: number
        }
        Insert: {
          ascension_material?: string
          atk: Json
          common_drop?: string
          description?: string
          id?: number
          name?: string
          obtained?: string
          passive: Json
          rare_drop?: string
          rarity: number
          release: string
          sub_stat: Json
          type?: string
          version: number
        }
        Update: {
          ascension_material?: string
          atk?: Json
          common_drop?: string
          description?: string
          id?: number
          name?: string
          obtained?: string
          passive?: Json
          rare_drop?: string
          rarity?: number
          release?: string
          sub_stat?: Json
          type?: string
          version?: number
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
  "star-rail": {
    Tables: {
      [_ in never]: never
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
    | keyof (Database["genshin"]["Tables"] & Database["genshin"]["Views"] & Database["star-rail"]["Tables"] & Database["star-rail"]["Views"])
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
  : PublicTableNameOrOptions extends keyof (Database["genshin"]["Tables"] &
      Database["genshin"]["Views"] & Database["star-rail"]["Tables"] &
      Database["star-rail"]["Views"])
  ? (Database["genshin"]["Tables"] &
      Database["genshin"]["Views"] & Database["star-rail"]["Tables"] &
      Database["star-rail"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof (Database["genshin"]["Tables"] & Database["star-rail"]["Tables"])
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
  : PublicTableNameOrOptions extends keyof (Database["genshin"]["Tables"] & Database["star-rail"]["Tables"])
  ? (Database["genshin"]["Tables"] & Database["star-rail"]["Tables"])[PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof (Database["genshin"]["Tables"] & Database["star-rail"]["Tables"])
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
  : PublicTableNameOrOptions extends keyof (Database["genshin"]["Tables"] & Database["star-rail"]["Tables"])
  ? (Database["genshin"]["Tables"] & Database["star-rail"]["Tables"])[PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof (Database["genshin"]["Enums"] & Database["star-rail"]["Enums"])
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof (Database["genshin"]["Enums"] & Database["star-rail"]["Enums"])
  ? (Database["genshin"]["Enums"] & Database["star-rail"]["Enums"])[PublicEnumNameOrOptions]
  : never
