import './CreateClientModal.css';
import { useEffect } from 'react';
import { format } from '../../../util/Utils';
import InputMask from 'react-input-mask';


function CreateClientModal(props) {
  // Fecha a janela chamado o evento onCLose no parent
  function closeWindow() {
    props.onClose();
  }

  // Atualiza os dados do usuário para edição
  useEffect(() => {
    document.getElementById('nome').value = (props.cliente && props.editing) ? props.cliente.nome : '';
    document.getElementById('nascimento').value = (props.cliente && props.editing) ? props.cliente.nascimento : '';
    document.getElementById('cpf').value = (props.cliente && props.editing) ? props.cliente.cpf : '';
    document.getElementById('celular').value = (props.cliente && props.editing) ? props.cliente.celular : '';
    document.getElementById('email').value = (props.cliente && props.editing) ? props.cliente.email : '';
    document.getElementById('endereco').value = (props.cliente && props.editing) ? props.cliente.endereco : '';
    document.getElementById('observacoes').value = (props.cliente && props.editing) ? props.cliente.observacoes : '';

    // Formata o CPF e o Celular
    document.getElementById('cpf').value = format(document.getElementById('cpf').value, '###.###.###-##');
    document.getElementById('celular').value = format(document.getElementById('celular').value, '(##) # ####-####');
  }, [props.cliente])

  // Função chamada quando o botão de criar cliente for clicado
  function createCliente(e) {
    e.preventDefault();
    console.log('createClient');
  }

  // Função chamada quando o botão de atualizar cliente for clicado
  function updateCliente(e) {
    e.preventDefault();
    console.log('updateClient');
  }

  return (
    <div className='CreateClientModal' style={{'display': props.show ? 'flex' : 'none'}}>
      <div className='box'>
        {/* Botão de Fechar */}
        <div className='closeButton' onClick={() => closeWindow()}>
          <ion-icon name="close"></ion-icon>
        </div>

        <form onSubmit={props.editing ? updateCliente : createCliente}>
          <div className='form-row'>
            {/* Nome */}
            <div className='form-group'>
              <label htmlFor='nome'><h6>Nome</h6></label>
              <input
                type='text'
                id='nome'
                name='nome'
                placeholder='Nome'
                className='form-control'

                required
              ></input>
            </div>

            {/* Data de Nascimento */}
            <div className='form-group'>
              <label htmlFor='nascimento'><h6>Data de Nascimento</h6></label>
              <input
                type='date'
                id='nascimento'
                name='nascimento'
                placeholder='Nascimento'
                className='form-control'
                required
              ></input>
            </div>

            {/* CPF */}
            <div className='form-group'>
              <label htmlFor='cpf'><h6>CPF</h6></label>
              <InputMask
                id='cpf'
                name='cpf'
                mask='999.999.999-99'
                className='form-control'
                placeholder='___.___.___-__'
                required
              ></InputMask>
            </div>

            {/* Celular */}
            <div className='form-group'>
              <label htmlFor='celular'><h6>Celular</h6></label>
              <InputMask
                id='celular'
                name='celular'
                mask='(99) 9 9999-9999'
                className='form-control'
                placeholder='(__) _ ____-____'
                required
              ></InputMask>
            </div>

            {/* E-mail */}
            <div className='form-group'>
              <label htmlFor='email'><h6>E-mail</h6></label>
              <input
                type='text'
                id='email'
                name='email'
                placeholder='E-mail'
                className='form-control'
                required
              ></input>
            </div>

            {/* Endereço */}
            <div className='form-group'>
              <label htmlFor='endereço'><h6>Endereço</h6></label>
              <input
                type='text'
                id='endereco'
                name='endereco'
                placeholder='Endereço'
                className='form-control'
                required
              ></input>
            </div>

            {/* Observações */}
            <div className='form-group'>
              <label htmlFor='observacao'><h6>Observações</h6></label>
              <textarea
                id='observacoes'
                name='observacoes'
                placeholder='Observações'
                className='form-control'
                rows='3'
              ></textarea>
            </div>

            {/* Salvar */}
            <div className='form-group'>
              <button type='submit' className='btn btn-primary form-control'> {props.editing ? 'Salvar' : 'Criar'} </button> 
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateClientModal;
