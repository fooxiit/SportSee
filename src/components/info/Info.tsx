import React from 'react';
import './info.css';
export default function Info({ infoData }) {
    return (
        <div className={`flex flex--centre-item info info--${infoData.type}`}>
            <div data-type={infoData.type} className="flex flex--centre-item flex--centre-content info__logo">
                <img src={infoData.imgSrc} alt={infoData.name} />
            </div>
            <div className="flex flex--column info__value">
                <span className="info__value__count">{`${infoData.value}${infoData.unit}`}</span>
                <span className="info__value__name">{infoData.name}</span>
            </div>
        </div>
    );
}
