import React, {FC, InputHTMLAttributes} from 'react';
import styles from './range.module.scss'

const Range: FC<InputHTMLAttributes<HTMLInputElement>> = ({...props}) => {
    return (
        <input type="range" className={styles.range} {...props}>

        </input>
    );
};

export default Range;