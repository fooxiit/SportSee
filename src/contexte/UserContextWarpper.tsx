import UserContext from './UserContext';
import useFetchData, { STATUS } from '../hook/useFetchData';
import { ReactNode, useCallback, useMemo } from 'react';
import User from '../data/class/user/User';
import Error from '../components/error/Error';
import getErroeMessage from '../components/error/getErrorMessage';
import Loading from '../components/loading/Loading';

/**
 * @description Props for UserContextWarpper component
 * @property children ReactNode children components
 * @property userId number id of the user to fetch
 */
interface UserContextProps {
    children: ReactNode;
    userId: number;
}
/**
 * @param props
 * @description User Context Wrapper to fetch user data and provide it to the context
 * @returns returns UserContext.Provider with user data
 */
const UserContextWarpper = ({ children, userId }: UserContextProps) => {
    const parm = useMemo(() => ({ id: userId }), [userId]);
    const fetcher = useCallback(User.getUserById, []);
    const responce = useFetchData(fetcher, parm);
    if (responce.status === STATUS.LOADING) return <Loading className="home grid" />;

    if (responce.status === STATUS.ERROR) {
        return (
            <div className="error-warpper home grid">
                <Error errorMessage={responce.error.message} />
            </div>
        );
    }
    return <UserContext value={{ user: responce.data }}>{children}</UserContext>;
};

export default UserContextWarpper;
