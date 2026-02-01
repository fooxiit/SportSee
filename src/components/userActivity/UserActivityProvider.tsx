import React, { useCallback, useMemo } from 'react';
import useFetchData, { STATUS } from '../../hook/useFetchData';
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
    const responce = useFetchData(getActivity, parm);

    if (responce.status === STATUS.LOADING) return <Loading className={className} />;
    if (responce.status === STATUS.ERROR) return <UserActivityError className={className} error={responce.error} />;
    return <UserActivity data={responce.data} className={className} />;
}
