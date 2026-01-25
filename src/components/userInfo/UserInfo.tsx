import './userInfo.css';
import Info from '../info/Info';
import { InfoType } from '../../types/infoType';
/**
 * @description UserInfo Props interface
 * @property className Optional additional class names
 * @property infos Array of user info data
 */
interface UserInfoProps {
    className?: string;
    infos: InfoType.Info[];
}
/**
 *
 * @description UserInfo component to display user information
 * @param props
 * @returns
 */
export default function UserInfo({ className = '', infos }: UserInfoProps) {
    return (
        <div className={`user-info flex flex--centre-item flex--column ${className}`}>
            {infos.map((info, index) => (
                <Info key={`info-${index}`} infoData={info} />
            ))}
        </div>
    );
}
