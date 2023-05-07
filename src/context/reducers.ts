import { TAppActions } from "./actions";

export interface IOptionsState {
    numberOfChars: number,
    uppercase: boolean,
    lowercase: boolean,
    numbers: boolean,
    symbols: boolean,
}

export const initialOptionsState: IOptionsState = {
    numberOfChars: 10,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
};

export const optionsReducer = (state: IOptionsState, action: TAppActions) => {
    switch (action.type) {
        case 'CHANGE_NUMBER_OF_CHARS':
            return { ...state, numberOfChars: action.payload};
        case 'HAS_UPPERCASE_LETTERS':
            return { ...state, uppercase: !state.uppercase};
        case 'HAS_LOWERCASE_LETTERS':
            return { ...state, lowercase: !state.lowercase};
        case 'HAS_NUMBERS':
            return { ...state, numbers: !state.numbers};
        case 'HAS_SYMBOLS':
            return { ...state, symbols: !state.symbols};
        default:
            return state;
    }
}