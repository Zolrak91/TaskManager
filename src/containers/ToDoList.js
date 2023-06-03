import '../styles/ToDoList.css';

function ToDoList({ children }) {
    return (
        <ul>
            {children}
        </ul>
    );
}

export default ToDoList;