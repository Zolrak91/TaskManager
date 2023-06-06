// CAMBIAR EL TASKCOUNTER CUANDO NO HAY TAREAS POR HACER, QUE NO "DIGA 0 DE 0"

import React from 'react';
import Title from './components/Title';
import TaskCounter from './components/TaskCounter';
import TaskSearch from './components/TaskSearch';
import NoTaskMessage from './components/NoTasksMessage';
import TaskList from './containers/TaskList';
import TaskItem from './components/TaskItem';
import CreateTaskButton from './components/CreateTaskButton';

const defaultTasks = [
  {text: 'Tarea1', completed: false},
  {text: 'Tarea2', completed: false},
  {text: 'Tarea3', completed: false},
  {text: 'Tarea4', completed: false},
  {text: 'Emparejar', completed: false},
];

function App() {
  const [tasks, setTasks] = React.useState(defaultTasks);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;

  const filteredTasks = tasks.filter(task => {
    const taskText = task.text.toLowerCase(); //Using variables to shorten the return line
    const searchText = searchValue.toLowerCase();
    return taskText.includes(searchText);
  });

  const compleTask = (text) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex((task) => task.text === text);
    
    if(newTasks[taskIndex].completed === false) {
      newTasks[taskIndex].completed = true;
    } else {
      newTasks[taskIndex].completed = false;
    }

    setTasks(newTasks);
  };

  const deleteTask = (text) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex((task) => task.text === text);
    
    newTasks.splice(taskIndex, 1);
    setTasks(newTasks);
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
