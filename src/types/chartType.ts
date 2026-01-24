namespace ChartTypes {
    interface ChartBase<T> {
        xAxisKey?: string;
        data: T[];
    }
    interface YAxis {
        id: string | number;
        yAxisId?: string | number;
        position?: 'left' | 'right';
        hide?: boolean;
        max?: number | string | 'dataMin' | ((dataMax: number) => number);
        min?: number | string | 'dataMin' | ((dataMin: number) => number);
        tickCount?: number;
        tick?: boolean;
    }
    export namespace BarChart {
        interface Kind {
            dataKey: string;
            fill: string;
            name?: string;
            barRadus?: number[];
            yAxis?: YAxis;
        }
        export interface Chart<T> extends ChartBase<T> {
            bars: Kind[];
        }
    }

    export namespace LineChart {
        interface Kind {
            dataKey: string;
            fill: string;
            stroke?: string;
            dot?: boolean;
            strokeWidth?: number;
            yAxis?: YAxis;
        }
        export interface Chart<T> extends ChartBase<T> {
            lines: Kind[];
        }
    }

    export namespace RadialChart {
        interface Kind {
            fill: { data: string; background: string };
            dataKey: string;
        }
        export interface Chart<T> extends ChartBase<T> {
            score: number;
            radialBars: Kind[];
        }
    }

    export namespace RadarChart {
        interface Kind {
            dataKey: string;
            fill: string;
        }
        export interface Chart<T> extends ChartBase<T> {
            PolarAngleAxisKey: string;
            radars: Kind[];
        }
    }

    export namespace SessionsChart {
        export interface Data {
            day: 'L' | 'M' | 'J' | 'V' | 'S' | 'D';
            time: number;
        }
    }

    export namespace ActivityChart {
        export interface Data {
            day: string;
            kg: number;
            cal: number;
        }
    }

    export namespace PerformanceChart {
        export interface Data {
            value: number;
            kind: string;
        }
    }

    export namespace ScoreChart {
        export interface data {
            score: number;
        }
    }
}
