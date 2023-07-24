import React, { useEffect, useState } from 'react'
import Task from './task/Task'
import Main from '../../services/generate'
import styles from './Tasks.module.css'

const Tasks = ({ totalCount, operators }) => {
    const [tasksArray, setTasksArray] = useState([])

    useEffect(() => {
        let arr = Array(+totalCount).fill(0)
        Main.generateTasks(operators, +totalCount)
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