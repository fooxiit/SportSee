import React, { useMemo } from 'react';
import useUserContext from '../../hook/useUserContext';
import useFetchData from '../../hook/useFetchData';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import COLORS from '../../constante/colors';
interface UserStatsProps {
    className?: string;
}
export default function UserStats({ className = '' }: UserStatsProps) {
    const { user } = useUserContext();
    const getStat = useMemo(() => user.performanceData, [user]);
    const parm = useMemo(() => ({}), []);
    const { isLoading, onError, data } = useFetchData(getStat, parm);
    if (onError.onError) return <div>error</div>;
    if (isLoading) return <div>loading</div>;
    return (
        <div className={`user-stats ${className}`}>
            <ResponsiveContainer style={{ width: '100%', height: '100%' }}>
                <RadarChart responsive outerRadius="80%" data={data.data} margin={{ right: 20, left: 20 }}>
                    <PolarGrid />
                    <PolarAngleAxis tick={customLabel} dataKey={data.PolarAngleAxisKey} />
                    <PolarRadiusAxis axisLine={false} tickLine={false} tick={false} domain={[0, (dataMax) => dataMax + 20]} />
                    {data.radars.map((radar) => (
                        <Radar key={`radarChart-activity-${radar.dataKey}`} dataKey={radar.dataKey} fill={radar.fill} />
                    ))}
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

function customLabel({ payload, x, y, cx, cy, ...rest }) {
    const { value } = payload;
    return (
        <text {...rest} y={y + (y - cy) / 10} x={x + (x - cx) / 100}>
            <tspan fill={COLORS.CHART.STATS.CHART_LINE} className="label">
                {value}
            </tspan>
        </text>
    );
}
