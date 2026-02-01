import React, { useCallback, useMemo } from 'react';
import useFetchData, { STATUS } from '../../hook/useFetchData';
import useUserContext from '../../hook/useUserContext';
import UserAverageSessions from './UserAverageSessions';
import UserAverageSessionsError from './UserAverageSessionsError';
import Loading from '../loading/Loading';

/**
 * @description UserAverageSessionsProvider Props interface
 * @property className Optional additional class names
 */
interface UserAverageSessionsProviderProps {
    className?: string;
}
/**
 *
 * @description UserAverageSessionsProvider component to fetch and provide user average session data
 * @param props
 * @returns
 */
export default function UserAverageSessionsProvider({ className = '' }: UserAverageSessionsProviderProps) {
    const { user } = useUserContext();
    const getUserData = useCallback(user.getSesionTimeData.bind(user), [user]);
    const parm = useMemo(() => ({}), []);
    const responce = useFetchData(getUserData, parm);
    if (responce.status === STATUS.LOADING) return <Loading className={`user-average-sessions flex flex--column ${className}`} />;
    if (responce.status === STATUS.ERROR) return <UserAverageSessionsError error={responce.error} className={className} />;
    return <UserAverageSessions data={responce.data} className={className} />;
}
