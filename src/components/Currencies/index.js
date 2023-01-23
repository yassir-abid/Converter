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
          currencies
            .filter((currency) => (
              currency.name.toLowerCase().includes(searchedCurrency.toLowerCase())
            ))
            .map((currency) => (
              <li
                key={currency.name}
                className="currencies__list__item"
                onClick={() => onCurrencyClick(currency.name)}
              >
                {currency.name}
              </li>
            ))
        }
      </ul>
    </div>
  );
}

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape(
      {
        name: PropTypes.string.isRequired,
        rate: PropTypes.number.isRequired,
      },
    ).isRequired,
  ).isRequired,
  onCurrencyClick: PropTypes.func.isRequired,
  searchedCurrency: PropTypes.string.isRequired,
  onInputCurrencyChange: PropTypes.func.isRequired,
};

export default Currencies;
