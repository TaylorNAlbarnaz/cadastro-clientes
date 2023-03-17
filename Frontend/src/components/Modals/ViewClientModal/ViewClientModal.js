import './ViewClientModal.css';
import { useState } from 'react';
import InputMask from 'react-input-mask';

function ViewClientModal(props) {
  const [cliente, setCliente] = useState();

  // Fecha a janela chamado o evento onCLose no parent
  function closeWindow() {
    props.onClose();
  }

  return (
    <div className='ViewClientModal' style={{'display': props.show ? 'flex' : 'none'}}>
      <div className='box'>
        {/* Botão de Fechar */}
        <div className='closeButton' onClick={() => closeWindow()}>
          <ion-icon name="close"></ion-icon>
        </div>

        <form>
          <div className='form-row'>
            {/* Nome */}
            <div className='form-group'>
              <label htmlFor='nome'><h6>Nome</h6></label>
              <input type='text' name='nome' placeholder='Nome' className='form-control' value={cliente?.nome} disabled></input>
            </div>

            {/* Data de Nascimento */}
            <div className='form-group'>
              <label htmlFor='nascimento'><h6>Data de Nascimento</h6></label>
              <input type='date' name='nascimento' placeholder='Nascimento' className='form-control' value={cliente?.nascimento} disabled></input>
            </div>

            {/* CPF */}
            <div className='form-group'>
              <label htmlFor='cpf'><h6>CPF</h6></label>
              <InputMask mask='999.999.999-99'className='form-control'placeholder='___.___.___-__' value={cliente?.cpf} disabled></InputMask>
            </div>

            {/* Celular */}
            <div className='form-group'>
              <label htmlFor='celular'><h6>Celular</h6></label>
              <InputMask mask='(99) 9 9999-9999'className='form-control'placeholder='(__) _ ____-____' value={cliente?.celular} disabled></InputMask>
            </div>

            {/* E-mail */}
            <div className='form-group'>
              <label htmlFor='e-mail'><h6>E-mail</h6></label>
              <input type='text' name='e-mail' placeholder='E-mail' className='form-control' value={cliente?.email} disabled></input>
            </div>

            {/* Endereço */}
            <div className='form-group'>
              <label htmlFor='endereço'><h6>Endereço</h6></label>
              <input type='text' name='endereço' placeholder='Endereço' className='form-control' value={cliente?.endereco} disabled></input>
            </div>

            {/* Observações */}
            <div className='form-group'>
              <label htmlFor='observacao'><h6>Observações</h6></label>
              <textarea
                name='observacao'
                placeholder='Observações'
                className='form-control'
                rows='3'
                value={cliente ? cliente.observacoes : ''}
                disabled></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ViewClientModal;