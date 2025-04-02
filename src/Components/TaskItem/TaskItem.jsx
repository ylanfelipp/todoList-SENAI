import React from 'react'

const TaskItem = (task) => {
    console.log(task)
    return (
        <div>{task.name}</div>
    )
}

export default TaskItem