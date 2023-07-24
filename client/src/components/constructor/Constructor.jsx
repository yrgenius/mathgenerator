import React, { useState } from 'react'
import RangeInput from '../UI/input/RangeInput'
import styles from './Constructor.module.css'
import Button from '../UI/button/Button'

const Constructor = ({ getTotalCountTasks }) => {
    const [maxTotal, setMaxTotal] = useState(1)

    return (
        <div className={styles.wrapper}>
            <RangeInput
                maxTotal={maxTotal}
                setMaxTotal={setMaxTotal} />
            <label forHtml={''}></label>
            <Button
                text='Generate'
                onClick={() => getTotalCountTasks(maxTotal)} />
        </div>
    )
}

export default Constructor