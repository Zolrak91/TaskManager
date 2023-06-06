import '../styles/TaskItem.css';

function TaskItem({ text, onComplete, onDelete }) {
    return (
        <li className='TaskItem'>
            <span 
                className='CompleteTaskButton'
                onClick={onComplete}
            >
                ✓
            </span>
            <p>{text}</p>
            <span 
                className='DeleteTaskButton'
                onClick={onDelete}
            >
                X
            </span>
        </li>
    );
}

export default TaskItem;