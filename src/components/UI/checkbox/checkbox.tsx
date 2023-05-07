import React, {FC, InputHTMLAttributes} from 'react';
import styles from './checkbox.module.scss'

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement>{
    title: string,
}

const Checkbox: FC<ICheckboxProps> = ({title, ...rest}) => {
    const htmlTitle = title.split('').join('-');

    return (
        <label htmlFor={htmlTitle} className={styles.label}>
            <input
                type="checkbox"
                name={htmlTitle}
                id={htmlTitle}
                value={htmlTitle}
                className={styles.input}
                {...rest}
            />
            <span className={styles.pseudoInput}></span>
            <span className={styles.title}>{title}</span>
        </label>
    );
};

export default Checkbox;