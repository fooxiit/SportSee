import { useMemo } from 'react';
import useUserContext from '../../hook/useUserContext';
import './userInfo.css';
import Info from '../info/Info';
import { InfoType } from '../../types/infoType';
interface UserInfoProps {
    className?: string;
    infos: InfoType.Info[];
}
export default function UserInfo({ className = '', infos }: UserInfoProps) {
    return (
        <div className={`user-info flex flex--centre-item flex--column ${className}`}>
            {infos.map((info, index) => (
                <Info key={`info-${index}`} infoData={info} />
            ))}
        </div>
    );
}
