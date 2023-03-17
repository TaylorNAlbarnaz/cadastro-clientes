import './ViewClientModal.css';
import { useEffect } from 'react';
import { format } from '../../../util/Utils';
import InputMask from 'react-input-mask';

function ViewClientModal(props) {
  // Fecha a janela chamado o evento onCLose no parent
  function closeWindow() {
    props.onClose();
  }

  // Atualiza os dados do usuário na tela de visualização
  useEffect(() => {
    document.getElementById('vnome').value = (props.cliente) ? props.cliente.nome : '';
    document.getElementById('vnascimento').value = (props.cliente) ? props.cliente.nascimento : '';
    document.getElementById('vcpf').value = (props.cliente) ? props.cliente.cpf : '';
    document.getElementById('vcelular').value = (props.cliente) ? props.cliente.celular : '';
    document.getElementById('vemail').value = (props.cliente) ? props.cliente.email : '';
    document.getElementById('vendereco').value = (props.cliente) ? props.cliente.endereco : '';
    document.getElementById('vobservacoes').value = (props.cliente) ? props.cliente.observacoes : '';

    // Formata o CPF e o Celular
    document.getElementById('vcpf').value = format(document.getElementById('vcpf').value, '###.###.###-##');
    document.getElementById('vcelular').value = format(document.getElementById('vcelular').value, '(##) # ####-####');
  }, [props.cliente])

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
              <input
                type='text'
                id='vnome'
                name='nome'
                placeholder='Nome'
                className='form-control'
                disabled
              ></input>
            </div>

            {/* Data de Nascimento */}
            <div className='form-group'>
              <label htmlFor='nascimento'><h6>Data de Nascimento</h6></label>
              <input
                type='date'
                id='vnascimento'
                name='nascimento'
                placeholder='Nascimento'
                className='form-control'
                disabled
              ></input>
            </div>

            {/* CPF */}
            <div className='form-group'>
              <label htmlFor='cpf'><h6>CPF</h6></label>
              <InputMask
                mask='999.999.999-99'
                id='vcpf'
                className='form-control'
                placeholder='___.___.___-__'
                disabled
              ></InputMask>
            </div>

            {/* Celular */}
            <div className='form-group'>
              <label htmlFor='celular'><h6>Celular</h6></label>
              <InputMask
                mask='(99) 9 9999-9999'
                id='vcelular'
                className='form-control'
                placeholder='(__) _ ____-____'
                disabled></InputMask>
            </div>

            {/* E-mail */}
            <div className='form-group'>
              <label htmlFor='e-mail'><h6>E-mail</h6></label>
              <input
                type='text'
                id='vemail'
                name='email'
                placeholder='E-mail'
                className='form-control'
                disabled></input>
            </div>

            {/* Endereço */}
            <div className='form-group'>
              <label htmlFor='endereço'><h6>Endereço</h6></label>
              <input
                type='text'
                id='vendereco'
                name='endereco'
                placeholder='Endereço'
                className='form-control'
                disabled></input>
            </div>

            {/* Observações */}
            <div className='form-group'>
              <label htmlFor='observacao'><h6>Observações</h6></label>
              <textarea
                name='observacoes'
                id='vobservacoes'
                placeholder='Observações'
                className='form-control'
                rows='3'
                disabled></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ViewClientModal;