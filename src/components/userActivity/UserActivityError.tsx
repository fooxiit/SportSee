import React from 'react';
import getErroeMessage from '../error/getErrorMessage';
import UserActivity from './UserActivity';
import COLORS from '../../constante/colors';
import STRING from '../../constante/String';
import { getDayFromDate, DayType } from '../../function/getDayFrom';
import Error from '../error/Error';
import HttpError from '../../data/fetchData/HttpError';

interface Props {
    className?: string;
    error: HttpError;
}

export default function UserActivityError({ className = '', error }: Props) {
    const data = {
        xAxisKey: 'day',
        bars: [
            {
                barRadus: [3, 3, 0, 0],
                name: STRING.FR.CHARTS.DAILY.LEDGEND.WEIGHT,
                dataKey: 'kg',
                fill: COLORS.CHART.DAILY.FILL.WEIGHT,
                yAxis: { tickCount: 3, position: 'right', id: 'kg', max: (dataMax: number) => dataMax + 1, min: (dataMin: number) => dataMin - 2, tick: true },
            },
            {
                barRadus: [3, 3, 0, 0],
                name: STRING.FR.CHARTS.DAILY.LEDGEND.BURN,
                dataKey: 'cal',
                fill: COLORS.CHART.DAILY.FILL.BURN,
                yAxis: { tickCount: 7, position: 'left', id: 'cal', min: 0, max: (dataMax: number) => dataMax + 100, tick: false },
            },
        ],
        data: [],
    } as ChartTypes.ActivityChart.Type;
    return (
        <div className={`user-activity error-warpper flex flex--column ${className}`}>
            <Error errorMessage={error.message} />
            <UserActivity data={data} className={className} />
        </div>
    );
}
