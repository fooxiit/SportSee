import { InfoType } from '../../../types/infoType';
/**
 * @namespace UserType
 * @description Types and interfaces related to User data and structure.
 */
namespace UserType {
    /**
     * @description User Info Type
     * @property firstName User first name
     * @property lastName User last name
     * @property age User age
     */
    export type Info = {
        firstName: string;
        lastName: string;
        age: number;
    };

    /**
     * @description Raw data interface for User class from API
     * @property id User id
     * @property userInfos User infos @see Info
     * @property score User score
     * @property todayScore User today score
     * @property keyData User key data @see keyData
     */
    export interface RawData {
        id: number;
        userInfos: Info;
        score?: number;
        todayScore?: number;
        keyData: keyData;
    }
    /**
     * @namespace Activity
     * @description types related to User Activity Data
     */
    export namespace Activity {
        /**
         *
         * @description data session interface representing a single activity session of a user
         * @property day Date of the session in format 'YYYY-MM-DD'
         * @property kilogram Weight in kilograms
         * @property calories Calories burned during the session
         */
        export interface Session {
            day: string;
            kilogram: number;
            calories: number;
        }
        /**
         * @description Row data interface representing the activity data of a user from the API
         * @property userId User id
         * @property sessions Array of activity sessions @see Session
         */
        export interface RowData {
            userId: number;
            sessions: Session[];
        }
    }
    /**
     * @namespace Session
     * @description types related to User Session Time Data
     */
    export namespace Session {
        /**
         * @description data session interface representing a single session time entry of a user
         * @property day Day of the week as a number (1-7)
         * @property sessionLength Length of the session in minutes
         */
        export interface Session {
            day: number;
            sessionLength: number;
        }
        /**
         * Row data interface representing the session time data of a user from the API
         * @property userId User id
         * @property sessions Array of session time entries @see Session
         */
        export interface RowData {
            userId: number;
            sessions: Session[];
        }
    }
    /**
     * @namespace Performance
     *  @description types related to User Performance Data
     */
    export namespace Performance {
        /**
         * @description data interface representing a single performance metric of a user
         * @property value Value of the performance metric
         * @property kind Kind of performance metric as a number
         */
        export interface Data {
            value: number;
            kind: number;
        }
        /**
         * @description Row data interface representing the performance data of a user from the API
         * @property userId User id
         * @property kind Mapping of performance kinds
         * @property data Array of performance data @see Data
         */
        export interface RowData {
            userId: number;
            kind: { [key: number]: string };
            data: Data[];
        }
    }
    /**
     * @description Key Data type representing user's key nutritional data
     * @description key is of type InfoType.Kind and value is a number @see InfoType.Kind
     */
    export type keyData = Record<InfoType.Kind, number>;
    /**
     * @description User Interface
     * @property  id User id
     * @property  userInfos User infos @see Info
     * @property  score User score
     * @property  userData User key data @see keyData
     * @property  infos Array of InfoType.Info @see InfoType.Info
     * @property  scoreData User score data for charts @see ChartTypes.RadialChart.Chart
     * @property  getActivityData Method to get user activity data
     * @property  getSesionTimeData Method to get user session time data
     * @property  getPerformanceData Method to get user performance data
     */
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
