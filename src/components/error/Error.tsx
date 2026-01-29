import React from 'react';
import STRING from '../../constante/String';
import './error.css';
interface ErrorProps {
    errorMessage: string;
    className?: String;
}

export default function Error({ errorMessage, className = '' }: ErrorProps) {
    return (
        <div className={`flex flex--column flex--centre-item flex--centre-content error ${className}`}>
            <h3>{STRING.FR.ERROR}</h3>
            <span>{errorMessage}</span>
        </div>
    );
}
