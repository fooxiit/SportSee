import { getDayFromDate, dayType, getDayFromNum } from '../../../function/getDayFrom';
import getKindName from '../../../function/kindMaping';
import COLORS from '../../../constante/colors';
import STRING from '../../../constante/String';
import infoFactory from '../../../factory/StatsFactory';
import UserService from '../../UserService';

class User {
    /**
     *
     * @param {Number} id
     * @param {AbortSignal} signal
     * @returns {Promise<User>}
     */
    static async getUserById({ id, signal }) {
        const { user, error } = await UserService.getUserById(id, signal);
        if (error) throw new Error('une erreur et survene', error);
        return new User(user);
    }

    /**
     *
     * @param {UserType} param
     */
    constructor({ id, userInfos, score, todayScore, keyData }) {
        this.id = id;
        this.userInfos = userInfos;
        this.score = score || todayScore;
        this.userData = keyData;
    }

    get activityData() {
        return async ({ signal }) => {
            const { userActivity, error } = await UserService.getUserActivityById(this.id, signal);
            if (error) throw new Error('une erreur et survene', error);
            const { sessions } = userActivity;
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
                data: sessions.map((data) => ({ day: getDayFromDate(data.day, dayType.number), kg: data.kilogram, cal: data.calories })),
            };
        };
    }

    get sesionTimeData() {
        return async ({ signal }) => {
            const { session, error } = await UserService.getUserSessionsById(this.id, signal);
            if (error) throw new Error('une erreur et survene', error);
            const { sessions } = session;
            return {
                xAxisKey: 'day',
                lines: [{ dataKey: 'time', fill: COLORS.CHART.SESION_TIME.FILL.TIME }],
                data: sessions.map((data) => ({ day: getDayFromNum(data.day), time: data.sessionLength })),
            };
        };
    }

    get performanceData() {
        return async ({ signal }) => {
            const { performance, error } = await UserService.getUserPerformanceById(this.id, signal);
            if (error) throw new Error('une erreur et survene', error);
            const { data, kind } = performance;
            return {
                PolarAngleAxisKey: 'kind',
                radars: [{ dataKey: 'value', fill: COLORS.CHART.STATS.FILL.ALL }],
                data: data.map((stat) => ({ value: stat.value, kind: getKindName(stat.kind, kind) })),
            };
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
            infos.push(infoFactory(info, this.userData[info]));
        }
        return infos;
    }
}

export default User;
