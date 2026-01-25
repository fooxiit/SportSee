import React, { useCallback, useMemo } from 'react';
import useFetchData from '../../hook/useFetchData';
import useUserContext from '../../hook/useUserContext';
import UserAverageSessions from './UserAverageSessions';
interface UserAverageSessionsProviderProps {
    className?: string;
}
export default function UserAverageSessionsProvider({ className = '' }: UserAverageSessionsProviderProps) {
    const { user } = useUserContext();
    const getUserData = useCallback(user.getSesionTimeData.bind(user), [user]);
    const parm = useMemo(() => ({}), []);
    const { isLoading, onError, data } = useFetchData(getUserData, parm);
    if (isLoading) return <div>loading</div>;
    if (onError.onError || data === null) return <div>error</div>;
    return <UserAverageSessions data={data} className={className} />;
}
