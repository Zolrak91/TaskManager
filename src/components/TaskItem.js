import CompleteTaskIcon from './CompleteTaskIcon';
import DeleteTaskIcon from './DeleteTaskIcon';
import '../styles/TaskItem.css';

function TaskItem({ text, onComplete, onDelete, completed }) {
    return (
        <li className='TaskItem'>

            <CompleteTaskIcon 
                className={`CompleteTaskIcon ${completed && "CompleteTaskIcon-checked"}`}
                onClick={onComplete}
            />

            <p className={`TaskItem-p ${completed && "TaskItem-p--checked"}`}>
                {text}
            </p>

            <DeleteTaskIcon 
                className='DeleteTaskIcon'
                onClick={onDelete}
            />
        </li>
    );
}

export default TaskItem;