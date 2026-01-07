import React from 'react';

export default function NavIcon({ imgSrc, alt, className = '' }) {
    return (
        <i className={`nav-icon flex flex--centre-item flex--centre-content  ${className}`}>
            <img src={imgSrc} alt={alt} />
        </i>
    );
}
