export namespace InfoType {
    /**
     * @description Enum representing the kinds of user nutritional information
     */
    export enum Kind {
        calorieCount = 'calorieCount',
        proteinCount = 'proteinCount',
        carbohydrateCount = 'carbohydrateCount',
        lipidCount = 'lipidCount',
    }
    /**
     * @description Interface representing a user's nutritional information
     */
    export interface Info {
        imgSrc: string;
        name: string;
        unit: string;
        value: number;
        type: Kind;
    }
}
