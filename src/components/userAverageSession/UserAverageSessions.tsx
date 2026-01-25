import React, { ComponentProps, use, useCallback, useMemo } from 'react';
import useUserContext from '../../hook/useUserContext';
import useFetchData from '../../hook/useFetchData';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, TooltipContentProps, XAxis, YAxis } from 'recharts';
import COLORS from '../../constante/colors';
import STRING from '../../constante/String';
import './userAverageSessions.css';
interface UserAverageSessionsProps {
    className?: string;
}
export default function UserAverageSessions({ className = '' }: UserAverageSessionsProps) {
    const { user } = useUserContext();
    const getUserData = useCallback(user.getSesionTimeData.bind(user), [user]);
    const parm = useMemo(() => ({}), []);
    const { isLoading, onError, data } = useFetchData(getUserData, parm);
    if (isLoading) return <div>loading</div>;
    if (onError.onError || data === null) return <div>error</div>;

    return (
        <div className={`user-average-sessions flex flex--column ${className}`}>
            <h2>{STRING.FR.CHARTS.SESION_TIME.TITLE}</h2>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    margin={{
                        bottom: 0,
                        right: 15,
                        left: 15,
                    }}
                    style={{ background: COLORS.CHART.SESION_TIME.BACKGROUND }}
                    responsive
                    data={data.data}
                >
                    <Tooltip content={CustomTooltip} cursor={false} />
                    <YAxis hide domain={['dataMin-10', 'dataMax+10']} />
                    <XAxis
                        interval={'preserveStartEnd'}
                        tick={{ fill: COLORS.CHART.SESION_TIME.FILL.TIME, fontSize: '16px' }}
                        axisLine={false}
                        tickLine={false}
                        className="x-label"
                        dataKey={data.xAxisKey}
                    />
                    {data.lines.map((line) => (
                        <Line
                            activeDot={{ stroke: COLORS.CHART.SESION_TIME.FILL.TIME, strokeWidth: 4, r: 2 }}
                            type="natural"
                            key={`lineChart-activity-${line.dataKey}`}
                            dataKey={line.dataKey}
                            stroke="url(#stroke-gradient)"
                            strokeWidth={2}
                            dot={false}
                        />
                    ))}
                    <defs>
                        <linearGradient id="stroke-gradient">
                            <stop offset="0%" stopColor="#FFFFFF67" />
                            <stop offset="100%" stopColor="#FFFFFF" />
                        </linearGradient>
                    </defs>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

function CustomTooltip({ payload }: TooltipContentProps<string | number, number>) {
    const unit = {
        time: 'min',
    };
    return (
        <div className="tolltip">
            <div className="fade-screen"></div>
            <ul className="flex flex--column flex--centre-content">
                {payload.map(({ value, dataKey }: { value: number; dataKey: keyof typeof unit }) => (
                    <li>
                        {value} {unit[dataKey]}
                    </li>
                ))}
            </ul>
        </div>
    );
}
