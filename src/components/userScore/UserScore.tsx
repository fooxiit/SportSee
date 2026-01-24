import useUserContext from '../../hook/useUserContext';
import { RadialBarChart, PolarAngleAxis, RadialBar, Text, Label, ResponsiveContainer } from 'recharts';
import STRING from '../../constante/String';
interface UserScoreProps {
    className?: string;
}
export default function UserScore({ className = '' }: UserScoreProps) {
    const { user } = useUserContext();
    return (
        <div className={`user-score flex flex--column flex--centre-item ${className}`}>
            <h2>{STRING.FR.CHARTS.SCORE.TITLE}</h2>
            <ResponsiveContainer width="70%" height="70%">
                <RadialBarChart className="chart" barGap={0} innerRadius="100%" startAngle={180} endAngle={-180} barSize={14} data={user.scoreData.data}>
                    <PolarAngleAxis tick={false} type="number" domain={[0, 100]} />

                    {user.scoreData.radialBars.map((radialBar, index) => (
                        <RadialBar
                            cornerRadius={100}
                            barSize={10}
                            background={{ fill: radialBar.fill.background }}
                            key={`userScore-radialBar-${index}`}
                            fill={radialBar.fill.data}
                            dataKey={radialBar.dataKey}
                        />
                    ))}
                    <Label content={CustomizedLabel} value={user.scoreData.score} />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
}
function CustomizedLabel({ value, viewBox }) {
    return (
        <>
            <text style={{ background: 'white' }} x={0} y="40%" textAnchor="middle" dominantBaseline="auto">
                <tspan className="score" x={viewBox.cx} dy="0em">
                    {value} %
                </tspan>
                <tspan className="ledgend" x={viewBox.cx} dy="1.5em">
                    {STRING.FR.CHARTS.SCORE.LEDGEND[0]}
                </tspan>
                <tspan className="ledgend" x={viewBox.cx} dy="1.5em">
                    {STRING.FR.CHARTS.SCORE.LEDGEND[1]}
                </tspan>
            </text>
        </>
    );
}
