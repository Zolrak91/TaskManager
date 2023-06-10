import { IconContext } from 'react-icons';
import {IoIosCloseCircle} from 'react-icons/io/index.esm';
import '../styles/DeleteTaskIcon.css';

function DeleteTaskIcon({ className, onClick }) {
    return (
        <IconContext.Provider value={{ className: className }}>
            <div onClick={onClick}>
                <IoIosCloseCircle />
            </div>
        </IconContext.Provider>
    );
}

export default DeleteTaskIcon;

// Previous working: IoMdClose (slim), ImCross (big)
// Also works: MdClose (no frame), FaWindowClose (square), IoIosCloseCircle (circle)

// Doesnt work: IoClose, CgClose, VscChromClose