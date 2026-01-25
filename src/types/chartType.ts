type AxisDomainItem = string | number | ((d: number) => string | number) | 'auto' | 'dataMin' | 'dataMax';
/**
 * @namespace ChartTypes
 * @description Types for various chart configurations used in the application.
 */
namespace ChartTypes {
    /**
     * @description Base interface for chart configurations.
     * @template T The type of data used in the chart.
     * @property xAxisKey The key for the x-axis data.
     * @property data The array of data points for the chart.
     */
    export interface ChartBase<T> {
        xAxisKey?: string;
        data: T[];
    }
    /**
     * @description YAxis configuration interface.
     * @property id  The unique identifier for the YAxis.
     * @property yAxisId  Optional identifier to link with specific data series.
     * @property position  Optinal Position of the YAxis ('left' or 'right').
     * @property hide  Optinal Whether to hide the YAxis.
     * @property max Optinal Maximum value or function to determine it.
     * @property min  Optinal Minimum value or function to determine it.
     * @property tickCount  Optinal Number of ticks to display on the YAxis.
     * @property tick  Optinal Whether to show ticks on the YAxis.
     */
    export interface YAxis {
        id: string | number;
        yAxisId?: string | number;
        position?: 'left' | 'right';
        hide?: boolean;
        max?: AxisDomainItem;
        min?: AxisDomainItem;
        tickCount?: number;
        tick?: boolean;
    }
    /**
     * @namespace BarChart
     * @description Types related to Bar Chart configurations.
     */
    export namespace BarChart {
        /**
         * @description Bar configuration interface.
         * @property dataKey  The key for the bar data.
         * @property fill  The fill color for the bar.
         * @property name  Optional name for the bar.
         * @property barRadus  Optional border radius for the bar (number or array of numbers).
         * @property yAxis  Optional YAxis configuration for the bar.
         */
        interface Kind {
            dataKey: string;
            fill: string;
            name?: string;
            barRadus?: number | [number, number, number, number];
            yAxis?: YAxis;
        }
        /**
         * @description Bar Chart configuration interface.
         * @template T The type of data used in the bar chart.
         * @property bars  The array of bar configurations.
         */
        export interface Chart<T> extends ChartBase<T> {
            bars: Kind[];
        }
    }
    /**
     * @namespace LineChart
     * @description Types related to Line Chart configurations.
     */
    export namespace LineChart {
        /**
         * @description Line configuration interface.
         * @property dataKey  The key for the line data.
         * @property fill  The fill color for the line.
         * @property stroke  Optional stroke color for the line.
         * @property dot  Optional whether to show dots on the line.
         * @property strokeWidth  Optional stroke width for the line.
         * @property yAxis  Optional YAxis configuration for the line.
         */
        interface Kind {
            dataKey: string;
            fill: string;
            stroke?: string;
            dot?: boolean;
            strokeWidth?: number;
            yAxis?: YAxis;
        }
        /**
         * @description Line Chart configuration interface.
         * @template T The type of data used in the line chart.
         * @property lines  The array of line configurations.
         */
        export interface Chart<T> extends ChartBase<T> {
            lines: Kind[];
        }
    }
    /**
     * @namespace RadialChart
     * @description Types related to Radial Chart configurations.
     */
    export namespace RadialChart {
        /**
         * @description Kind configuration interface.
         * @property fill  The fill color for the radial bar.
         * @property background  The background color for the radial bar.
         * @property dataKey  The key for the radial bar data.
         */
        interface Kind {
            fill: { data: string; background: string };
            dataKey: string;
        }
        /**
         * @description Radial Chart configuration interface.
         * @template T The type of data used in the radial chart.
         * @property score  The score value for the radial chart.
         * @property radialBars  The array of radial bar configurations.
         */
        export interface Chart<T> extends ChartBase<T> {
            score: number;
            radialBars: Kind[];
        }
    }
    /**
     * @namespace RadarChart
     * @description Types related to Radar Chart configurations.
     */
    export namespace RadarChart {
        /**
         * @description Kind configuration interface.
         * @property dataKey  The key for the radar data.
         * @property fill  The fill color for the radar.
         */
        interface Kind {
            dataKey: string;
            fill: string;
        }
        /**
         * @description Radar Chart configuration interface.
         * @template T The type of data used in the radar chart.
         * @property PolarAngleAxisKey  The key for the polar angle axis data.
         * @property radars  The array of radar configurations.
         */
        export interface Chart<T> extends ChartBase<T> {
            PolarAngleAxisKey: string;
            radars: Kind[];
        }
    }
    /**
     * @namespace SessionsChart
     * @description types related to User Sessions Chart Data
     */
    export namespace SessionsChart {
        /**
         * @description data interface representing a single session's data point
         * @property day First letter of the day in French ('L', 'M', 'J', 'V', 'S', 'D')
         * @property time Session length in minutes
         */
        export interface Data {
            day: 'L' | 'M' | 'J' | 'V' | 'S' | 'D';
            time: number;
        }
        /**
         * @description data used in Chart for sessions
         */
        export type Type = LineChart.Chart<Data>;
    }
    /**
     * @namespace ActivityChart
     * @description types related to User Activity Chart Data
     */
    export namespace ActivityChart {
        /**
         * @description data interface representing a single activity data point
         */
        export interface Data {
            day: string;
            kg: number;
            cal: number;
        }
        /**
         * @description data used in Chart for activity
         */
        export type Type = BarChart.Chart<Data>;
    }
    /**
     * @namespace PerformanceChart
     * @description types related to User Performance Chart Data
     */
    export namespace PerformanceChart {
        /**
         * @description data interface representing a single performance data point
         */
        export interface Data {
            value: number;
            kind: string;
        }
        /**
         * @description data used in Chart for performance
         */
        export type Type = RadarChart.Chart<Data>;
    }
    /**
     * @namespace ScoreChart
     * @description types related to User Score Chart Data
     */
    export namespace ScoreChart {
        /**
         * @description data interface representing the score data point
         */
        export interface data {
            score: number;
        }
        /**
         *  @description data used in Chart for score
         */
        export type Type = RadialChart.Chart<data>;
    }
}
