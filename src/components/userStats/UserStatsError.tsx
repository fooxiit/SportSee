import React from 'react';
import getErroeMessage from '../error/getErrorMessage';
import COLORS from '../../constante/colors';
import Error from '../error/Error';
import UserStats from './UserStats';
interface Props {
    className?: string;
    error: any;
}
export default function UserStatsError({ className = '', error }: Props) {
    const data = {
        PolarAngleAxisKey: 'kind',
        radars: [{ dataKey: 'value', fill: COLORS.CHART.STATS.FILL.ALL }],
        data: [],
    };
    const message = getErroeMessage(error.cause.cause.statusCode);
    return (
        <div className={`error-warpper user-stats ${className}`}>
            <Error errorMessage={message} />
            <UserStats data={data} className={className} />
        </div>
    );
}
