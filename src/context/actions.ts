export type TNumberOfCharsAction = {
    readonly type: 'CHANGE_NUMBER_OF_CHARS';
    readonly payload: number;
};

export type TUppercaseAction = {
    readonly type: 'HAS_UPPERCASE_LETTERS';
};

export type TLowercaseAction = {
    readonly type: 'HAS_LOWERCASE_LETTERS';
};

export type TNumbersAction = {
    readonly type: 'HAS_NUMBERS';
};

export type TSymbolsAction = {
    readonly type: 'HAS_SYMBOLS';
};


export type TAppActions = TNumberOfCharsAction | TUppercaseAction | TLowercaseAction | TNumbersAction | TSymbolsAction;

export const changeNumberOfChars = (number: number): TNumberOfCharsAction => ({
    type: 'CHANGE_NUMBER_OF_CHARS',
    payload: number
})

export const toggleUppercaseLetters = (): TUppercaseAction => ({
    type: 'HAS_UPPERCASE_LETTERS',
})

export const toggleLowercaseLetters = (): TLowercaseAction => ({
    type: 'HAS_LOWERCASE_LETTERS',
})

export const toggleNumbers = (): TNumbersAction => ({
    type: 'HAS_NUMBERS',
})

export const toggleSymbols = (): TSymbolsAction => ({
    type: 'HAS_SYMBOLS',
})


