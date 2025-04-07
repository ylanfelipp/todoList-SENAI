import styles from "./styles.module.css"
import TaskItem from '../TaskItem/TaskItem'

const TaskList = ({ taskListView, setTaskListView, setTaskList }) => {
    return (
        <div className={styles.listTask}>
            {taskListView.map((task) => (
                <TaskItem task={task} key={task.id} setTaskListView={setTaskListView} setTaskList={setTaskList} />
            ))}
        </div>
    )
}

export default TaskList