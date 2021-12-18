import { useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo(props) {

    const [modalIsopen, setModalIsopen] = useState(false);

    function deleteHandler() {
        setModalIsopen(true);

    };

    function closeModalHandler(){

        setModalIsopen(false);
        
    }

    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <h6>{props.status}</h6>
            <div className='actions'>
                <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
            {modalIsopen ? <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>:null}
            {modalIsopen ? <Backdrop onCancel={closeModalHandler}/>:null}

        </div>
    )


};

export default Todo;