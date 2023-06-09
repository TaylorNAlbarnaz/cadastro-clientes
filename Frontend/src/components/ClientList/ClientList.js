import './ClientList.css';
import { useState, useEffect } from 'react';
import { ClientSingle } from '../';
import { getClientes, procurarClientes } from '../../services/ClienteService';

function ClientList(props) {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    // Pega os primeiros 10 clientes ao carregar a página
    carregarDados();
  }, []);

  useEffect(() => {
    // Recarrega a lista caso a database seja atualizada
    carregarDados();
  }, [props.updateDatabase])

  useEffect(() => {
    // Procura pelos dados do cliente sempre que a query for modificada, a menos que ela seja nula
    if (props.query != null) {
      pesquisarDados();
    } else {
      carregarDados();
    }
  }, [props.query])

  async function carregarDados() {
    const data = await getClientes();
    setClientes(data);
  }

  async function pesquisarDados() {
    const data = await procurarClientes(props.query);
    setClientes(data);
  }

  return (
    <div className='ClientList'>
      <div className='container'>
        <table className='table table-striped'>
          <thead className='container__tablehead'>
            <tr>
              <th className='col-3'>Nome</th>
              <th className='col-2'>CPF</th>
              <th className='col-4'>Email</th>
              <th className='col-3'>Celular</th>
              <th className='col-1'></th>
              <th className='col-1'></th>
              <th className='col-1'></th>
            </tr>
          </thead>

          <tbody>
            {clientes.map((cliente) => {
            return (
              <ClientSingle
                key={cliente.id}
                cliente={cliente}
                onView = {() => props.onView(cliente.id)}
                onEdit = {() => props.onEdit(cliente.id)}
                onDelete = {() => props.onDelete(cliente.id)}  
              />
            )})}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ClientList;
