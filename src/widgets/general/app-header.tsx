'use client';

import {Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/shared/ui-toolkit";
import {MoonIcon, SunIcon} from "lucide-react";
import {useTheme} from "next-themes";
import {MainGutter} from "@/shared/utils/main-gutter";

export function AppHeader() {
    const { setTheme } = useTheme();

    return (
        <header className="border-b sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" aria-details='site-header'>
            <MainGutter>
                <div className="container flex h-14 max-w-screen-2xl items-center">
                    <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                        <nav className="flex items-center">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="h-8 w-8 px-0">
                                        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                        <span className="sr-only">Toggle theme</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem onClick={() => setTheme("light")}>
                                        Light
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                                        Dark
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setTheme("system")}>
                                        System
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </nav>
                    </div>
                </div>
            </MainGutter>
        </header>
    )
}