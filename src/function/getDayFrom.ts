/**
 * @description return day from date string format
 * @param  date
 * @param  type @see DayType
 * @returns
 */
export function getDayFromDate(date: string, type: DayType) {
    switch (type) {
        case DayType.firstLetter:
            return ['D', 'L', 'M', 'M', 'J', 'V', 'S'][new Date(date).getDay()];

        case DayType.number:
            return parseInt(date.split('-')[2], 10).toString(10);
    }
}
/**
 * @description return day first letter from day number
 * @param num
 * @returns
 */
export function getDayFromNum(num: number): 'L' | 'M' | 'J' | 'V' | 'S' | 'D' {
    switch (num) {
        case dayNum[1]:
            return 'L';
        case dayNum[2]:
            return 'M';
        case dayNum[3]:
            return 'M';
        case dayNum[4]:
            return 'J';
        case dayNum[5]:
            return 'V';
        case dayNum[6]:
            return 'S';
        case dayNum[7]:
            return 'D';
        default:
            throw new Error('Invalid day number');
    }
}

const dayNum = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
};
/**
 * @enum DayType
 * @description Enum to specify the type of day representation.
 */
export enum DayType {
    number,
    firstLetter,
}
