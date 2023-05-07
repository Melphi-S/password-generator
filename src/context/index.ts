import React, { createContext, Dispatch, SetStateAction } from "react";
import {defaultResult} from "../utils/constants";
import {initialOptionsState, IOptionsState} from "./reducers";
import {TAppActions} from "./actions";

interface IAppContext {
    result: string;
    copied: boolean;
    options: IOptionsState,
    setResult: Dispatch<SetStateAction<string>>,
    setCopied: Dispatch<SetStateAction<boolean>>,
    optionsDispatch:  React.Dispatch<TAppActions>,
}

export const defaultState = {
    result: defaultResult,
    copied: false,
    options: initialOptionsState,
    setResult: () => {},
    setCopied: () => {},
    optionsDispatch: () => {},
};

const AppContext = createContext<IAppContext>(defaultState);

export default AppContext;
