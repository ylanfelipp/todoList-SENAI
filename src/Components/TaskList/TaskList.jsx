import styles from "./styles.module.css"
import TaskItem from '../TaskItem/TaskItem'

const TaskList = ({ taskList }) => {
    return (
        <div className={styles.listTask}>
            {taskList.map((task) => (
                <TaskItem task={{...task}} key={task.id}/>
            ))}
        </div>
    )
}

export default TaskList