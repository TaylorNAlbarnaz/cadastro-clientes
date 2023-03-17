import './Controls.css';
import Button from'react-bootstrap/Button';
import { Searchbar } from '../';

function Controls(props) {
  return (
    <div className='Controls'>
      <div className='container'>
        <div className='button-container'>
          <Searchbar onSearch={props.onSearch}/>

          <Button onClick={props.onCreate}>Novo Cliente</Button>
        </div>
      </div>
    </div>
  );
}

export default Controls;
