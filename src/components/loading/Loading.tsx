import React from 'react';
import './loading.css';
interface Props {
    className: string;
}
export default function Loading({ className }: Props) {
    return <div className={`loading ${className}`}></div>;
}
