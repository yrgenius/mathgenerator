import React, { useState } from 'react'
import RangeInput from '../UI/input/RangeInput'
import styles from './Constructor.module.css'
import Button from '../UI/button/Button'

const Constructor = ({ getTotalCountTasks }) => {
    const [maxTotal, setMaxTotal] = useState(1)
    const [operators, setOperators] = useState({
        plus: false,
        minus: false,
        mult: false,
        division: false,
    })

    return (
        <div className={styles.wrapper}>
            <RangeInput
                maxTotal={maxTotal}
                setMaxTotal={setMaxTotal} />
            <div className={styles.wrapper__operators}>
                <label className={styles.label} htmlFor='operator-plus'> + </label>
                <input className={styles.operator}
                    onChange={(e) => {
                        setOperators({ ...operators, [e.target.name]: e.target.checked })
                    }}
                    type='checkbox'
                    id='operator-plus'
                    name='plus'></input>
            </div>
            <div className={styles.wrapper__operators}>
                <label className={styles.label} htmlFor='operator-minus'> - </label>
                <input className={styles.operator}
                    onChange={(e) => {
                        setOperators({ ...operators, [e.target.name]: e.target.checked })
                    }}
                    type='checkbox'
                    id='operator-minus'
                    name='minus'></input>
            </div>
            <div className={styles.wrapper__operators}>
                <label className={styles.label} htmlFor='operator-mult'> &#215; </label>
                <input className={styles.operator}
                    onChange={(e) => {
                        setOperators({ ...operators, [e.target.name]: e.target.checked })
                    }}
                    type='checkbox'
                    id='operator-mult'
                    name='mult'></input>
            </div>
            <div className={styles.wrapper__operators}>
                <label className={styles.label} htmlFor='operator-division'> &#247; </label>
                <input className={styles.operator}
                    onChange={(e) => {
                        setOperators({ ...operators, [e.target.name]: e.target.checked })
                    }}
                    type='checkbox'
                    id='operator-division'
                    name='division'></input>
            </div>
            <Button
                text='Generate'
                onClick={() => getTotalCountTasks(maxTotal)} />
        </div >
    )
}

export default Constructor