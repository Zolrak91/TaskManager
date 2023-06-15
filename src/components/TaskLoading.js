import '../styles/TaskLoading.css';

function TaskLoading({text}) {
    return (
        <li className='TaskLoading animated-background'>

            <p className={`TaskLoading-p`}>
                {text}
            </p>

        </li>
    );
}

export default TaskLoading;