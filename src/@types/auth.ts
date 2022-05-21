import { AuthSession, User } from "@supabase/supabase-js";

export interface UserData {
    first_name: string;
    last_name: string;
    age: number;
    email: string;
    password: string;
}

export type SupabaseContextType = {
    isAuthenticated: boolean;
    isInitialized: boolean;
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    register: (userInfo: UserData) => Promise<void>;
    logout: () => Promise<void>;
    session: AuthSession | null;
};
