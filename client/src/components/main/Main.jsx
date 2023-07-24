import React, { Component, useEffect, useState } from 'react'
import Constructor from '../constructor/Constructor'
import Tasks from '../tasks/Tasks'
// import styles from './Main.module.css';

const Main = () => {
    const [countTasks, setCountTasks] = useState(1)


    return (
        <div className="content" >
            <Constructor
                getTotalCountTasks={setCountTasks}
            />
            <Tasks
                totalCount={countTasks} />
            <button
                className='content__btn'
                onClick={() => { }}>Проверить</button>
        </div>
    )
}

export default Main;

