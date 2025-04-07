import styles from "./styles.module.css"

const Filter = ({ filter, setFilter }) => {
    return (
        <section className={styles.taskFilter} value={filter} onChange={e => setFilter(e.target.value)}>
            <div>
                <label htmlFor="filter-task">Filtro</label>
                <select name="filter" id="filter-task">
                    <option value="todas">Todas</option>
                    <option value="concluidas">Concluídas</option>
                    <option value="pendentes">Pendentes</option>
                </select>
            </div>
        </section>
    )
}

export default Filter