import '../styles/ToDoItem.css';

function ToDoItem({ text }) {
    return (
        <li className='ToDoItem'>
            <span>V</span>
            <p>{text}</p>
            <span><button className='DeleteToDoButton'>X</button></span>
        </li>
    );
}

export default ToDoItem;