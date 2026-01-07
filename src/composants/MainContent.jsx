import React from 'react';
import '../css/mainContent.css';
export default function MainContent({ children }) {
    return <div className="main-content grid grid--8c">{children}</div>;
}
