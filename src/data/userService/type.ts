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

    export interface UserServiceInterface {
        getUserById(id: string | number, signal?: AbortSignal): Promise<FetchDataType.FetchDataResponse<DataResponce<UserType.RawData>>>;
        getUserActivityById(id: string | number, signal?: AbortSignal): Promise<FetchDataType.FetchDataResponse<DataResponce<UserType.Activity.RowData>>>;
        getUserSessionsById(id: string | number, signal?: AbortSignal): Promise<FetchDataType.FetchDataResponse<DataResponce<UserType.Session.RowData>>>;
        getUserPerformanceById(id: string | number, signal?: AbortSignal): Promise<FetchDataType.FetchDataResponse<DataResponce<UserType.Performance.RowData>>>;
    }
}
