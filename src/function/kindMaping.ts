import STRING from '../constante/String';
/**
 * @description return kind name in french from kind key and kinds object
 * @param kindKey
 * @param kinds
 * @returns
 */
function getKindName(kindKey: keyof typeof kinds, kinds: { [key: number]: string }) {
    const kindName = kinds[kindKey];
    return nameToFr(kindName);
}

export default getKindName;
/**
 * @description convert kind name from en to fr
 * @param kindName
 * @returns
 */
function nameToFr(kindName: string) {
    switch (kindName) {
        case kindNameEn.cardio:
            return STRING.FR.CHARTS.STATS.LEDGEND.CARDIO;
        case kindNameEn.energy:
            return STRING.FR.CHARTS.STATS.LEDGEND.ENERGY;
        case kindNameEn.endurance:
            return STRING.FR.CHARTS.STATS.LEDGEND.ENDURANCE;
        case kindNameEn.strength:
            return STRING.FR.CHARTS.STATS.LEDGEND.STRENGTH;
        case kindNameEn.speed:
            return STRING.FR.CHARTS.STATS.LEDGEND.SPEED;
        case kindNameEn.intensity:
            return STRING.FR.CHARTS.STATS.LEDGEND.INTENSITY;
        default:
            throw new Error('Unknown kind name');
    }
}

/**
 * @constant kindNameEn
 * @description Mapping of kind keys to their English names.
 */
const kindNameEn = {
    cardio: 'cardio',
    energy: 'energy',
    endurance: 'endurance',
    strength: 'strength',
    speed: 'speed',
    intensity: 'intensity',
} as const;
