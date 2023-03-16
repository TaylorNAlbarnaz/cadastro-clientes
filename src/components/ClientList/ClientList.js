import './ClientList.css';
import { ClientSingle } from '../';

function ClientList(props) {
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
            <tr>
              <td>Cliente de Sobrenome Longo</td>
              <td>000.000.000-00</td>
              <td>cliente@hotmail.com</td>
              <td>(00)00000-0000</td>
              <td> <ion-icon name="eye" onClick={props.onView}></ion-icon> </td>
              <td> <ion-icon name="build" onClick={props.onEdit}></ion-icon> </td>
              <td> <ion-icon name="trash" onClick={props.onDelete}></ion-icon> </td>
            </tr>

            <ClientSingle/>
            <ClientSingle/>
            <ClientSingle/>
            <ClientSingle/>
            <ClientSingle/>
            <ClientSingle/>
            <ClientSingle/>
            <ClientSingle/>
            <ClientSingle/>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ClientList;
