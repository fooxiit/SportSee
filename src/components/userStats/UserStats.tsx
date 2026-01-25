import React, { ReactElement, useCallback, useMemo } from 'react';
import useUserContext from '../../hook/useUserContext';
import useFetchData from '../../hook/useFetchData';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import COLORS from '../../constante/colors';
import { Props } from 'recharts/types/component/Label';
import { TickItemTextProps } from 'recharts/types/polar/PolarAngleAxis';
interface UserStatsProps {
    className?: string;
}
export default function UserStats({ className = '' }: UserStatsProps) {
    const { user } = useUserContext();
    const getStat = useCallback(user.getPerformanceData.bind(user), [user]);
    const parm = useMemo(() => ({}), []);
    const { isLoading, onError, data } = useFetchData(getStat, parm);
    if (isLoading) return <div>loading</div>;
    if (onError.onError || !data) return <div>error</div>;
    return (
        <div className={`user-stats ${className}`}>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart responsive outerRadius="80%" data={data.data} margin={{ right: 20, left: 20, top: 0, bottom: 0 }}>
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

function customLabel({ payload, x, y, cx, cy, ...rest }: TickItemTextProps) {
    if (!x || !y || !cx || !cy) return <></>;
    const { value } = payload;
    return (
        <text {...rest} y={(y as number) + ((y as number) - (cy as number)) / 10} x={(x as number) + ((x as number) - (cx as number)) / 100}>
            <tspan fill={COLORS.CHART.STATS.CHART_LINE} className="label">
                {value}
            </tspan>
        </text>
    );
}
