import './CreateClientModal.css';
import { useEffect, useState } from 'react';
import { format, unformat, cpf } from '../../../util/Utils';
import { criarCliente, atualizarCliente } from '../../../services/ClienteService';
import InputMask from 'react-input-mask';

function CreateClientModal(props) {
  const [erro, setErro] = useState(null);

  // Atualiza os dados do usuário para edição
  useEffect(() => {
    document.getElementById('cnome').value = (props.cliente && props.editing) ? props.cliente.nome : '';
    document.getElementById('cnascimento').value = (props.cliente && props.editing) ? props.cliente.nascimento : '';
    document.getElementById('ccpf').value = (props.cliente && props.editing) ? props.cliente.cpf : '';
    document.getElementById('ccelular').value = (props.cliente && props.editing) ? props.cliente.celular : '';
    document.getElementById('cemail').value = (props.cliente && props.editing) ? props.cliente.email : '';
    document.getElementById('cendereco').value = (props.cliente && props.editing) ? props.cliente.endereco : '';
    document.getElementById('cobservacoes').value = (props.cliente && props.editing) ? props.cliente.observacoes : '';

    // Formata o CPF e o Celular
    document.getElementById('ccpf').value = format(document.getElementById('ccpf').value, '###.###.###-##');
    document.getElementById('ccelular').value = format(document.getElementById('ccelular').value, '(##) # ####-####');
  }, [props.cliente])

  // Função chamada quando o botão de criar cliente for clicado
  function createCliente(e) {
    e.preventDefault();
    
    const novoCliente = {
      nome: document.getElementById('cnome').value,
      nascimento: document.getElementById('cnascimento').value,
      cpf: unformat(document.getElementById('ccpf').value),
      celular: unformat(document.getElementById('ccelular').value),
      email: document.getElementById('cemail').value,
      endereco: document.getElementById('cendereco').value,
      observacoes: document.getElementById('cobservacoes').value,
    }

    if (validarCliente(novoCliente)) {
      // Cria o cliente, reseta todos inputs, fecha a janela e atualiza a lista
      criarCliente(novoCliente);
      resetInputs();
      closeWindow();
      props.onUpdate();
    }
  }

  // Função chamada quando o botão de atualizar cliente for clicado
  async function updateCliente(e) {
    e.preventDefault();

    const clienteAtualizado = {
      id: props.cliente.id,
      nome: document.getElementById('cnome').value,
      nascimento: document.getElementById('cnascimento').value,
      cpf: unformat(document.getElementById('ccpf').value),
      celular: unformat(document.getElementById('ccelular').value),
      email: document.getElementById('cemail').value,
      endereco: document.getElementById('cendereco').value,
      observacoes: document.getElementById('cobservacoes').value,
    }

    console.log("Atualizado cliente " + props.cliente.id + " com dados: ", clienteAtualizado);

    if (validarCliente(clienteAtualizado)) {
      // Atualiza o cliente, reseta todos inputs, fecha a janela e atualiza a lista
      atualizarCliente(clienteAtualizado);
      resetInputs();
      closeWindow();
      props.onUpdate();
    }
  }

  // Valida se todos os dados estão corretos
  function validarCliente(cliente) {
    if (cliente.nome.length < 4) {
      setErro("Nome muito curto!");
      return false;
    }

    if (unformat(cliente.nascimento).length > 8) {
      setErro("Insira uma data válida!");
      return false;
    }

    if (!cpf(unformat(cliente.cpf))) {
      setErro("Insira um CPF válido!");
      return false;
    }

    if (cliente.celular.length > 11 || cliente.celular.length < 11) {
      setErro("Insira um número de celular válido!");
      return false;
    }

    if (cliente.email.length < 4) {
      setErro("Insira um email válido!");
      return false;
    }

    if (cliente.endereco.length < 4) {
      setErro("Insira um endereco válido!");
      return false;
    }

    return true;
  }

  // Função que reseta todos os campos de input
  function resetInputs() {
    document.getElementById('cnome').value = '';
    document.getElementById('cnascimento').value = '';
    document.getElementById('ccpf').value = '';
    document.getElementById('ccelular').value = '';
    document.getElementById('cemail').value = '';
    document.getElementById('cendereco').value = '';
    document.getElementById('cobservacoes').value = '';
  }

  // Fecha a janela chamado o evento onCLose no parent e remove o erro
  function closeWindow() {
    props.onClose();
    setErro(null);
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
                id='cnome'
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
                id='cnascimento'
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
                id='ccpf'
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
                id='ccelular'
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
                type='email'
                id='cemail'
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
                id='cendereco'
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
                id='cobservacoes'
                name='observacoes'
                placeholder='Observações'
                className='form-control'
                rows='3'
              ></textarea>
            </div>

            {/* Erros de Validação */}
            <div className='form-group'>
              <p> {erro} </p>
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
