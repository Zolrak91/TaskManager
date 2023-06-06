import React from 'react';
import magnifier from '../assets/magnifier.png';
import '../styles/TaskSearch.css';

function TaskSearch({searchValue, setSearchValue}) {
    return (
        <>
            <div className='TaskSearch'>
                <input 
                placeholder="Comprar la cena"
                value={searchValue}
                onChange={(event)=>{
                    setSearchValue(event.target.value);
                }}
                />
                <span><img src={magnifier} alt='search_icon' /></span>
            </div>
        </>
    );
}

export default TaskSearch;