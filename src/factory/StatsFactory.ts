import STRING from '../constante/String';
import { InfoType } from '../types/infoType';
/**
 * @description Info Factory function to create Info objects based on type and value.
 * @param type @see InfoType.Kind
 * @param value - The numeric value associated with the info.
 * @throws Error if the stat type is not found.
 * @returns InfoType.Info @see InfoType.Info
 */
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
