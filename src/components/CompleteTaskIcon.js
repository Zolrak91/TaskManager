import { IconContext } from 'react-icons';
import {FaCheck} from 'react-icons/fa/index.esm';
import '../styles/CompleteTaskIcon.css';

function CompleteTaskIcon({ className, onClick }) {
    return (
        <IconContext.Provider value={{ className: className }}>
            <div onClick={onClick}>
                <FaCheck />
            </div>
        </IconContext.Provider>
    );
}

export default CompleteTaskIcon;

// Previous working (too slim): BsCheck2