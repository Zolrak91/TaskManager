import '../styles/TaskList.css';

function TaskList({ children }) {
    return (
        <ul className='TaskList'>
            {children}
        </ul>
    );
}

export default TaskList;