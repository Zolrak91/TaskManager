import CompleteTaskIcon from './CompleteTaskIcon';
import DeleteTaskIcon from './DeleteTaskIcon';
import '../styles/TaskItem.css';

function TaskItem({ text, onComplete, onDelete, completed }) {
    return (
        <li className='TaskItem'>
            {/* <span 
                className='CompleteTaskButton'
                onClick={onComplete}
            >
                ✓
            </span> */}
            <CompleteTaskIcon 
                className={`CompleteTaskIcon ${completed && "CompleteTaskIcon-checked"}`}
                onClick={onComplete}
            />

            <p className={`TaskItem-p ${completed && "TaskItem-p--checked"}`}>
                {text}
            </p>

            {/* <span 
                className='DeleteTaskButton'
                onClick={onDelete}
            >
                X
            </span> */}
            <DeleteTaskIcon 
                className='DeleteTaskIcon'
                onClick={onDelete}
            />
        </li>
    );
}

export default TaskItem;