import './Header.css';
import Button from'react-bootstrap/Button';

function Header(props) {
  return (
    <div className='Header'>
      <div className='container'>
        <h1>Cadastros de Clientes</h1>
        <div className='button-container'>
          <Button onClick={props.onCreate}>Novo Cliente</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
