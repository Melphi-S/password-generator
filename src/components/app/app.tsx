import React, {useReducer, useState} from 'react';
import styles from "./app.module.scss";
import AppContext from "../../context";
import {defaultResult} from "../../utils/constants";
import Result from "../result/result";
import Options from "../options/options";
import { initialOptionsState, optionsReducer } from "../../context/reducers";


function App() {
    const [result, setResult] = useState(defaultResult);
    const [copied, setCopied] = useState(false);

    const [options, optionsDispatch] = useReducer(optionsReducer, initialOptionsState);

    return (
        <div className={styles.app}>
            <h1 className={styles.heading}>Password Generator</h1>
            <AppContext.Provider value={{result, setResult, copied, setCopied, options, optionsDispatch}}>
                <Result/>
                <Options/>
            </AppContext.Provider>
        </div>
    );
}

export default App;
