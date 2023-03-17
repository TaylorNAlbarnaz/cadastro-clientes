import './DeleteClientModal.css';
import { useState, useEffect } from 'react';

function DeleteClientModal(props) {
  const [cliente, setCliente] = useState();

  // Fecha a janela chamado o evento onCLose no parent
  function closeWindow() {
    props.onClose();
  }

  // Seta a variável cliente para a propriedade sempre que o componente for atualizado
  useEffect(() => setCliente(props.cliente));

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
          <button className='btn btn-danger' onClick={() => closeWindow()}>Excluir</button>
          <button className='btn btn-secondary' onClick={() => closeWindow()}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteClientModal;
