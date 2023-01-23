import PropTypes from 'prop-types';

import './styles.scss';

function Currencies({ currencies }) {
  return (
    <div className="currencies">
      <div className="currencies__header">
        <h2 className="currencies__header__title">Currencies</h2>
      </div>
      <ul className="currencies__list">
        {
          currencies.map((currency) => (
            <li
              key={currency.name}
              className="currencies__list__item"
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
};

export default Currencies;
