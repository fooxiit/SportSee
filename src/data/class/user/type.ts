import { s } from 'vite/dist/node/chunks/moduleRunnerTransport';

namespace UserType {
    export type Info = {
        firstName: string;
        lastName: string;
        age: number;
    };

    export interface RawData {
        id: number;
        userInfos: Info;
        score?: number;
        todayScore?: number;
        keyData: keyData;
    }

    export namespace Activity {
        interface Session {
            day: string;
            kilogram: number;
            calories: number;
        }

        export interface RowData {
            userId: number;
            sessions: Session[];
        }
    }

    export namespace Session {
        interface Session {
            day: number;
            sessionLength: number;
        }
        export interface RowData {
            userId: number;
            sessions: Session[];
        }
    }

    export namespace Performance {
        interface Data {
            value: number;
            kind: number;
        }
        export interface RowData {
            userId: number;
            kind: { [key: number]: string };
            data: Data[];
        }
    }

    export interface keyData {
        calorieCount: number;
        proteinCount: number;
        carbohydrateCount: number;
        lipidCount: number;
    }

    export interface User {
        id: number;
        userInfos: Info;
        score: number;
        userData: keyData;

        getActivityData({ signal }: { signal: AbortController }): Promise<any>;
        getSesionTimeData({ signal }: { signal: AbortController }): Promise<any>;
        getPerformanceData({ signal }: { signal: AbortController }): Promise<any>;
    }
}

export default UserType;
