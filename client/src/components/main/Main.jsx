import React, { Component, useEffect, useState } from 'react'
import Constructor from '../constructor/Constructor'
import Tasks from '../tasks/Tasks'


const Main = () => {
    const [countTasks, setCountTasks] = useState(1)
    const [operators, setOperators] = useState({
        plus: false,
        minus: false,
        mult: false,
        division: false,
    })

    return (
        <div className="content" >
            <Constructor
                getTotalCountTasks={setCountTasks}
                operators={operators}
                setOperators={setOperators}
            />
            <Tasks
                totalCount={countTasks}
                operators={operators} />
            <button
                className='content__btn'
                onClick={() => { }}>Проверить</button>
        </div>
    )
}

export default Main;

