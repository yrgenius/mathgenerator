import React, { useEffect, useState } from 'react'
import Task from './task/Task'
import styles from './Tasks.module.css'

const Tasks = ({ totalCount }) => {
    const [tasksArray, setTasksArray] = useState([])

    useEffect(() => {
        let arr = Array(+totalCount).fill(0)
        setTasksArray(arr)
    }, [totalCount])

    return (
        <div className={styles.wrapper}>
            {tasksArray.map((el, i) => (
                <Task task={el} index={i} />
            ))}
        </div >
    )
}

export default Tasks