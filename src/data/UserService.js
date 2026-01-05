import { API_URL } from '../constante/env';
import fetchData from './fetchData';

class UserService {
    static #URL_API = API_URL;
    constructor() {
        throw new Error("this class con't be instantiated");
    }

    static async getUserById(id) {
        const { data, error } = await fetchData(`${this.#URL_API}user/${id}`);
        if (error) return { error };
        return { user: data, error };
    }

    static async getUserActivityById(id) {
        const { data, error } = await fetchData(`${this.#URL_API}user/${id}/activity`);
        if (error) return { error };
        return { userActivity: data, error };
    }

    static async getUserSessionsById(id) {
        const { data, error } = await fetchData(`${this.#URL_API}user/${id}/average-sessions`);
        if (error) return { error };
        return { session: data, error };
    }

    static async getUserPerformanceById(id) {
        const { data, error } = await fetchData(`${this.#URL_API}user/${id}/performance`);
        if (error) return { error };
        return { performance: data, error };
    }
}

export default UserService;
