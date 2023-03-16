import './Searchbar.css';

function Searchbar() {
  return (
    <div className="Searchbar">
      <div class="input-group rounded">
        <input type="search" class="form-control rounded" placeholder="Pesquisa"/>
        <span class="input-group-text border-0" id="search-addon">
          <ion-icon name="search"></ion-icon>
        </span>
      </div>
    </div>
  );
}

export default Searchbar;
