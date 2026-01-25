import { Bar, BarChart, CartesianGrid, DefaultLegendContentProps, Legend, ResponsiveContainer, Tooltip, TooltipContentProps, XAxis, YAxis } from 'recharts';
import STRING from '../../constante/String';
import './UserActivity.css';
import { AxisDomain } from 'recharts/types/util/types';

/**
 * @description Chart types namespace
 * @property className Optional additional class names
 * @property data Activity chart data
 *
 */
interface UserActivityProps {
    className?: string;
    data: ChartTypes.ActivityChart.Type;
}

/**
 *
 * @description UserActivity component to display user activity chart
 * @param props
 * @returns
 */
export default function UserActivity({ data, className = '' }: UserActivityProps) {
    return (
        <div className={`user-activity flex flex--column ${className}`}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart barSize={7} barGap={8} data={data.data}>
                    <Tooltip content={CustumTooltip} />
                    <Legend height={95} content={CustumLengend} verticalAlign="top" align="right" />
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey={data.xAxisKey} />
                    {data.bars.map((bar) => {
                        if (!bar.yAxis) return;
                        return (
                            <YAxis
                                key={`barChart-activity-yaxis-${bar.dataKey}`}
                                domain={[bar.yAxis.min, bar.yAxis.max] as AxisDomain}
                                dataKey={bar.dataKey}
                                yAxisId={bar.yAxis.id}
                                width="auto"
                                orientation={bar.yAxis?.position}
                                tickCount={bar.yAxis.tickCount}
                                tick={bar.yAxis.tick}
                            />
                        );
                    })}

                    {data.bars.map((bar) => (
                        <Bar radius={bar.barRadus} yAxisId={bar.yAxis?.id} key={`barChart-activity-${bar.dataKey}`} dataKey={bar.dataKey} name={bar.name} fill={bar.fill} />
                    ))}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

function CustumLengend({ payload }: DefaultLegendContentProps) {
    if (!payload) return <div className="legend-warpper flex"></div>;
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

function CustumTooltip({ payload }: TooltipContentProps<any, any>) {
    interface dataType {
        value: number;
        dataKey: keyof typeof unit;
    }
    const unit = {
        kg: 'kg',
        cal: 'Kcal',
    };
    return (
        <div className="tolltip ">
            <ul className="flex flex--column">
                {payload.map((data: dataType, index) => (
                    <li key={`userActivity-tooltip-data-${index}`}>
                        {data.value}
                        {unit[data.dataKey]}
                    </li>
                ))}
            </ul>
        </div>
    );
}
