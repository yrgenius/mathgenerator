import React from 'react';
import styles from './Tasks.module.css';

const Tasks = ({ totalCount }) => {
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