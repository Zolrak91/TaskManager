import magnifier from '../assets/magnifier.png';
import '../styles/ToDoSearch.css';

function ToDoSearch() {
    return (
        <>
            <div className='ToDoSearch'>
                <input placeholder="Comprar la cena" />
                <span><img src={magnifier} alt='search_icon' /></span>
            </div>
        </>
    );
}

export default ToDoSearch;