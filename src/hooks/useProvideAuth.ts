import { UserData } from "@/@types/auth";
import { supabase } from "@/services/supabase-config";
import { AuthSession, User } from "@supabase/supabase-js";
import { useEffect, useState, useMemo, useCallback } from "react";
import { useRouter } from "next/router";

export function useProvideAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isInitialized, setIsInitialized] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<AuthSession | null>(null);

    const { push } = useRouter();

    useEffect(() => {
        const session = supabase.auth.session();

        setSession(session);
        setUser(session?.user ?? null);

        const { data: authListener } = supabase.auth.onAuthStateChange(
            (_event: string, session: AuthSession | null) => {
                setSession(session);
                setUser(session?.user ?? null);
                _event == `SIGNED_OUT`
                    ? setIsAuthenticated(false)
                    : setIsAuthenticated(true);
            },
        );

        return () => {
            authListener?.unsubscribe();
        };
    }, []);

    const login = useCallback(async (email: string, password: string) => {
        setIsInitialized(true);
        try {
            const { user, session, error } = await supabase.auth.signIn({
                email,
                password,
            });
            setUser(user);
            setIsAuthenticated(true);
            push(`/`);
        } catch (e) {
            setIsAuthenticated(false);
            setIsInitialized(false);
        }
        setIsInitialized(false);
    }, []);

    const register = async ({
        first_name,
        last_name,
        age,
        email,
        password,
    }: UserData) => {
        setIsInitialized(true);
        try {
            const { user, error } = await supabase.auth.signUp(
                {
                    email,
                    password,
                },
                {
                    data: {
                        first_name,
                        last_name,
                        age,
                    },
                },
            );
            setUser(user);
        } catch (e) {
            setIsInitialized(false);
            setIsAuthenticated(false);
        } finally {
            setIsInitialized(false);
            setIsAuthenticated(false);
        }
    };

    const logout = async () => {
        setIsInitialized(true);
        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;

            setIsAuthenticated(false);
            setUser(null);

            // await router.replace('/signin');
        } catch (e) {
            throw e;
        }
        setIsInitialized(false);
    };

    const ctx = useMemo(
        () => ({
            session,
            isAuthenticated,
            isInitialized,
            user,
            login,
            register,
            logout,
        }),
        [session, isAuthenticated, isInitialized, user, login],
    );

    return {
        ...ctx,
    };
}
