import '../styles/TaskCounter.css';

function TaskCounter({ completed, total }) {
    return (
        <h2 className='TaskCounter'>Has completado {completed} de {total} tareas</h2>
    );
}

export default TaskCounter;