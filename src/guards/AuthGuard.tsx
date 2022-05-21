import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

export function AuthGuard({ children }: { children: JSX.Element }) {
    const auth = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!auth?.isInitialized) {
            //auth is initialized and there is no user
            if (!auth?.user) {
                // remember the page that user tried to access
                // setRedirect(router.route)
                // redirect
                router.push(`/signin`);
            }
        }
    }, [auth?.isInitialized, router, auth?.user]);

    /* show loading indicator while the auth provider is still initializing */
    // if (!auth?.isInitialized) {
    //   return <h1>Application Loading</h1>
    // }

    // if auth initialized with a valid user show protected page
    if (auth?.isAuthenticated && auth?.user) {
        return <>{children}</>;
    }

    /* otherwise don't return anything, will do a redirect from useEffect */
    return null;
}
