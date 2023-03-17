import './Searchbar.css';

function Searchbar() {
  return (
    <div className="Searchbar">
      <div className="input-group rounded">
        <input type="search" className="form-control rounded" placeholder="Pesquisa"/>
        <span className="input-group-text border-0" id="search-addon">
          <ion-icon name="search"></ion-icon>
        </span>
      </div>
    </div>
  );
}

export default Searchbar;
