import './CreateClientModal.css';
import InputMask from 'react-input-mask';


function CreateClientModal(props) {
  // Fecha a janela chamado o evento onCLose no parent
  function closeWindow() {
    props.onClose();
  }

  return (
    <div className='CreateClientModal' style={{'display': props.show ? 'flex' : 'none'}}>
      <div className='box'>
        <div className='closeButton' onClick={() => closeWindow()}>
          <ion-icon name="close"></ion-icon>
        </div>

        <form>
          <div className='form-row'>
            {/* Nome */}
            <div className='form-group'>
              <label for='nome'><h6>Nome</h6></label>
              <input type='text' name='nome' placeholder='Nome' className='form-control' required></input>
            </div>

            {/* Data de Nascimento */}
            <div className='form-group'>
              <label for='nascimento'><h6>Data de Nascimento</h6></label>
              <input type='date' name='nascimento' placeholder='Nascimento' className='form-control' required></input>
            </div>

            {/* CPF */}
            <div className='form-group'>
              <label for='cpf'><h6>CPF</h6></label>
              <InputMask mask='999.999.999-99'className='form-control'placeholder='___.___.___-__'></InputMask>
            </div>

            {/* Celular */}
            <div className='form-group'>
              <label for='celular'><h6>Celular</h6></label>
              <InputMask mask='(99) 9 9999-9999'className='form-control'placeholder='(__) _ ____-____'></InputMask>
            </div>

            {/* E-mail */}
            <div className='form-group'>
              <label for='e-mail'><h6>E-mail</h6></label>
              <InputMask mask='999.999.999-99'className='form-control'placeholder='CPF'></InputMask>
            </div>

            {/* Endereço */}
            <div className='form-group'>
              <label for='endereço'><h6>Endereço</h6></label>
              <input type='text' name='endereço' placeholder='Endereço' className='form-control' required></input>
            </div>

            {/* Observação */}
            <div className='form-group'>
              <label for='observacao'><h6>Observações</h6></label>
              <textarea name='observacao' placeholder='Observações' className='form-control' rows='3'></textarea>
            </div>

            {/* Salvar */}
            <div className='form-group'>
              <button className='btn btn-primary form-control'>{props.editing ? 'Salvar' : 'Criar'}</button> 
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateClientModal;
