import React, { useState } from 'react'
import styles from "./styles.module.css"

const InputTask = ({ setInputValue, inputValue, setTaskListView }) => {
    const [inputValueTask, setInputValueTask] = useState("")
    const createTask = (e) => {
        e.preventDefault()
        if (inputValueTask.trim() === "")  return
        const randomId = Math.floor(Math.random() * 10000) + 1
        setInputValue(() => {
            const newArrayTask = [...inputValue, { id: randomId, name: inputValueTask, status: false }]
            setTaskListView(newArrayTask)
            setInputValueTask("")
            return newArrayTask
        })
    }
    return (
        <section className={styles.taskAdd}>
            <div className={styles.inputAdd}>
                <form>
                    <div>
                        <label htmlFor="add-task">Adicionar Tarefas</label>
                        <input
                            type="text"
                            name="add-task"
                            id="add-task"
                            placeholder="Tarefa"
                            value={inputValueTask}
                            onChange={e => setInputValueTask(e.target.value)}
                        />
                    </div>
                    <div className={styles.btnAdd}>
                        <button onClick={createTask}>Adicionar</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default InputTask