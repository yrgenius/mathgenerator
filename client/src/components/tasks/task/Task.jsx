import styles from './Task.module.css'

const Task = ({ task, index }) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>{`Пример - ${index + 1}`}</h1>
            <p>
                <span>2</span>
                <span>+</span>
                <span>2</span>
                <span>=</span>
                <input className={styles.input} type='number' /></p>
        </div >
    )
}

export default Task