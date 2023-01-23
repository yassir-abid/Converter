import PropTypes from 'prop-types';

import './styles.scss';

function Currencies({
  currencies, onCurrencyClick, searchedCurrency, onInputCurrencyChange,
}) {
  return (
    <div className="currencies">
      <div className="currencies__header">
        <h2 className="currencies__header__title">Currencies</h2>
        <input
          className="currencies__header__input"
          type="text"
          placeholder="search a currency"
          value={searchedCurrency}
          onChange={onInputCurrencyChange}
        />
      </div>
      <ul className="currencies__list">
        {
          Object.keys(currencies)
            .filter((key) => (
              currencies[key].toLowerCase().includes(searchedCurrency.toLowerCase())
            ))
            .map((key) => (
              <li
                key={key}
                className="currencies__list__item"
                onClick={() => onCurrencyClick({ symbol: key, name: currencies[key] })}
              >
                {currencies[key]}
              </li>
            ))
        }
      </ul>
    </div>
  );
}

Currencies.propTypes = {
  currencies: PropTypes.object.isRequired,
  onCurrencyClick: PropTypes.func.isRequired,
  searchedCurrency: PropTypes.string.isRequired,
  onInputCurrencyChange: PropTypes.func.isRequired,
};

export default Currencies;
