import { API_URL } from '../../constante/env';
import STRING from '../../constante/String';
import UserType from '../class/user/type';
import fetchData from '../fetchData/fetchData';
import { UserServiceType } from './type';
/**
 * @class
 * @description UserService class provides static methods to fetch user-related data from the API.
 * @remarks This class cannot be instantiated.
 */
export default class UserService implements UserServiceType.UserServiceInterface {
    static instence: UserServiceType.UserServiceInterface | null = null;
    constructor() {
        if (UserService.instence !== null) return UserService.instence;
        UserService.instence = this;
        return this;
    }

    async getUserById(id: string | number, signal?: AbortSignal) {
        const responce = await fetchData<UserServiceType.DataResponce<UserType.RawData>>(`${API_URL}user/${id}`, { signal });
        return responce;
    }

    async getUserActivityById(id: string | number, signal?: AbortSignal) {
        const responce = await fetchData<UserServiceType.DataResponce<UserType.Activity.RowData>>(`${API_URL}user/${id}/activity`, { signal });
        return responce;
    }

    async getUserSessionsById(id: string | number, signal?: AbortSignal) {
        const responce = await fetchData<UserServiceType.DataResponce<UserType.Session.RowData>>(`${API_URL}user/${id}/average-sessions`, { signal });
        return responce;
        API_URL;
    }

    async getUserPerformanceById(id: string | number, signal?: AbortSignal) {
        const responce = await fetchData<UserServiceType.DataResponce<UserType.Performance.RowData>>(`${API_URL}user/${id}/performance`, { signal });
        return responce;
    }
}
