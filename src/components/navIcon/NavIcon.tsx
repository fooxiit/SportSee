import React from 'react';
interface NavIconProps {
    imgSrc: string;
    alt: string;
    className?: string;
}
export default function NavIcon({ imgSrc, alt, className = '' }: NavIconProps) {
    return (
        <i className={`nav-icon flex flex--centre-item flex--centre-content  ${className}`}>
            <img src={imgSrc} alt={alt} />
        </i>
    );
}
