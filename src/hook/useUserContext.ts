import { useContext } from 'react';
import UserContext from '../contexte/UserContext';
/**
 * @description hok to use user context
 * @throws Error if used outside of UserContext.Provider
 * @returns
 */
function useUserContext() {
    const userContext = useContext(UserContext);
    if (!userContext) throw new Error('UseUserContext must be used within a UserContext.Provider');

    return userContext;
}

export default useUserContext;
