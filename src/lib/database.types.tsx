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
          achievement_name: string
          category: string
          commission: boolean
          id: number
          linked_commission: string | null
          primogem_one: number
          primogem_three: string | null
          primogem_two: string | null
          tier_one: string
          tier_three: string | null
          tier_two: string | null
          tiered: boolean
          version: number
        }
        Insert: {
          achievement_name: string
          category: string
          commission: boolean
          id?: number
          linked_commission?: string | null
          primogem_one: number
          primogem_three?: string | null
          primogem_two?: string | null
          tier_one: string
          tier_three?: string | null
          tier_two?: string | null
          tiered: boolean
          version: number
        }
        Update: {
          achievement_name?: string
          category?: string
          commission?: boolean
          id?: number
          linked_commission?: string | null
          primogem_one?: number
          primogem_three?: string | null
          primogem_two?: string | null
          tier_one?: string
          tier_three?: string | null
          tier_two?: string | null
          tiered?: boolean
          version?: number
        }
        Relationships: []
      }
      genshin_artifacts: {
        Row: {
          "2_bonus": string
          "4_bonus": string | null
          circlet_description: string | null
          circlet_name: string | null
          file_set_name: string
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
          "2_bonus": string
          "4_bonus"?: string | null
          circlet_description?: string | null
          circlet_name?: string | null
          file_set_name: string
          flower_description?: string | null
          flower_name?: string | null
          goblet_description?: string | null
          goblet_name?: string | null
          id?: number
          max_rarity: number
          min_rarity: number
          plume_description?: string | null
          plume_name?: string | null
          prayer: boolean
          sands_description?: string | null
          sands_name?: string | null
          set_name: string
        }
        Update: {
          "2_bonus"?: string
          "4_bonus"?: string | null
          circlet_description?: string | null
          circlet_name?: string | null
          file_set_name?: string
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
      genshin_bosses: {
        Row: {
          boss_drop: string
          boss_name: string
          boss_name_long: string
          id: number
          other_drops: string[]
        }
        Insert: {
          boss_drop: string
          boss_name: string
          boss_name_long: string
          id?: number
          other_drops: string[]
        }
        Update: {
          boss_drop?: string
          boss_name?: string
          boss_name_long?: string
          id?: number
          other_drops?: string[]
        }
        Relationships: [
          {
            foreignKeyName: "public_genshin_bosses_boss_drop_fkey"
            columns: ["boss_drop"]
            isOneToOne: false
            referencedRelation: "genshin_items"
            referencedColumns: ["short_name"]
          }
        ]
      }
      genshin_characters: {
        Row: {
          atk: Json
          birthday: string
          boss_drop: string
          char_description: string
          char_name: string
          common_drop: string
          constellation: string
          constellation_3: string | null
          constellation_5: string | null
          constellations: Json
          def: Json
          element: string
          hp: Json
          id: number
          local_specialty: string
          rarity: number
          release: string
          special: Json
          talent_book: string
          talents: Json
          version: number
          voice_actors: Json
          weapon_type: string
          weekly_drop: string
        }
        Insert: {
          atk?: Json
          birthday: string
          boss_drop: string
          char_description: string
          char_name: string
          common_drop: string
          constellation: string
          constellation_3?: string | null
          constellation_5?: string | null
          constellations?: Json
          def?: Json
          element: string
          hp?: Json
          id?: number
          local_specialty: string
          rarity: number
          release: string
          special?: Json
          talent_book: string
          talents?: Json
          version: number
          voice_actors?: Json
          weapon_type: string
          weekly_drop: string
        }
        Update: {
          atk?: Json
          birthday?: string
          boss_drop?: string
          char_description?: string
          char_name?: string
          common_drop?: string
          constellation?: string
          constellation_3?: string | null
          constellation_5?: string | null
          constellations?: Json
          def?: Json
          element?: string
          hp?: Json
          id?: number
          local_specialty?: string
          rarity?: number
          release?: string
          special?: Json
          talent_book?: string
          talents?: Json
          version?: number
          voice_actors?: Json
          weapon_type?: string
          weekly_drop?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_genshin_characters_boss_drop_fkey"
            columns: ["boss_drop"]
            isOneToOne: false
            referencedRelation: "genshin_items"
            referencedColumns: ["short_name"]
          },
          {
            foreignKeyName: "public_genshin_characters_common_drop_fkey"
            columns: ["common_drop"]
            isOneToOne: false
            referencedRelation: "genshin_items"
            referencedColumns: ["short_name"]
          },
          {
            foreignKeyName: "public_genshin_characters_local_specialty_fkey"
            columns: ["local_specialty"]
            isOneToOne: false
            referencedRelation: "genshin_items"
            referencedColumns: ["short_name"]
          },
          {
            foreignKeyName: "public_genshin_characters_talent_book_fkey"
            columns: ["talent_book"]
            isOneToOne: false
            referencedRelation: "genshin_items"
            referencedColumns: ["short_name"]
          },
          {
            foreignKeyName: "public_genshin_characters_weekly_drop_fkey"
            columns: ["weekly_drop"]
            isOneToOne: false
            referencedRelation: "genshin_items"
            referencedColumns: ["short_name"]
          }
        ]
      }
      genshin_domains: {
        Row: {
          all_drops: string[]
          change_daily: boolean
          domain_name: string
          domain_type: string
          id: number
          mt_drop: string | null
          tf_drop: string | null
          ws_drop: string | null
        }
        Insert: {
          all_drops: string[]
          change_daily: boolean
          domain_name: string
          domain_type: string
          id?: number
          mt_drop?: string | null
          tf_drop?: string | null
          ws_drop?: string | null
        }
        Update: {
          all_drops?: string[]
          change_daily?: boolean
          domain_name?: string
          domain_type?: string
          id?: number
          mt_drop?: string | null
          tf_drop?: string | null
          ws_drop?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_genshin_domains_mt_drop_fkey"
            columns: ["mt_drop"]
            isOneToOne: false
            referencedRelation: "genshin_items"
            referencedColumns: ["short_name"]
          },
          {
            foreignKeyName: "public_genshin_domains_tf_drop_fkey"
            columns: ["tf_drop"]
            isOneToOne: false
            referencedRelation: "genshin_items"
            referencedColumns: ["short_name"]
          },
          {
            foreignKeyName: "public_genshin_domains_ws_drop_fkey"
            columns: ["ws_drop"]
            isOneToOne: false
            referencedRelation: "genshin_items"
            referencedColumns: ["short_name"]
          }
        ]
      }
      genshin_fish: {
        Row: {
          bait: string
          fish_name: string
          fish_name_long: string
          id: number
          time_of_day: string | null
          timed: boolean
        }
        Insert: {
          bait: string
          fish_name: string
          fish_name_long: string
          id?: number
          time_of_day?: string | null
          timed: boolean
        }
        Update: {
          bait?: string
          fish_name?: string
          fish_name_long?: string
          id?: number
          time_of_day?: string | null
          timed?: boolean
        }
        Relationships: []
      }
      genshin_furnishing: {
        Row: {
          adeptal_energy: number
          blueprint: boolean
          category: string
          furnishing_name: string
          furnishing_name_long: string
          id: number
          item_load: number
          load_reduced: number
          materials: Json | null
          obtained: string
          rarity: number
          sub_category: string
        }
        Insert: {
          adeptal_energy: number
          blueprint: boolean
          category: string
          furnishing_name: string
          furnishing_name_long: string
          id?: number
          item_load: number
          load_reduced: number
          materials?: Json | null
          obtained: string
          rarity: number
          sub_category: string
        }
        Update: {
          adeptal_energy?: number
          blueprint?: boolean
          category?: string
          furnishing_name?: string
          furnishing_name_long?: string
          id?: number
          item_load?: number
          load_reduced?: number
          materials?: Json | null
          obtained?: string
          rarity?: number
          sub_category?: string
        }
        Relationships: []
      }
      genshin_furnishingset: {
        Row: {
          favor_chars: string[] | null
          gift_set: boolean
          id: number
          required_items: Json
          set_name: string
          set_name_long: string
        }
        Insert: {
          favor_chars?: string[] | null
          gift_set: boolean
          id?: number
          required_items: Json
          set_name: string
          set_name_long: string
        }
        Update: {
          favor_chars?: string[] | null
          gift_set?: boolean
          id?: number
          required_items?: Json
          set_name?: string
          set_name_long?: string
        }
        Relationships: []
      }
      genshin_items: {
        Row: {
          dropped_by: string[] | null
          farm_day: Json | null
          id: number
          item_type: string
          long_name: Json
          short_name: string
        }
        Insert: {
          dropped_by?: string[] | null
          farm_day?: Json | null
          id?: number
          item_type: string
          long_name: Json
          short_name: string
        }
        Update: {
          dropped_by?: string[] | null
          farm_day?: Json | null
          id?: number
          item_type?: string
          long_name?: Json
          short_name?: string
        }
        Relationships: []
      }
      genshin_spincrystal: {
        Row: {
          id: number
          source: string
          unlocked_track: string
        }
        Insert: {
          id?: number
          source: string
          unlocked_track: string
        }
        Update: {
          id?: number
          source?: string
          unlocked_track?: string
        }
        Relationships: []
      }
      genshin_traveler: {
        Row: {
          common_drop: string
          constellation_3: string
          constellation_5: string
          constellations: Json
          element: string
          id: number
          release: string
          talent_1: string
          talent_2: string
          talent_3: string
          talents: Json
          version: number
          weekly_drop: string
        }
        Insert: {
          common_drop: string
          constellation_3: string
          constellation_5: string
          constellations: Json
          element: string
          id?: number
          release: string
          talent_1: string
          talent_2: string
          talent_3: string
          talents: Json
          version: number
          weekly_drop: string
        }
        Update: {
          common_drop?: string
          constellation_3?: string
          constellation_5?: string
          constellations?: Json
          element?: string
          id?: number
          release?: string
          talent_1?: string
          talent_2?: string
          talent_3?: string
          talents?: Json
          version?: number
          weekly_drop?: string
        }
        Relationships: []
      }
      genshin_weapons: {
        Row: {
          ascension_material: string
          atk: Json
          common_drop: string
          id: number
          obtained: string
          passive: Json
          rare_drop: string
          rarity: number
          release: string
          sub_stat: Json
          version: number
          weapon_description: string
          weapon_name: string | null
          weapon_name_long: string
          weapon_type: string
        }
        Insert: {
          ascension_material: string
          atk?: Json
          common_drop: string
          id?: number
          obtained: string
          passive?: Json
          rare_drop: string
          rarity: number
          release: string
          sub_stat?: Json
          version: number
          weapon_description: string
          weapon_name?: string | null
          weapon_name_long: string
          weapon_type: string
        }
        Update: {
          ascension_material?: string
          atk?: Json
          common_drop?: string
          id?: number
          obtained?: string
          passive?: Json
          rare_drop?: string
          rarity?: number
          release?: string
          sub_stat?: Json
          version?: number
          weapon_description?: string
          weapon_name?: string | null
          weapon_name_long?: string
          weapon_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_genshin_weapons_ascension_material_fkey"
            columns: ["ascension_material"]
            isOneToOne: false
            referencedRelation: "genshin_items"
            referencedColumns: ["short_name"]
          },
          {
            foreignKeyName: "public_genshin_weapons_common_drop_fkey"
            columns: ["common_drop"]
            isOneToOne: false
            referencedRelation: "genshin_items"
            referencedColumns: ["short_name"]
          },
          {
            foreignKeyName: "public_genshin_weapons_rare_drop_fkey"
            columns: ["rare_drop"]
            isOneToOne: false
            referencedRelation: "genshin_items"
            referencedColumns: ["short_name"]
          }
        ]
      }
      genshin_weekly: {
        Row: {
          domain_name: string
          id: number
          other_drops: string[]
          weekly_drops: string[]
          weekly_name: string
          weekly_name_long: string
        }
        Insert: {
          domain_name: string
          id?: number
          other_drops: string[]
          weekly_drops: string[]
          weekly_name: string
          weekly_name_long: string
        }
        Update: {
          domain_name?: string
          id?: number
          other_drops?: string[]
          weekly_drops?: string[]
          weekly_name?: string
          weekly_name_long?: string
        }
        Relationships: []
      }
      tcg_action: {
        Row: {
          card_effect: string
          card_group: string[] | null
          card_name: string
          card_name_long: string
          card_type: string
          cost: Json
          has_requirements: boolean
          id: number
          requirements: Json | null
        }
        Insert: {
          card_effect: string
          card_group?: string[] | null
          card_name: string
          card_name_long: string
          card_type: string
          cost: Json
          has_requirements: boolean
          id?: number
          requirements?: Json | null
        }
        Update: {
          card_effect?: string
          card_group?: string[] | null
          card_name?: string
          card_name_long?: string
          card_type?: string
          cost?: Json
          has_requirements?: boolean
          id?: number
          requirements?: Json | null
        }
        Relationships: []
      }
      tcg_characters: {
        Row: {
          char_name: string
          char_name_long: string
          element: string
          faction: string
          health: number
          id: number
          skills: Json
          talent_card: string
          weapon_type: string
        }
        Insert: {
          char_name: string
          char_name_long: string
          element: string
          faction: string
          health: number
          id?: number
          skills: Json
          talent_card: string
          weapon_type: string
        }
        Update: {
          char_name?: string
          char_name_long?: string
          element?: string
          faction?: string
          health?: number
          id?: number
          skills?: Json
          talent_card?: string
          weapon_type?: string
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
