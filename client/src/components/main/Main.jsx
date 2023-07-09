import React, {Component, useState} from 'react';
import Constructor from '../constructor/Constructor';
import Tasks from '../tasks/Tasks';
// import styles from './Main.module.css';

const Main = () => {
    const [countTasks, setCountTasks] = useState(0);

    const getTotalCountTasks = (totalCountTasks) => {
        setCountTasks(totalCountTasks);
    }
    const examination = () => {
        console.log('examination');
    }

    return (
        <div className="content" >
            <Constructor
                getTotalCountTasks={getTotalCountTasks}
            />
            <Tasks
                totalCount={countTasks}/>
            <button
                className='content__btn'
                onClick={examination}>Проверить</button>
        </div>
    );
};

export default Main;

