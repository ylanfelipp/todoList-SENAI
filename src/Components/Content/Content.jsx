import React, { useState } from 'react'
import styles from "./styles.module.css"
import InputTask from '../InputTask/InputTask'
import Filter from '../Filter/Filter'
import TaskList from '../TaskList/TaskList'

const Content = () => {
    const [taskList, setTaskList] = useState([
        {
            id: 1,
            name: "Ir ao Mercado",
            status: "pendente"
        }
    ])
    const [filter, setFilter] = useState("todos")
    const filterTasks = filter === "todos" ? taskList : filter === taskList.filter(task => task.status === filter)
    const [taskListView, setTaskListView] = useState(taskList)
    return (
        <main className={styles.mainContent}>
            <section className={styles.inputTask}>
                <InputTask setInputValue={setTaskList} inputValue={taskList} setTaskListView={setTaskListView} />
            </section>
            <section className={styles.filterTask}>
                <Filter filter={setTaskList} setFilter={setFilter} />
            </section>
            <section>
                <TaskList taskListView={taskListView} setTaskListView={setTaskListView} setTaskList={setTaskList} />
            </section>
        </main>
    )
}

export default Content