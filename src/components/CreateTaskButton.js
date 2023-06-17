import React from 'react';
import { TaskContext } from '../context/TaskContext';
import '../styles/CreateTaskButton.css';

function CreateTaskButton() {
    const {setOpenModal} = React.useContext(TaskContext);

    return (
        <button className='CreateTaskButton'
        onClick={(event)=>{
            setOpenModal(state => !state); // if true turns false and viceversa
        }}
        >+</button>
    );
}

export default CreateTaskButton;