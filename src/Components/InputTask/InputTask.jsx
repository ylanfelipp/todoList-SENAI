import React from 'react'
import styles from "./styles.module.css"

const InputTask = () => {
    return (
        <section className={styles.taskAdd}>
            <div className={styles.inputAdd}>
                <form>
                    <label htmlFor="add-task">Adicionar Tarefas</label>
                    <input type="text" name="add-task" id="add-task" placeholder="Tarefa" />
                </form>
            </div>
            <div className={styles.btnAdd}>
                <button type="submit">Adicionar</button>
            </div>
        </section>
    )
}

export default InputTask