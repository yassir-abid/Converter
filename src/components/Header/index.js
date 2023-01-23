import PropTypes from 'prop-types';

import './styles.scss';

function Header({ baseAmount, onInputBaseAmountChange }) {
  return (
    <header className="header">
      <h1 className="header__title">Converter</h1>
      <div className="header__base-amount">
        <input
          className="header__base-amount__input"
          type="number"
          placeholder="Amount in Euros"
          value={baseAmount !== 0 && baseAmount}
          onChange={onInputBaseAmountChange}
        />
        <p className="header__base-amount__currency">&euro;</p>
      </div>
    </header>
  );
}

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  onInputBaseAmountChange: PropTypes.func.isRequired,
};

export default Header;
