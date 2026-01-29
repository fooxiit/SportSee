import React, { useCallback, useMemo } from 'react';
import useFetchData from '../../hook/useFetchData';
import useUserContext from '../../hook/useUserContext';
import UserActivity from './UserActivity';
import UserActivityError from './UserActivityError';
import Loading from '../loading/Loading';
/**
 * @description UserActivityProvider Props interface
 * @property className Optional additional class names
 */
interface UserActivityProviderProps {
    className?: string;
}
/**
 * @description UserActivityProvider component to fetch and provide user activity data
 * @param props
 * @returns
 */
export default function UserActivityProvider({ className = '' }: UserActivityProviderProps) {
    const { user } = useUserContext();
    const getActivity = useCallback(user.getActivityData.bind(user), [user]);
    const parm = useMemo(() => ({}), []);
    const { isLoading, onError, data } = useFetchData(getActivity, parm);

    if (isLoading) return <Loading className={className} />;
    if (onError.onError || !data) return <UserActivityError className={className} error={onError} />;
    return <UserActivity data={data} className={className} />;
}
