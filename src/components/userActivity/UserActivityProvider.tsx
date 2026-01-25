import React, { useCallback, useMemo } from 'react';
import useFetchData from '../../hook/useFetchData';
import useUserContext from '../../hook/useUserContext';
import UserActivity from './UserActivity';

interface UserActivityProviderProps {
    className?: string;
}

export default function UserActivityProvider({ className = '' }: UserActivityProviderProps) {
    const { user } = useUserContext();
    const getActivity = useCallback(user.getActivityData.bind(user), [user]);
    const parm = useMemo(() => ({}), []);
    const { isLoading, onError, data } = useFetchData(getActivity, parm);
    if (onError.onError || !data) return <div>error</div>;
    if (isLoading) return <div>loading</div>;
    return <UserActivity data={data} className={className} />;
}
