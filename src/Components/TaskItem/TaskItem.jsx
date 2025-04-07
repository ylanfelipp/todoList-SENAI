import React, { useState } from 'react'

import styles from "./styles.module.css"

const TaskItem = ({ task, setTaskListView, setTaskList }) => {
    const [checked, setChecked] = useState(false)
    const onDelete = (id) => {
        setTaskListView((list) => {
            const newArray = list.filter(t => t.id !== id)
            setTaskList(newArray)
            return newArray
        })
    }
    return (
        <div className={styles.taskItem}>
            <input type="checkbox" name="" id="" onChange={() => setChecked(!checked)} checked={checked} />
            <strong>{task.name}</strong>
            <div className={styles.del}>
                <button onClick={() => onDelete(task.id)}>delete</button>
            </div>
        </div>
    )
}

export default TaskItem