import React, {useContext, useMemo} from 'react';
import AppContext from "../../context";
import styles from './strengthmeter.module.scss'

import classNames from "classnames";

enum TMeasurement {
    TOO_WEAK = 'TOO WEAK!',
    WEAK = 'WEAK',
    MEDIUM = 'MEDIUM',
    STRONG = 'STRONG',
}

const StrengthMeter = () => {
    const { options } = useContext(AppContext);
    const { numberOfChars, uppercase, lowercase, symbols, numbers } = options;

    const countStrength = () => Math.floor(numberOfChars / 3) + Number(uppercase) * 2 + Number(lowercase) + Number(symbols) * 2 + Number(numbers);

    const measurement = useMemo(() => {
        const strength = countStrength();
        if (strength <= 2 || (!uppercase && !lowercase && !symbols && !numbers) || numberOfChars < 4) {
            return {strength: TMeasurement.TOO_WEAK, sections: 1};
        } else if (strength <= 4 || numberOfChars < 5) {
            return {strength: TMeasurement.WEAK, sections: 2};
        } else if (strength <= 6 || numberOfChars < 7) {
            return {strength: TMeasurement.MEDIUM, sections: 3};
        } else {
            return {strength: TMeasurement.STRONG, sections: 4};
        }
    }, [numberOfChars, uppercase, lowercase, symbols, numbers]);

    const sections: JSX.Element[] = [];
    for (let i = 0; i < 4; i++) {
        const sectionClassName = classNames({
            [styles.section]: true,
            [styles.section_type_tooWeak]: measurement.strength === TMeasurement.TOO_WEAK && i < measurement.sections,
            [styles.section_type_weak]: measurement.strength === TMeasurement.WEAK && i < measurement.sections,
            [styles.section_type_medium]: measurement.strength === TMeasurement.MEDIUM && i < measurement.sections,
            [styles.section_type_strong]: measurement.strength === TMeasurement.STRONG && i < measurement.sections,
        })
        sections.push(<li className={sectionClassName} key={i}></li>);
    }


    return (
        <div className={styles.strengthMeter}>
            <span>strength</span>
            <div className={styles.measurement}>
                <span className={styles.text}>{measurement.strength}</span>
                <ul className={styles.sectionsWrapper}>
                    {sections}
                </ul>
            </div>
        </div>
    );
};

export default StrengthMeter;