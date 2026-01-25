import React, { useMemo } from 'react';
import useUserContext from '../../hook/useUserContext';
import UserInfo from './UserInfo';
/**
 * @description UserInfoProvider Props interface
 * @property className Optional additional class names
 */
interface UserInfoProviderProps {
    className?: string;
}
/**
 * @description UserInfoProvider component to fetch and provide user info data
 * @param props
 * @returns
 */
export default function UserInfoProvider({ className = '' }: UserInfoProviderProps) {
    const { user } = useUserContext();
    const infos = useMemo(() => user.infos, [user]);
    return <UserInfo infos={infos} className={className} />;
}
