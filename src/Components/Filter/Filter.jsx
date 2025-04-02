import React, { useState } from 'react'
import styles from "./styles.module.css"

const Filter = ({ setTaskListView, setInputValue }) => {
    const [filter, setFilter] = useState("")
    const switchFilter = (status) => {
        setFilter(status)
        switch(status) {
            case "concluidas":
                setTaskListView(taskList => taskList.filter(task => task.status !== "concluido"))
                break
            case "pendentes":
                setTaskListView(taskList => taskList.filter(task => task.status !== "pendente"))
                break
            case "excluidas":
                setTaskListView(taskList => taskList.filter(task => task.status !== "excluida"))
                break
            case "todas":
                setInputValue(taskList => setTaskListView(taskList))
                break
        }
    }
    return (
        <section className={styles.taskFilter} value={filter} onChange={e => switchFilter(e.target.value)}>
            <div>
                <label htmlFor="filter-task">Filtro</label>
                <select name="filter" id="filter-task">
                    <option value="todas">Todas</option>
                    <option value="concluidas">Concluídas</option>
                    <option value="pendentes">Pendentes</option>
                    <option value="excluidas">Excluídas</option>
                </select>
            </div>
        </section>
    )
}

export default Filter