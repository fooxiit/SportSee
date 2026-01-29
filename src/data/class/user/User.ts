import { DayType, getDayFromDate, getDayFromNum } from '../../../function/getDayFrom';
import getKindName from '../../../function/kindMaping';
import COLORS from '../../../constante/colors';
import STRING from '../../../constante/String';
import infoFactory from '../../../factory/StatsFactory';
import UserService from '../../userService/UserService';
import UserType from './type';
import FetchDataType from '../../fetchData/type';
import MockedService from '../../userService/MockedService';

/**
 * @class
 * @description User Class implementing UserType.User interface
 */
export default class User implements UserType.User {
    public id;
    public userInfos;
    public score;
    public userData;
    private service;

    static async getUserById({ id, signal, useMock = false }: { id: number; signal?: AbortSignal; useMock: boolean }): Promise<UserType.User> {
        const service = useMock ? new MockedService() : new UserService();
        const responce = await service.getUserById(id, signal);
        if (responce.status === FetchDataType.responceStatus.ERROR) throw new Error(responce.message, { cause: responce });
        return new User(responce.data.data, service);
    }

    constructor({ id, userInfos, score, todayScore, keyData }: UserType.RawData, service: UserService) {
        this.id = id;
        this.userInfos = userInfos;
        this.score = score || todayScore || 0;
        this.userData = keyData;
        this.service = service;
    }

    async getActivityData({ signal }: { signal?: AbortSignal }): Promise<ChartTypes.BarChart.Chart<ChartTypes.ActivityChart.Data>> {
        const responce = await this.service.getUserActivityById(this.id, signal);
        if (responce.status === FetchDataType.responceStatus.ERROR) throw new Error(responce.message, { cause: responce });
        const { sessions } = responce.data.data;
        return {
            xAxisKey: 'day',
            bars: [
                {
                    barRadus: [3, 3, 0, 0],
                    name: STRING.FR.CHARTS.DAILY.LEDGEND.WEIGHT,
                    dataKey: 'kg',
                    fill: COLORS.CHART.DAILY.FILL.WEIGHT,
                    yAxis: { tickCount: 3, position: 'right', id: 'kg', max: (dataMax) => dataMax + 1, min: (dataMin) => dataMin - 2, tick: true },
                },
                {
                    barRadus: [3, 3, 0, 0],
                    name: STRING.FR.CHARTS.DAILY.LEDGEND.BURN,
                    dataKey: 'cal',
                    fill: COLORS.CHART.DAILY.FILL.BURN,
                    yAxis: { tickCount: 7, position: 'left', id: 'cal', min: 0, max: (dataMax) => dataMax + 100, tick: false },
                },
            ],
            data: sessions.map((data): ChartTypes.ActivityChart.Data => ({ day: getDayFromDate(data.day, DayType.number), kg: data.kilogram, cal: data.calories })),
        };
    }

    async getSesionTimeData({ signal }: { signal?: AbortSignal }): Promise<ChartTypes.LineChart.Chart<ChartTypes.SessionsChart.Data>> {
        const responce = await this.service.getUserSessionsById(this.id, signal);
        if (responce.status === FetchDataType.responceStatus.ERROR) throw new Error(responce.message, { cause: responce });
        const { sessions } = responce.data.data;
        return {
            xAxisKey: 'day',
            lines: [{ dataKey: 'time', fill: COLORS.CHART.SESION_TIME.FILL.TIME }],
            data: sessions.map((data) => ({ day: getDayFromNum(data.day), time: data.sessionLength })),
        };
    }

    async getPerformanceData({ signal }: { signal?: AbortSignal }): Promise<ChartTypes.RadarChart.Chart<ChartTypes.PerformanceChart.Data>> {
        const responce = await this.service.getUserPerformanceById(this.id, signal);
        if (responce.status === FetchDataType.responceStatus.ERROR) throw new Error(responce.message, { cause: responce });
        const { data, kind } = responce.data.data;
        return {
            PolarAngleAxisKey: 'kind',
            radars: [{ dataKey: 'value', fill: COLORS.CHART.STATS.FILL.ALL }],
            data: data.map((stat) => ({ value: stat.value, kind: getKindName(stat.kind, kind) })),
        };
    }

    get scoreData() {
        return {
            score: this.score * 100,
            radialBars: [{ fill: { data: COLORS.CHART.SCORE.FILL, background: COLORS.CHART.SCORE.BACKGROUND }, dataKey: 'score' }],
            data: [{ score: this.score * 100 }],
        };
    }

    get infos() {
        const infos = [];
        for (const info in this.userData) {
            infos.push(infoFactory(info, this.userData[info as keyof typeof this.userData]));
        }
        return infos;
    }
}
