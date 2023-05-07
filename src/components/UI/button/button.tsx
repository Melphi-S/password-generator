import React, {FC} from 'react';
import styles from './button.module.scss'
import {ReactComponent as Arrow} from '../../../assets/images/icon-arrow-right.svg'

interface IButton extends React.ButtonHTMLAttributes<any> {
    title: string,
}

const Button: FC<IButton> = ({title, ...rest}) => {
    return (
        <button className={styles.button} {...rest}>
            <span className={styles.title}>{title}<Arrow/></span>
        </button>
    );
};

export default Button;
