import React from 'react';
import styles from './RangeInput.module.css';

const RangeInput = ({ maxTotal, setMaxTotal }) => {

    return (
        <div className={styles.wrapper}>
            <input
                className={styles.input}
                type='range'
                onChange={(e) => setMaxTotal(e.target.value)}
                min={1}
                max={100}
                step={1}
                defaultValue={maxTotal}
            />
            <label className={styles.label}>{maxTotal}</label>
        </div>
    );
};

export default RangeInput;