import UserType from '../class/user/type';
import fetchData from '../fetchData/fetchData';
import { UserServiceType } from './type';
/**
 * @class
 * @description UserService class provides static methods to fetch user-related data from the API.
 * @remarks This class cannot be instantiated.
 */
export default class MockedService implements UserServiceType.UserServiceInterface {
    static instence: UserServiceType.UserServiceInterface | null = null;
    constructor() {
        if (MockedService.instence !== null) return MockedService.instence;
        MockedService.instence = this;
        return this;
    }

    async getUserById(id: string | number, signal?: AbortSignal) {
        const responce = await fetchData<UserServiceType.DataResponce<UserType.RawData>>('/mockedUser.json', { signal });
        return responce;
    }

    async getUserActivityById(id: string | number, signal?: AbortSignal) {
        const responce = await fetchData<UserServiceType.DataResponce<UserType.Activity.RowData>>('/mokedActivitys.json', { signal });
        return responce;
    }

    async getUserSessionsById(id: string | number, signal?: AbortSignal) {
        const responce = await fetchData<UserServiceType.DataResponce<UserType.Session.RowData>>('/mockedSessions.json', { signal });
        return responce;
    }

    async getUserPerformanceById(id: string | number, signal?: AbortSignal) {
        const responce = await fetchData<UserServiceType.DataResponce<UserType.Performance.RowData>>('/mockedStats.json', { signal });
        return responce;
    }
}
