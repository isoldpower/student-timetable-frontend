'use client';

import {BaseHTMLAttributes, ReactNode, useLayoutEffect, useState} from "react";

interface ExcludeHeaderProps extends BaseHTMLAttributes<HTMLDivElement>{
    children: ReactNode;
}

export function ExcludeHeader({children, style, ...props}: ExcludeHeaderProps) {
    const [top, setTop] = useState<number>();

    useLayoutEffect(() => {
        const headerElement = document.querySelector('header[aria-details="site-header"]');
        setTop(headerElement?.scrollHeight || 0);
    }, []);

    return (
        <div style={{ maxHeight: `calc(100dvh - ${top}px)`, ...style }} {...props}>
            {children}
        </div>
    )
}