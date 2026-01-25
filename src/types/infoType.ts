export namespace InfoType {
    export enum Kind {
        calorieCount = 'calorieCount',
        proteinCount = 'proteinCount',
        carbohydrateCount = 'carbohydrateCount',
        lipidCount = 'lipidCount',
    }

    export interface Info {
        imgSrc: string;
        name: string;
        unit: string;
        value: number;
        type: Kind;
    }
}
