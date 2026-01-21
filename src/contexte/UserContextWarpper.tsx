import User from '../data/class/User';
import UserContext from './UserContext';
import useFetchData from '../hook/useFetchData';
import { useMemo } from 'react';

const UserContextWarpper = ({ children, userId }) => {
    const parm = useMemo(() => ({ id: userId }), [userId]);
    const fetcher = useMemo(() => User.getUserById, []);
    const { isLoading, onError, data } = useFetchData(fetcher, parm);
    if (onError.onError) return <div>error</div>;
    if (isLoading) return <div>loading</div>;
    return <UserContext value={{ user: data }}>{children}</UserContext>;
};

export default UserContextWarpper;
