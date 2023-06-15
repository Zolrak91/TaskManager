import React from 'react';
import { TaskContext } from '../context/TaskContext';
import '../styles/TaskCounter.css';

function TaskCounter() {
    const {
        completedTasks, 
        totalTasks
    } = React.useContext(TaskContext);

    return (
        <h2 className='TaskCounter'>Has completado {completedTasks} de {totalTasks} tareas</h2>
    );
}

export default TaskCounter;