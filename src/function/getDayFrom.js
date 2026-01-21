/**
 * @description return day from date string format
 * @param {String} date
 * @returns {String}
 */
export function getDayFromDate(date, type) {
    switch (type) {
        case dayType.firstLetter:
            break;

        case dayType.number:
            return parseInt(date.split('-')[2], 10).toString(10);
    }
}

export function getDayFromNum(num) {
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

export const dayType = { number: 'num', firstLetter: 'fl' };
