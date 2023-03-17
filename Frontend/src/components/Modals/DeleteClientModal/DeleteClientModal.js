import './DeleteClientModal.css';
import { removerCliente } from '../../../services/ClienteService';

function DeleteClientModal(props) {
  // Caso confirmado, deleta o usuário selecionado, fecha tela e atualiza a lista
  function deletarCliente() {
    removerCliente(props.cliente.id);
    closeWindow();
    props.onUpdate();
  }

  // Fecha a janela chamado o evento onCLose no parent
  function closeWindow() {
    props.onClose();
  }

  return (
    <div className='DeleteClientModal' style={{'display': props.show ? 'flex' : 'none'}}>
      <div className='box'>
        {/* Botão de Fechar */}
        <div className='closeButton' onClick={() => closeWindow()}>
          <ion-icon name="close"></ion-icon>
        </div>
        
        {/* Botões para Excluir ou Cancelar */}
        <div>Tem certeza que deseja excluir esse cadastro?</div>
        <div className='buttons'>
          <button className='btn btn-danger' onClick={() => deletarCliente()}>Excluir</button>
          <button className='btn btn-secondary' onClick={() => closeWindow()}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteClientModal;
