import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/ModalBackground.css'

function ModalBackground({ children }) {
    return ReactDOM.createPortal(
        <div className='ModalBackground'>
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export default ModalBackground;