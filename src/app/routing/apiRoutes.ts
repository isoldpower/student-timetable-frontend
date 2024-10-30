'use client';

export const apiRoutes = {
    auth: {
        login: process.env.NEXT_PUBLIC_AUTHENTICATION_SYSTEM_URL + '/login/',
        signup: process.env.NEXT_PUBLIC_AUTHENTICATION_SYSTEM_URL + '/signup/',
        fetch: process.env.NEXT_PUBLIC_AUTHENTICATION_SYSTEM_URL + '/user/',
        logout: process.env.NEXT_PUBLIC_AUTHENTICATION_SYSTEM_URL + '/logout/',
        refresh: process.env.NEXT_PUBLIC_AUTHENTICATION_SYSTEM_URL + '/token/refresh/',
    }
}