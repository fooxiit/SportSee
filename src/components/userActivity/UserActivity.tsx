import { useMemo } from 'react';
import useUserContext from '../../hook/useUserContext';
import useFetchData from '../../hook/useFetchData';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import STRING from '../../constante/String';
import './UserActivity.css';
interface UserActivityProps {
    className?: string;
}
export default function UserActivity({ className = '' }: UserActivityProps) {
    const { user } = useUserContext();
    const getActivity = useMemo(() => user.activityData, [user]);
    const parm = useMemo(() => ({}), []);
    const { isLoading, onError, data } = useFetchData(getActivity, parm);
    if (onError.onError) return <div>error</div>;
    if (isLoading) return <div>loading</div>;

    return (
        <div className={`user-activity flex flex--column ${className}`}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart barSize={7} barGap={8} data={data.data}>
                    <Tooltip content={CustumTooltip} />
                    <Legend height="95px" content={CustumLengend} verticalAlign="top" align="right" />
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey={data.xAxisKey} />
                    {data.bars.map((bar) => (
                        <YAxis
                            key={`barChart-activity-yaxis-${bar.dataKey}`}
                            domain={[bar.yAxis.min, bar.yAxis.max]}
                            dataKey={bar.dataKey}
                            yAxisId={bar.yAxis.id}
                            width="auto"
                            orientation={bar.yAxis.position}
                            tickCount={bar.yAxis.tickCount}
                            tick={bar.yAxis.tick}
                        />
                    ))}
                    {data.bars.map((bar) => (
                        <Bar radius={bar.barRadus} yAxisId={bar.yAxis.id} key={`barChart-activity-${bar.dataKey}`} dataKey={bar.dataKey} name={bar.name} fill={bar.fill} />
                    ))}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

function CustumLengend({ payload }) {
    return (
        <div className="legend-warpper flex">
            <h2>{STRING.FR.CHARTS.DAILY.TITTLE}</h2>
            <ul className="flex legend">
                {[...payload].reverse().map((ledgend, index) => (
                    <li key={`user-activity-legend-${index}`} className="legend-value flex">
                        <i data-color={ledgend.color} className="legend-icon"></i>
                        {ledgend.value}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function CustumTooltip({ payload }) {
    const unit = {
        kg: 'kg',
        cal: 'Kcal',
    };
    return (
        <div className="tolltip ">
            <ul className="flex flex--column">
                {payload.map((data, index) => (
                    <li key={`userActivity-tooltip-data-${index}`}>
                        {data.value}
                        {unit[data.dataKey]}
                    </li>
                ))}
            </ul>
        </div>
    );
}
