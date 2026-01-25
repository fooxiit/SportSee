import React, { useCallback, useMemo } from 'react';
import useFetchData from '../../hook/useFetchData';
import useUserContext from '../../hook/useUserContext';
import UserStats from './UserStats';
interface UserStatsProviderProps {
    className?: string;
}
export default function UserStatsProvider({ className = '' }: UserStatsProviderProps) {
    const { user } = useUserContext();
    const getStat = useCallback(user.getPerformanceData.bind(user), [user]);
    const parm = useMemo(() => ({}), []);
    const { isLoading, onError, data } = useFetchData(getStat, parm);
    if (isLoading) return <div>loading</div>;
    if (onError.onError || !data) return <div>error</div>;
    return <UserStats data={data} className={className} />;
}
