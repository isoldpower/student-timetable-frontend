'use client';

import {MainGutter} from "@/shared/utils/main-gutter";
import {SwitchTheme} from "@/features/general";
import {useAuthContext} from "@/app/utilities";
import {AuthHeaderFx} from "@/features/auth";

export function AppHeader() {
    const { user } = useAuthContext();

    return (
        <header className="border-b sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" aria-details='site-header'>
            <MainGutter>
                <div className="container flex h-14 max-w-screen-2xl items-center">
                    <div className='flex'>
                        <AuthHeaderFx>
                            <div className='flex items-center space-x-2'>
                                <img src={''} alt={user?.preferredName} className='w-8 h-8 rounded-full' />
                                <span className='text-sm font-semibold'>{user?.preferredName}</span>
                            </div>
                        </AuthHeaderFx>
                    </div>
                    <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                        <nav className="flex items-center">
                            <SwitchTheme />
                        </nav>
                    </div>
                </div>
            </MainGutter>
        </header>
    )
}