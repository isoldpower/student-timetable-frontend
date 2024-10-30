import {ReactNode} from "react";
import {useAuthContext} from "@/app/utilities";
import {Skeleton} from "@/shared/ui-toolkit";

interface AuthHeaderFxProps {
    children: ReactNode;
}

export function AuthHeaderFx({ children }: AuthHeaderFxProps) {
    const { initialRender, isAuthenticated } = useAuthContext();

    if (!initialRender) return (
        <div className='flex gap-2 items-center'>
            <Skeleton className='h-8 w-8 rounded-full' />
            <Skeleton className='h-4 w-24' />
        </div>
    );

    if (!isAuthenticated) {
        return (
            <div className='flex items-center space-x-2'>
                <span className='text-sm font-semibold'>Guest</span>
            </div>
        )
    }

    return children;
}