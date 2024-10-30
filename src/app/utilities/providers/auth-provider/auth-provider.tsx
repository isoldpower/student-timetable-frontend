'use client';

import {createContext, ReactNode, useMemo, useState} from "react";
import {BasicUser} from "@/entities/auth";
import {useAuth} from "./useAuth";

export interface AuthContextPayload {
    isAuthenticated: boolean;
    initialRender: boolean;
    user: BasicUser | null;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => Promise<void>;
    signup: (email: string, preferredName: string, password: string) => Promise<boolean>;
}

export const AuthProviderContext = createContext<AuthContextPayload>({
    isAuthenticated: false,
    initialRender: false,
    user: null,
    login: async () => {
        throw new Error('AuthProvider not implemented');
    },
    logout: async () => {
        throw new Error('AuthProvider not implemented');
    },
    signup: async () => {
        throw new Error('AuthProvider not implemented');
    }
});

type AuthProviderProps = {
    children: ReactNode;
}

export function AuthProvider({children}: AuthProviderProps) {
    const [initialRender, setInitialRender] = useState(false);
    const auth = useAuth();

    const value: AuthContextPayload = useMemo(() => ({ ...auth, initialRender }), [auth, initialRender]);

    return (
        <AuthProviderContext.Provider value={value}>
            {children}
        </AuthProviderContext.Provider>
    )
}