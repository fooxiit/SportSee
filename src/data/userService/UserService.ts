import { API_URL } from '../../constante/env';
import UserType from '../class/user/type';
import fetchData from '../fetchData/fetchData';
import FetchDataType from '../fetchData/type';

class UserService {
    static #URL_API = API_URL;
    constructor() {
        throw new Error("this class con't be instantiated");
    }

    static async getUserById(id: string | number, signal: AbortSignal) {
        const responce = await fetchData<UserType.RawData>(`${this.#URL_API}user/${id}`, { signal });
        return responce;
    }

    static async getUserActivityById(id: string | number, signal: AbortSignal) {
        const responce = await fetchData<UserType.Activity.RowData>(`${this.#URL_API}user/${id}/activity`, { signal });
        return responce;
    }

    static async getUserSessionsById(id: string | number, signal: AbortSignal) {
        const responce = await fetchData<UserType.Session.RowData>(`${this.#URL_API}user/${id}/average-sessions`, { signal });
        return responce;
    }

    static async getUserPerformanceById(id: string | number, signal: AbortSignal) {
        const responce = await fetchData<UserType.Performance.RowData>(`${this.#URL_API}user/${id}/performance`, { signal });
        return responce;
    }
}

export default UserService;
