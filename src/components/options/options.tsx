import React, {useContext} from 'react';
import styles from './options.module.scss'
import Range from "../UI/range/range";
import AppContext from "../../context";
import Checkbox from "../UI/checkbox/checkbox";
import {
    changeNumberOfChars,
    toggleLowercaseLetters,
    toggleNumbers, toggleSymbols,
    toggleUppercaseLetters
} from "../../context/actions";
import Button from "../UI/button/button";
import {IOptionsState} from "../../context/reducers";
import {charCodeRanges, defaultResult, ICharCodeRanges} from "../../utils/constants";
import {getRandomNumber} from "../../utils/utils";
import StrengthMeter from "../strengthMeter/strengthMeter";

const Options = () => {
    const {options, optionsDispatch, setResult, setCopied} = useContext(AppContext)

    const isButtonDisabled = !Object.values(options).some(option => option === true);

    const generatePassword = (evt: React.MouseEvent<HTMLElement>) => {
        let ranges = [];
        for (let key of Object.keys(options)) {
            if (options[key as keyof IOptionsState] === true) {
                ranges.push(charCodeRanges[key as keyof ICharCodeRanges])
            }
        }

        if (!ranges.length) {
            setResult(defaultResult);
            setCopied(false);
            return
        }

        const charCodes = [];
        const {length} = ranges;
        for (let i = 0; i < options.numberOfChars; i++) {
            const range = ranges[getRandomNumber(0, length - 1)];
            charCodes.push(getRandomNumber(range.from, range.to));
        }

        setResult(String.fromCharCode(...charCodes));
        setCopied(false);
    }

    return (
        <form className={styles.options}>
            <fieldset className={styles.fieldset}>
                <div className={styles.charsNumber}>
                    <label htmlFor='number-of-chars' className={styles.charsNumber__label}>Character Length</label>
                    <span className={styles.charsNumber__number}>{options.numberOfChars}</span>
                </div>
                <Range id='number-of-chars' min={1} max={20} value={options.numberOfChars}
                       onChange={(evt) => optionsDispatch(changeNumberOfChars(+evt.target.value))}/>
            </fieldset>
            <fieldset className={`${styles.fieldset} ${styles.checkboxesWrapper}`}>
                <Checkbox title='Include Uppercase Letters' checked={options.uppercase}
                          onChange={() => optionsDispatch(toggleUppercaseLetters())}/>
                <Checkbox title='Include Lowercase Letters' checked={options.lowercase}
                          onChange={() => optionsDispatch(toggleLowercaseLetters())}/>
                <Checkbox title='Include Numbers' checked={options.numbers}
                          onChange={() => optionsDispatch(toggleNumbers())}/>
                <Checkbox title='Include Symbols' checked={options.symbols}
                          onChange={() => optionsDispatch(toggleSymbols())}/>
            </fieldset>
            <StrengthMeter/>
            <Button type='button' title='GENERATE' disabled={isButtonDisabled} onClick={generatePassword}/>
        </form>
    );
};

export default Options;
