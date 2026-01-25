import { RadialBarChart, PolarAngleAxis, RadialBar, Label, ResponsiveContainer } from 'recharts';
import STRING from '../../constante/String';
import { PolarViewBoxRequired } from 'recharts/types/util/types';
import { Props } from 'recharts/types/component/Label';

/**
 * @description UserScore component props interface
 * @property className Optional additional class names
 * @property data User score chart data
 */
interface UserScoreProps {
    className?: string;
    data: ChartTypes.ScoreChart.Type;
}
/**
 *
 * @description UserScore component to display user score chart
 * @param props
 * @returns
 */
export default function UserScore({ className = '', data }: UserScoreProps) {
    return (
        <div className={`user-score flex flex--column flex--centre-item ${className}`}>
            <h2>{STRING.FR.CHARTS.SCORE.TITLE}</h2>
            <ResponsiveContainer width="70%" height="70%">
                <RadialBarChart className="chart" barGap={0} innerRadius="100%" startAngle={180} endAngle={-180} barSize={14} data={data.data}>
                    <PolarAngleAxis tick={false} type="number" domain={[0, 100]} />

                    {data.radialBars.map((radialBar, index) => (
                        <RadialBar
                            cornerRadius={100}
                            barSize={10}
                            background={{ fill: radialBar.fill.background }}
                            key={`userScore-radialBar-${index}`}
                            fill={radialBar.fill.data}
                            dataKey={radialBar.dataKey}
                        />
                    ))}
                    <Label content={CustomizedLabel} value={data.score} />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
}
function CustomizedLabel({ viewBox, value }: Props) {
    if (!viewBox) return null;
    return (
        <>
            <text style={{ background: 'white' }} x={0} y="40%" textAnchor="middle" dominantBaseline="auto">
                <tspan className="score" x={(viewBox as PolarViewBoxRequired).cx} dy="0em">
                    {value} %
                </tspan>
                <tspan className="ledgend" x={(viewBox as PolarViewBoxRequired).cx} dy="1.5em">
                    {STRING.FR.CHARTS.SCORE.LEDGEND[0]}
                </tspan>
                <tspan className="ledgend" x={(viewBox as PolarViewBoxRequired).cx} dy="1.5em">
                    {STRING.FR.CHARTS.SCORE.LEDGEND[1]}
                </tspan>
            </text>
        </>
    );
}
