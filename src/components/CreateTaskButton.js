import '../styles/CreateTaskButton.css';

function CreateTaskButton() {
    return (
        <button className='CreateTaskButton'
        onClick={(event)=>{
            console.log(event.target);
        }}
        >+</button>
    );
}

export default CreateTaskButton;