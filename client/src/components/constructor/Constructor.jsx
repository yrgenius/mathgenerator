import React, { useState } from 'react';
import RangeInput from '../UI/input/RangeInput';
import styles from './Constructor.module.css';
import Button from '../UI/button/Button';

const Constructor = ({ generateTasks }) => {
    const [maxTotal, setMaxTotal] = useState(1);

    return (
        <div className={styles.wrapper}>
            <RangeInput
                maxTotal={maxTotal}
                setMaxTotal={setMaxTotal} />
            <Button
                text='Generate'
                onClick={generateTasks} />
        </div>
    );
};

export default Constructor;