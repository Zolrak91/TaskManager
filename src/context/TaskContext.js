import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const TaskContext = React.createContext();

function TaskProvider({children}) {
    // Create a State using a custom hook
    const {
        item: tasks, // Renames "item" as "tasks"
        saveItem: saveTasks,
        loading,
        error
    } = useLocalStorage('TASKS_V1', []);

    // Creates a State to manage the portal (closed by default)
    const [openModal, setOpenModal] = React.useState(false);

    // Creates a State to store the value from the input in the searchbar
    const [searchValue, setSearchValue] = React.useState('');

    // Creates an array including only the tasks with "complete" attribute as true
    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;

    // Filters the tasks which text includes what is written in the searchbar
    const filteredTasks = tasks.filter(task => {
        const taskText = task.text.toLowerCase(); //Using variables to shorten the return line
        const searchText = searchValue.toLowerCase();
        return taskText.includes(searchText);
    });

    // Function responsible for the completion of tasks
    const completeTask = (text) => {
        const newTasks = [...tasks];
        const taskIndex = newTasks.findIndex((task) => task.text === text);
        
        // Allows to click the complete button again to change back the complete value
        if(newTasks[taskIndex].completed === false) {
        newTasks[taskIndex].completed = true;
        } else {
        newTasks[taskIndex].completed = false;
        }

        saveTasks(newTasks);
    };

    // Function responsible for the deletion of tasks
    const deleteTask = (text) => {
        const newTasks = [...tasks];
        const taskIndex = newTasks.findIndex((task) => task.text === text);
        
        newTasks.splice(taskIndex, 1);
        saveTasks(newTasks);
    };

    const addTask = (text) => {
        const newTasks = [...tasks];
        newTasks.push({
            text,
            completed: false,
        });
        saveTasks(newTasks)
    };

    return (
        <TaskContext.Provider value={{
            totalTasks,
            loading,
            error,
            searchValue,
            setSearchValue,
            completedTasks,
            filteredTasks,
            completeTask,
            deleteTask,
            openModal,
            setOpenModal,
            addTask,
        }}>
            {children}
        </TaskContext.Provider>
    );
}

export {TaskContext, TaskProvider};