import { InfoType } from '../../../types/infoType';

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

    export type keyData = Record<InfoType.Kind, number>;

    export interface User {
        id: number;
        userInfos: Info;
        score: number;
        userData: keyData;
        infos: InfoType.Info[];
        scoreData: ChartTypes.RadialChart.Chart<ChartTypes.ScoreChart.data>;
        getActivityData({ signal }: { signal: AbortSignal }): Promise<ChartTypes.BarChart.Chart<ChartTypes.ActivityChart.Data>>;
        getSesionTimeData({ signal }: { signal: AbortSignal }): Promise<ChartTypes.LineChart.Chart<ChartTypes.SessionsChart.Data>>;
        getPerformanceData({ signal }: { signal: AbortSignal }): Promise<ChartTypes.RadarChart.Chart<ChartTypes.PerformanceChart.Data>>;
    }
}

export default UserType;
