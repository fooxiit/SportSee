import UserType from '../class/user/type';
import FetchDataType from '../fetchData/type';

/**
 *  User Service namespace.
 */
export namespace UserServiceType {
    /**
     * Generic data response interface.
     * @param T - The type of the data being returned.
     */
    export interface DataResponce<T> {
        data: T;
    }
}
