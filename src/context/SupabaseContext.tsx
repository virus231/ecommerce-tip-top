import { useProvideAuth } from "@/hooks/useProvideAuth";
import { createContext, useEffect } from "react";
import { SupabaseContextType } from "@/@types/auth";

export const AuthContext = createContext({} as SupabaseContextType);

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }: any) {
    const auth = useProvideAuth();

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
