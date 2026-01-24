import React, { ReactNode } from 'react';

interface LinkProps {
    children: ReactNode;
    href: string;
    classname?: string;
}

export default function Link({ children, href, classname = '' }: LinkProps) {
    return (
        <a className={`link ${classname}`} href={href}>
            {children}
        </a>
    );
}
