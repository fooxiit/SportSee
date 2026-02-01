import React from 'react';
import COLORS from '../../constante/colors';
import Error from '../error/Error';
import UserAverageSessions from './UserAverageSessions';
import getErroeMessage from '../error/getErrorMessage';
import HttpError from '../../data/fetchData/HttpError';

interface Props {
    className?: string;
    error: HttpError;
}

export default function UserAverageSessionsError({ className = '', error }: Props) {
    const data = {
        xAxisKey: 'day',
        lines: [{ dataKey: 'time', fill: COLORS.CHART.SESION_TIME.FILL.TIME }],
        data: [] as ChartTypes.SessionsChart.Data[],
    };
    return (
        <div className={`user-average-sessions user-average-session error-warpper flex flex--column ${className}`}>
            <Error errorMessage={error.message} />
            <UserAverageSessions data={data} className={className} />
        </div>
    );
}
