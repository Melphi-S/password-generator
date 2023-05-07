export const defaultResult = "P4$5W0rD!";

export interface ICharCodeRanges {
    uppercase: {from: number, to: number},
    lowercase: {from: number, to: number},
    numbers: {from: number, to: number},
    symbols: {from: number, to: number}
}

export const charCodeRanges = {
    uppercase: {from: 65, to: 90},
    lowercase: {from: 97, to: 122},
    numbers: {from: 48, to: 57},
    symbols: {from: 33, to: 47},
}
