/**
 * @description Constant object containing color codes used in the application
 */
const COLORS = {
    CHART: {
        DAILY: {
            over: '#C4C4C480',
            FILL: {
                WEIGHT: '#282D30',
                BURN: '#E60000 ',
            },
        },
        SESION_TIME: {
            FILL: {
                TIME: '#ffffff75',
            },
            BACKGROUND: '#FF0000',
        },
        STATS: {
            FILL: {
                ALL: '#FF0101B2',
            },
            BACKGROUND: '#282D30',
            CHART_LINE: '#FFFFFF',
        },
        SCORE: {
            BACKGROUND: '#fbfbfb',
            FILL: '#E60000',
        },
    },
} as const;

export default COLORS;
