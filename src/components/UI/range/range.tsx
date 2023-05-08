import React, {FC, InputHTMLAttributes, useEffect, useRef} from 'react';
import styles from './range.module.scss'

const Range: FC<InputHTMLAttributes<HTMLInputElement>> = ({...props}) => {
    const rangeRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const percentage = Math.round(props.value as number / 20 * 100);
        if (rangeRef.current) {
            rangeRef.current.style.background = `linear-gradient(to right, #A4FFAF ${percentage}%, #18171F ${percentage}%)`
        }
    }, [props.value])


    return (
        <input type="range" ref={rangeRef} className={styles.range} {...props}>

        </input>
    );
};

export default Range;
