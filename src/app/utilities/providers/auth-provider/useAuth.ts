import {useCallback, useMemo, useState} from "react";
import {BasicUser} from "@/entities/auth";

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<BasicUser | null>(null);

    const login = useCallback(async (email: string, password: string): Promise<boolean> => {
        return false;
    }, []);

    const logout = useCallback(async (): Promise<void> => {

    }, []);

    const signup = useCallback(async (email: string, preferredName: string, password: string): Promise<boolean> => {
        return false;
    }, []);

    return useMemo(() => ({
        isAuthenticated,
        user,
        login,
        logout,
        signup
    }), [isAuthenticated, login, logout, signup, user]);
}