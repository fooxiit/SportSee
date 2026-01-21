import STRING from '../constante/String';

function infoFactory(type, value) {
    switch (type) {
        case InfoType.calorieCount:
            return { imgSrc: 'energy.svg', name: STRING.FR.INFO.CAL.NAME, unit: STRING.FR.INFO.CAL.UNIT, value, type };
        case InfoType.proteinCount:
            return { imgSrc: 'chicken.svg', name: STRING.FR.INFO.PROT.NAME, unit: STRING.FR.INFO.PROT.UNIT, value, type };
        case InfoType.carbohydrateCount:
            return { imgSrc: 'apple.svg', name: STRING.FR.INFO.GLUC.NAME, unit: STRING.FR.INFO.GLUC.UNIT, value, type };
        case InfoType.lipidCount:
            return { imgSrc: 'cheeseburger.svg', name: STRING.FR.INFO.LIP.NAME, unit: STRING.FR.INFO.LIP.UNIT, value, type };

        default:
            throw new Error('Stat type not found');
    }
}

const InfoType = {
    calorieCount: 'calorieCount',
    proteinCount: 'proteinCount',
    carbohydrateCount: 'carbohydrateCount',
    lipidCount: 'lipidCount',
};

export default infoFactory;
