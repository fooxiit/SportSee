import { getDayFromDate, dayType, getDayFromNum } from '../../assets/function/getDayFrom';
import getKindName from '../../assets/function/kindMaping';
import COLORS from '../../constante/colors';
import STRING from '../../constante/String';
import UserService from '../UserService';

class User {
    static async getUserById(id) {
        const { user, error } = UserService.getUserById(id);
        if (error) throw new Error('une erreur et survene', error);
        return new User(user);
    }

    constructor({ id, userInfos, score, todayScore, keyData }) {
        this.id = id;
        this.userInfos = userInfos;
        this.score = score || todayScore;
        this.userData = keyData;
    }

    get activityData() {
        return async () => {
            const { userActivity, error } = await UserService.getUserActivityById(this.id);
            if (error) throw new Error('une erreur et survene', error);
            const { sessions } = userActivity;
            return {
                xAxisKey: 'day',
                bars: [
                    { name: STRING.FR.CHARTS.DAILY.LEDGEND.BURN, dataKey: 'cal', fill: COLORS.CHART.DAILY.FILL.BURN },
                    { name: STRING.FR.CHARTS.DAILY.LEDGEND.WEIGHT, dataKey: 'kg', fill: COLORS.CHART.DAILY.FILL.WEIGHT },
                ],
                data: sessions.map((data) => ({ day: getDayFromDate(data.day, dayType.number), kg: data.kilogram, cal: data.calories })),
            };
        };
    }

    get sesionTimeData() {
        return async () => {
            const { session, error } = await UserService.getUserSessionsById(this.id);
            if (error) throw new Error('une erreur et survene', error);
            const { sessions } = session;
            return {
                xAxisKey: 'day',
                lines: [{ dataKey: 'length', fill: COLORS.CHART.SESION_TIME.FILL.TIME }],
                data: sessions.map((data) => ({ day: getDayFromNum(data.day), length: data.sessionLength })),
            };
        };
    }

    get performanceData() {
        return async () => {
            const { performance, error } = await UserService.getUserPerformanceById(this.id);
            if (error) throw new Error('une erreur et survene', error);
            const { data, kind } = performance;
            return {
                PolarAngleAxisKey: 'kind',
                radar: [{ dataKey: 'value', fill: COLORS.CHART.STATS.FILL.ALL }],
                data: data.map((stat) => ({ value: stat.value, kind: getKindName(stat.kind, kind) })),
            };
        };
    }

    get scoreData() {
        return {
            radialBars: [{ fill: COLORS.CHART.STATS.FILL, dataKey: 'score' }],
            data: this.score,
        };
    }
}
