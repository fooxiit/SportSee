import STRING from '../constante/String';

function getKindName(kindKey, kinds) {
    const kindName = kinds[kindKey];
    return nameToFr(kindName);
}

export default getKindName;

function nameToFr(kindName) {
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

const kindNameEn = {
    cardio: 'cardio',
    energy: 'energy',
    endurance: 'endurance',
    strength: 'strength',
    speed: 'speed',
    intensity: 'intensity',
};
