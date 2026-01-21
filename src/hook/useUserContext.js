import { useContext } from 'react';
import UserContext from '../contexte/UserContext';

function useUserContext() {
    const userContext = useContext(UserContext);
    if (!userContext) throw new Error('UseUserContext must be used within a UserContext.Provider');

    return userContext;
}

export default useUserContext;
