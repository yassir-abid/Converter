import PropTypes from 'prop-types';

import './styles.scss';

function Header({ baseAmount }) {
  return (
    <header className="header">
      <h1 className="header__title">Converter</h1>
      <div className="header__base-amount">
        <input
          className="header__base-amount__input"
          type="number"
          placeholder="Amount in Euros"
          value={baseAmount}
        />
        <p className="header__base-amount__currency">&euro;</p>
      </div>
    </header>
  );
}

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
};

export default Header;
