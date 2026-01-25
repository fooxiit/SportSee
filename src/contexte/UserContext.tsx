import { createContext } from 'react';
import UserType from '../data/class/user/type';
/**
 * @description User Context
 */
export interface Context {
    user: UserType.User;
}
const UserContext = createContext<Context | null>(null);
export default UserContext;
