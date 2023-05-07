import React, {useContext, useState} from 'react';
import AppContext from "../../context";
import styles from './result.module.scss'
import {ReactComponent as Copy} from '../../assets/images/icon-copy.svg'
import classnames from "classnames";
import classNames from "classnames";
import {defaultResult} from "../../utils/constants";

const Result = () => {
    const { result, copied, setCopied } = useContext(AppContext);

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(result);
        setCopied(true);
    }

    const passwordClassNames = classNames({
        [styles.password]: true,
        [styles.password_default]: result === defaultResult,
    })

    const buttonClassNames = classnames({
        [styles.button]: true,
        [styles.copiedSpan]: copied,
    });

    return (
        <div className={styles.result}>
            <span className={passwordClassNames}>{result}</span>
            {result !== defaultResult &&
                <button className={buttonClassNames} onClick={copyToClipboard}><Copy
                    className={styles.copyImg}/></button>}
        </div>
    );
};

export default Result;
