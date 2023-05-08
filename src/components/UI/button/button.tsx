import React, {FC, useContext} from 'react';
import styles from './button.module.scss'
import {ReactComponent as Arrow} from '../../../assets/images/icon-arrow-right.svg'
import classnames from "classnames";

interface IButton extends React.ButtonHTMLAttributes<any> {
    title: string,
}

const Button: FC<IButton> = ({title, disabled, ...rest}) => {
    const buttonClassNames = classnames({
        [styles.button]: true,
        [styles.button_disabled]: disabled,
    })

    return (
        <button className={buttonClassNames} {...rest}>
            <span className={styles.title}>{title}<Arrow/></span>
        </button>
    );
};

export default Button;
