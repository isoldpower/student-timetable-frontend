'use client';

import {useAuthContext} from "@/app/utilities";
import {ReactNode} from "react";
import {usePathname} from "next/navigation";
import {AuthRedirectObserver} from "@/features/auth/auth-redirect-observer";

interface PrivateRouteProps {
    children: ReactNode;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
    const location = usePathname();
    const {initialRender, isAuthenticated, user} = useAuthContext();

    if (!initialRender) {
        return (
            <AuthRedirectObserver destination={location}>
                <div>Loading...</div>
            </AuthRedirectObserver>
        );
    }

    return (isAuthenticated && user) ? children : null;
}