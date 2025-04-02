import React, { useState } from 'react'
import styles from "./styles.module.css"
import InputTask from '../InputTask/InputTask'
import Filter from '../Filter/Filter'
import TaskList from '../TaskList/TaskList'

const Content = () => {
    const [taskList, setTaskList] = useState([
        {
            id: "0001",
            name: "Ir ao Mercado",
            status: "pendente"
        }
    ])
    const [taskListView, setTaskListView] = useState(taskList)
    return (
        <main className={styles.mainContent}>
            <section className={styles.inputTask}>
                <InputTask setInputValue={setTaskList} />
            </section>
            <section className={styles.filterTask}>
                <Filter setInputValue={setTaskList} setTaskListView={setTaskListView} />
            </section>
            <section>
                <TaskList taskList={taskListView} />
            </section>
        </main>
    )
}

export default Content