import { useMemo } from 'react';
import useUserContext from '../../hook/useUserContext';
import './userInfo.css';
import Info from '../info/Info';
interface UserInfoProps {
    className?: string;
}
export default function UserInfo({ className = '' }: UserInfoProps) {
    const { user } = useUserContext();
    const infos = useMemo(() => user.infos, [user]);
    return (
        <div className={`user-info flex flex--centre-item flex--column ${className}`}>
            {infos.map((info, index) => (
                <Info key={`info-${index}`} infoData={info} />
            ))}
        </div>
    );
}
