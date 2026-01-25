import STRING from '../constante/String';
import { InfoType } from '../types/infoType';

function infoFactory(type: string, value: number): InfoType.Info {
    switch (type) {
        case InfoType.Kind.calorieCount:
            return { imgSrc: 'energy.svg', name: STRING.FR.INFO.CAL.NAME, unit: STRING.FR.INFO.CAL.UNIT, value, type };
        case InfoType.Kind.proteinCount:
            return { imgSrc: 'chicken.svg', name: STRING.FR.INFO.PROT.NAME, unit: STRING.FR.INFO.PROT.UNIT, value, type };
        case InfoType.Kind.carbohydrateCount:
            return { imgSrc: 'apple.svg', name: STRING.FR.INFO.GLUC.NAME, unit: STRING.FR.INFO.GLUC.UNIT, value, type };
        case InfoType.Kind.lipidCount:
            return { imgSrc: 'cheeseburger.svg', name: STRING.FR.INFO.LIP.NAME, unit: STRING.FR.INFO.LIP.UNIT, value, type };

        default:
            throw new Error('Stat type not found');
    }
}
export default infoFactory;
