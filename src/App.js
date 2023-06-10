// CAMBIAR EL TASKCOUNTER CUANDO NO HAY TAREAS POR HACER, QUE NO "DIGA 0 DE 0"

import React from 'react';
import Title from './components/Title';
import TaskCounter from './components/TaskCounter';
import TaskSearch from './components/TaskSearch';
import NoTaskMessage from './components/NoTasksMessage';
import TaskList from './containers/TaskList';
import TaskItem from './components/TaskItem';
import CreateTaskButton from './components/CreateTaskButton';

// const defaultTasks = [
//   {text: 'Tarea1', completed: false},
//   {text: 'Tarea2', completed: false},
//   {text: 'Tarea3', completed: false},
//   {text: 'Tarea4', completed: false},
//   {text: 'Emparejar', completed: false},
// ];

// localStorage.setItem('TASKS_V1', JSON.stringify(defaultTasks));
// localStorage.removeItem('TASKS_V1');

function App() {
  const localStorageTasks = localStorage.getItem('TASKS_V1');
  let parsedTasks;

  // If 'TASKS_V1' in localStorage is null, undefined, etc, it
  if (!localStorageTasks) {
    localStorage.setItem('TASKS_V1', JSON.stringify([]));
    parsedTasks = [];
  } else {
    parsedTasks = JSON.parse(localStorageTasks);
  }

  // Create a State to store the tasks in an array with "parsedTasks" as a default State
  const [tasks, setTasks] = React.useState(parsedTasks);

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

  // Function responsible update the tasks in State "tasks" and localStorage
  const saveTasks = (newTasks) => {
    localStorage.setItem('TASKS_V1', JSON.stringify(newTasks));

    setTasks(newTasks);
  };

  // Function responsible for the completion of tasks
  const compleTask = (text) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex((task) => task.text === text);
    
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

  return (
    <>
      <Title></Title>

      {/* Counts the completed task over total */}
      <TaskCounter 
        completed={completedTasks} 
        total={totalTasks} 
      />

      {/* Used to search among task */}
      <TaskSearch 
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
      />

      {/* List of tasks */}
      {tasks.length === 0 ? 
          <NoTaskMessage />
        :
          <TaskList>
            {filteredTasks.map(task => (
              <TaskItem 
                key={task.text} 
                text={task.text} 
                completed={task.completed} 
                onComplete={() => compleTask(task.text)}
                onDelete={() => deleteTask(task.text)}
              />
            ))}
          </TaskList>
      }
      
      {/* Button to create task */}
      <CreateTaskButton />
    </>
  );
}

export default App;
