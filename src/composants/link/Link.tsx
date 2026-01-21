import React from 'react';

export default function Link({ children, href, alt, classname = '' }) {
    return (
        <a className={`link ${classname}`} href={href} alt={alt}>
            {children}
        </a>
    );
}
