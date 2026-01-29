import React from 'react';
import COLORS from '../../constante/colors';
import Error from '../error/Error';
import UserAverageSessions from './UserAverageSessions';
import getErroeMessage from '../error/getErrorMessage';

interface Props {
    className?: string;
    error: any;
}

export default function UserAverageSessionsError({ className = '', error }: Props) {
    const data = {
        xAxisKey: 'day',
        lines: [{ dataKey: 'time', fill: COLORS.CHART.SESION_TIME.FILL.TIME }],
        data: [] as ChartTypes.SessionsChart.Data[],
    };
    const message = getErroeMessage(error.cause.cause.statusCode);
    return (
        <div className={`user-average-sessions user-average-session error-warpper flex flex--column ${className}`}>
            <Error errorMessage={message} />
            <UserAverageSessions data={data} className={className} />
        </div>
    );
}
