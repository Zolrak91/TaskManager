import React from 'react';
import Title from './components/Title';
import ToDoCounter from './components/ToDoCounter';
import ToDoSearch from './components/ToDoSearch';
import ToDoList from './containers/ToDoList';
import ToDoItem from './components/ToDoItem';
import CreateToDoButton from './components/CreateToDoButton';

// CREAR ESTILOS PARA CADA COMPONENTE

const tasks = [
  {text: 'Tarea1', completed: false},
  {text: 'Tarea2', completed: false},
  {text: 'Tarea3', completed: false},
  {text: 'Tarea4', completed: false},
];

const completedTasks = tasks.filter(task => (task.completed === true));

function App() {
  return (
    <>
      <Title></Title>

      {/* Counts the completed task over total */}
      <ToDoCounter completed={completedTasks.length} total={tasks.length} />
      {console.log(tasks)}
      {console.log(completedTasks)}

      {/* Used to search among task */}
      <ToDoSearch />

      {/* List of tasks */}
      <ToDoList>
        {tasks.map(task => (
          <ToDoItem 
            key={task.text} 
            text={task.text} 
            completed={task.completed} />
        ))}
      </ToDoList>

      {/* Button to create task */}
      <CreateToDoButton />
    </>
  );
}

export default App;
