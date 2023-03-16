import './CreateClientModal.css';
import Button from'react-bootstrap/Button';

function CreateClientModal(props) {
  // Fecha a janela chamado o evento onCLose no parent
  function closeWindow() {
    props.onClose();
  }

  return (
    <div className='CreateClientModal' style={{'display': props.show ? 'flex' : 'none'}}>
      <div className='box'>
        <Button onClick={() => closeWindow()}>Close {props.editing ? 'Edit' : 'Create'}</Button>
      </div>
    </div>
  );
}

export default CreateClientModal;
