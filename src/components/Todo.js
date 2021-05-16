import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

const Todo = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function deleteHandler() {
    setIsModalOpen(true);
  }

  function closeHandler() {
    setIsModalOpen(false);
  } 

  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {isModalOpen && (
        <Modal onCancel={closeHandler} onConfirm={closeHandler} />
      )}
      {isModalOpen && <Backdrop onCancel={closeHandler} />}
    </div>
  );
};

export default Todo;
