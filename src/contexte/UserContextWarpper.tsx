import UserContext from './UserContext';
import useFetchData from '../hook/useFetchData';
import { ReactNode, useCallback, useMemo } from 'react';
import User from '../data/class/user/User';

interface UserContextProps {
    children: ReactNode;
    userId: number;
}

const UserContextWarpper = ({ children, userId }: UserContextProps) => {
    const parm = useMemo(() => ({ id: userId }), [userId]);
    const fetcher = useCallback(User.getUserById, []);
    const { isLoading, onError, data } = useFetchData(fetcher, parm);
    if (onError.onError) return <div>error</div>;
    if (isLoading) return <div>loading</div>;
    if (data === null) return <div>error</div>;
    return <UserContext value={{ user: data }}>{children}</UserContext>;
};

export default UserContextWarpper;
