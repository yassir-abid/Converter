import './styles.scss';

function Currencies() {
  return (
    <div className="currencies">
      <div className="currencies__header">
        <h2 className="currencies__header__title">Currencies</h2>
      </div>
      <ul className="currencies__list">
        <li className="currencies__list__item">Australian Dollar</li>
        <li className="currencies__list__item">Bulgarian Lev</li>
        <li className="currencies__list__item">Brazilian Real</li>
        <li className="currencies__list__item">Canadian Dollar</li>
      </ul>
    </div>
  );
}

export default Currencies;
