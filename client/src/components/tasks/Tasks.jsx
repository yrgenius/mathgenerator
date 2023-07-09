import React, {useState} from 'react';
import styles from './Tasks.module.css';

const Tasks = ({ totalCount }) => {
    const [totalCountTasks, setTotalCountTasks] = useState(0);
    const tasks = Array(totalCount);

    return (
        <div className={styles.wrapper}>
            {tasks.map(() => (
                <h1>task</h1>
            ))}
        </div >
    );
};

export default Tasks;