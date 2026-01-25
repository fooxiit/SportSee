import { API_URL } from '../../constante/env';
import UserType from '../class/user/type';
import fetchData from '../fetchData/fetchData';
import { UserServiceType } from './type';
/**
 * @class
 * @description UserService class provides static methods to fetch user-related data from the API.
 * @remarks This class cannot be instantiated.
 */
export default class UserService {
    static #URL_API = API_URL;
    constructor() {
        throw new Error("this class con't be instantiated");
    }

    static async getUserById(id: string | number, signal?: AbortSignal) {
        const responce = await fetchData<UserServiceType.DataResponce<UserType.RawData>>(`${this.#URL_API}user/${id}`, { signal });
        return responce;
    }

    static async getUserActivityById(id: string | number, signal?: AbortSignal) {
        const responce = await fetchData<UserServiceType.DataResponce<UserType.Activity.RowData>>(`${this.#URL_API}user/${id}/activity`, { signal });
        return responce;
    }

    static async getUserSessionsById(id: string | number, signal?: AbortSignal) {
        const responce = await fetchData<UserServiceType.DataResponce<UserType.Session.RowData>>(`${this.#URL_API}user/${id}/average-sessions`, { signal });
        return responce;
    }

    static async getUserPerformanceById(id: string | number, signal?: AbortSignal) {
        const responce = await fetchData<UserServiceType.DataResponce<UserType.Performance.RowData>>(`${this.#URL_API}user/${id}/performance`, { signal });
        return responce;
    }
}
