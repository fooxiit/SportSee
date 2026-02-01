import React, { useCallback, useMemo } from 'react';
import useFetchData, { STATUS } from '../../hook/useFetchData';
import useUserContext from '../../hook/useUserContext';
import UserStats from './UserStats';
import UserStatsError from './UserStatsError';
import Loading from '../loading/Loading';
/**
 * @description UserStatsProvider Props interface
 * @property className Optional additional class names
 */
interface UserStatsProviderProps {
    className?: string;
}
/**
 *
 * @description UserStatsProvider component to fetch and provide user stats data
 * @param props
 * @returns
 */
export default function UserStatsProvider({ className = '' }: UserStatsProviderProps) {
    const { user } = useUserContext();
    const getStat = useCallback(user.getPerformanceData.bind(user), [user]);
    const parm = useMemo(() => ({}), []);
    const responce = useFetchData(getStat, parm);
    if (responce.status === STATUS.LOADING) return <Loading className={className} />;
    if (responce.status === STATUS.ERROR) return <UserStatsError error={responce.error} className={className} />;
    return <UserStats data={responce.data} className={className} />;
}
