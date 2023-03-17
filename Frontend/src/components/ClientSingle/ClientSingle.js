import './ClientSingle.css';
import { format } from '../../util/Utils';

function ClientSingle(props) {
  return (
    <tr className='ClientSingle'>
      <td>{props.cliente.nome}</td>
      <td>{format(props.cliente.cpf, '###.###.###-##')}</td>
      <td>{props.cliente.email}</td>
      <td>{format(props.cliente.celular, '(##) # ####-####')}</td>
      <td> <ion-icon name="eye" onClick={props.onView}></ion-icon> </td>
      <td> <ion-icon name="build" onClick={props.onEdit}></ion-icon> </td>
      <td> <ion-icon name="trash" onClick={props.onDelete}></ion-icon> </td>
    </tr>
  );
}

export default ClientSingle;
