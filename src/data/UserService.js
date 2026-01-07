import { API_URL } from '../constante/env';
import fetchData from './fetchData';

class UserService {
    static #URL_API = API_URL;
    constructor() {
        throw new Error("this class con't be instantiated");
    }

    static async getUserById(id, signal) {
        const { data, error } = await fetchData(`${this.#URL_API}user/${id}`, { signal });
        if (error) return { error };
        return { user: data, error };
    }

    static async getUserActivityById(id, signal) {
        const { data, error } = await fetchData(`${this.#URL_API}user/${id}/activity`, { signal });
        if (error) return { error };
        return { userActivity: data, error };
    }

    static async getUserSessionsById(id, signal) {
        const { data, error } = await fetchData(`${this.#URL_API}user/${id}/average-sessions`, { signal });
        if (error) return { error };
        return { session: data, error };
    }

    static async getUserPerformanceById(id, signal) {
        const { data, error } = await fetchData(`${this.#URL_API}user/${id}/performance`, { signal });
        if (error) return { error };
        return { performance: data, error };
    }
}

export default UserService;
