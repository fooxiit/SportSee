import React from 'react';
/**
 * @description NavIcon Props interface
 * @property imgSrc Source of the icon image
 * @property alt Alt text for the icon image
 * @property className Optional additional class names
 */
interface NavIconProps {
    imgSrc: string;
    alt: string;
    className?: string;
}
/**
 *
 * @description NavIcon component to display a navigation icon
 * @param props
 * @returns
 */
export default function NavIcon({ imgSrc, alt, className = '' }: NavIconProps) {
    return (
        <i className={`nav-icon flex flex--centre-item flex--centre-content  ${className}`}>
            <img src={imgSrc} alt={alt} />
        </i>
    );
}
