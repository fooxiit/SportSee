import React, { ReactNode } from 'react';
/**
 * @description Link Props interface
 * @property children Link text or elements
 * @property href Link destination
 * @property classname Optional additional class names
 */
interface LinkProps {
    children: ReactNode;
    href: string;
    classname?: string;
}
/**
 * @description Link component
 * @param props
 * @returns
 */
export default function Link({ children, href, classname = '' }: LinkProps) {
    return (
        <a className={`link ${classname}`} href={href}>
            {children}
        </a>
    );
}
