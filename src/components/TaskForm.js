import React from 'react';
import { TaskContext } from '../context/TaskContext';
import '../styles/TaskForm.css';

function TaskForm() {
    const {
        setOpenModal,
        addTask
    } = React.useContext(TaskContext);

    const [newTaskValue, setNewTaskValue] = React.useState('');

    const onSubmit = (event) =>{
        event.preventDefault();
        addTask(newTaskValue);
        setOpenModal(false);
    };
    
    const onCancel = (event) =>{
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTaskValue(event.target.value);
    };

    return (
        <form className='TaskForm' onSubmit={onSubmit}>
            <label className='TaskForm-label'>Escribe tu nueva tarea</label>
            <textarea 
                className='TaskForm-textarea' 
                placeholder='Terminar el reporte' 
                value={newTaskValue}
                onChange={onChange}
            />
            <div className='TaskForm-buttonContainer'>
                <button 
                    className='TaskForm-button TaskForm-button--cancel'
                    type='button'
                    onClick={onCancel}
                >
                    Cancelar
                </button>

                <button 
                    className='TaskForm-button TaskForm-button--add'
                    type='submit'
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export default TaskForm;