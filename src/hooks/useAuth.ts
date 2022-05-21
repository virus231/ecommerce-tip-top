import { AuthContext } from "@/context/SupabaseContext";
import { useContext } from "react";

export const useAuth = () => {
    return useContext(AuthContext);
};
