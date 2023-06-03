import '../styles/ToDoCounter.css';

function ToDoCounter({ completed, total }) {
    return (
        <h2 className='ToDoCounter'>Has completado {completed} de {total} tareas</h2>
    );
}

export default ToDoCounter;