import React from 'react';
import { NAV_ICONS } from '../../constante/link';

import './sideNav.css';
import STRING from '../../constante/String';
import NavIcon from '../navIcon/NavIcon';

export default function Side() {
    return (
        <div className="side-nav flex flex--column flex--centre-item">
            <div className="side-nav__nav-icons flex flex--column flex--centre-item">
                {NAV_ICONS.map((navIcon, index) => (
                    <NavIcon key={`navIcon-${index}`} imgSrc={navIcon.imgSrc} alt={navIcon.alt} className="side-nav__nav-icon" />
                ))}
            </div>
            <span className="side-nav__copiryght">{STRING.FR.COPIRIGHT}</span>
        </div>
    );
}
