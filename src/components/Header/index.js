import './styles.scss';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Converter</h1>
      <div className="header__base-amount">
        <input
          className="header__base-amount__input"
          type="number"
          placeholder="Amount in Euros"
        />
        <p className="header__base-amount__currency">&euro;</p>
      </div>
    </header>
  );
}

export default Header;
