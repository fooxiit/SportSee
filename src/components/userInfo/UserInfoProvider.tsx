import React, { useMemo } from 'react';
import useUserContext from '../../hook/useUserContext';
import UserInfo from './UserInfo';
interface UserInfoProviderProps {
    className?: string;
}
export default function UserInfoProvider({ className = '' }: UserInfoProviderProps) {
    const { user } = useUserContext();
    const infos = useMemo(() => user.infos, [user]);
    return <UserInfo infos={infos} className={className} />;
}
