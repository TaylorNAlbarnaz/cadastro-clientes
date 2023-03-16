import './ViewClientModal.css';
import Button from'react-bootstrap/Button';

function ViewClientModal(props) {
  // Fecha a janela chamado o evento onCLose no parent
  function closeWindow() {
    props.onClose();
  }

  return (
    <div className='ViewClientModal' style={{'display': props.show ? 'flex' : 'none'}}>
      <div className='box'>
        <Button onClick={() => closeWindow()}>Close View</Button>
      </div>
    </div>
  );
}

export default ViewClientModal;