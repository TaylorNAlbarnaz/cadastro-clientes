import './DeleteClientModal.css';
import Button from'react-bootstrap/Button';

function DeleteClientModal(props) {
  // Fecha a janela chamado o evento onCLose no parent
  function closeWindow() {
    props.onClose();
  }

  return (
    <div className='DeleteClientModal' style={{'display': props.show ? 'flex' : 'none'}}>
      <div className='box'>
        <Button onClick={() => closeWindow()}>Close Delete</Button>
      </div>
    </div>
  );
}

export default DeleteClientModal;
