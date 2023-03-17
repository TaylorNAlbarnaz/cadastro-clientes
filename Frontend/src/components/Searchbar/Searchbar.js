import './Searchbar.css';
import { useEffect } from 'react';

function Searchbar(props) {
  function pesquisar() {
    const query = document.getElementById('search-query').value;
    if (query != null && query != '') {
      props.onSearch(query);
    } else {
      props.onSearch(null);
    }
  }

  function simularClickComEnter() {
    document.getElementById("search-query")
      .addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.key === 'Enter') {
          document.getElementById("search-btn").click();
      }
    });
  }

  useEffect(() => simularClickComEnter(), []);

  return (
    <div className="Searchbar">
      <div className="input-group rounded">
        <input id="search-query" type="search" className="form-control rounded" placeholder="Pesquisa"/>
        <span className="input-group-text border-0" id="search-btn" onClick={() => pesquisar()}>
          <ion-icon name="search"></ion-icon>
        </span>
      </div>
    </div>
  );
}

export default Searchbar;
