import React, { useState, FC, useCallback } from "react";
import styles from '../../styles/Home.module.css'

const Todo: FC = () => {
    const [tasks, setTask] = useState<string[]>([]);
    const [t, setT] = useState('');
    console.log(tasks);
    const handleTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        setT(e.target.value);
    }

    const handleKey = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === 'Enter' && t != '') {
            setTask([...tasks, t])
            setT('')
        }
    }, [t, tasks])

    const handleClick = useCallback(() => {
            t != '' && setTask([...tasks, t])
        setT('')
    }, [t, tasks])

    return (
        <>
            <div className={styles.container}>
                <input type='text' className={styles.taskInput} value={t} onChange={(e) => handleTask(e)} onKeyPressCapture={(event) => handleKey(event)} />
                <button onClick={handleClick}>Save</button>
            </div><div className={styles.title}>
                {tasks.map((task, i) => (
                    <ul key={i} className={styles.counter}>
                        <li key={i}>{task}</li>
                    </ul>
                ))}
            </div>
        </>
    );
};
export default Todo;