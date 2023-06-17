import React from 'react';
import { TaskContext } from './context/TaskContext';
import TaskList from './containers/TaskList';
import ModalBackground from './containers/ModalBackground';
import Title from './components/Title';
import TaskCounter from './components/TaskCounter';
import TaskSearch from './components/TaskSearch';
import NoTaskMessage from './components/NoTasksMessage';
import TaskItem from './components/TaskItem';
import CreateTaskButton from './components/CreateTaskButton';
import TaskLoading from './components/TaskLoading';
import ErrorMessage from './components/ErrorMessage';
import TaskForm from './components/TaskForm';

function App() {
  const {
    totalTasks,
    loading,
    error,
    filteredTasks,
    completeTask,
    deleteTask,
    openModal,
    // setOpenModal,
  } = React.useContext(TaskContext);

  return (
    <>
      <Title></Title>

      {/* Counts the completed task over total (ONLY IF THERE ARE TASKS TO BE COMPLETED)*/}
      { totalTasks !== 0 && <TaskCounter /> }

      {/* Used to search among task */}
      <TaskSearch />

      {/* List of tasks */}
      <TaskList>
        {loading &&
        (
          <>
            <TaskLoading text={''} />
            <TaskLoading text={''} />
            <TaskLoading text={''} />
            <TaskLoading text={''} />
            <TaskLoading text={''} />
            <TaskLoading text={''} />
            <TaskLoading text={''} />
          </>
        )}
      
        {error && <ErrorMessage />}
      
        {(!loading && filteredTasks.length === 0 && totalTasks > 0) && <NoTaskMessage text={'No se han encontrado tareas'} />}
        {(!loading && filteredTasks.length === 0 && totalTasks === 0) && <NoTaskMessage text={'No tienes tareas por hacer'} />}
      
        {filteredTasks.map(task => (
          <TaskItem
            key={task.text}
            text={task.text}
            completed={task.completed}
            onComplete={() => completeTask(task.text)}
            onDelete={() => deleteTask(task.text)}
          />
        ))}
      </TaskList>
      
      {/* Button to create task */}
      <CreateTaskButton />

      {/* Modal component */}
      {openModal && (
        <ModalBackground>
          <TaskForm />
        </ModalBackground>
      )}
    </>
  );
}

export default App;