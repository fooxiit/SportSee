import React from 'react';
import getErroeMessage from '../error/getErrorMessage';
import COLORS from '../../constante/colors';
import Error from '../error/Error';
import UserStats from './UserStats';
import HttpError from '../../data/fetchData/HttpError';
interface Props {
    className?: string;
    error: HttpError;
}
export default function UserStatsError({ className = '', error }: Props) {
    const data = {
        PolarAngleAxisKey: 'kind',
        radars: [{ dataKey: 'value', fill: COLORS.CHART.STATS.FILL.ALL }],
        data: [],
    };
    return (
        <div className={`error-warpper user-stats ${className}`}>
            <Error errorMessage={error.message} />
            <UserStats data={data} className={className} />
        </div>
    );
}
