import PropTypes from 'prop-types';

import './styles.scss';

function Toggler({ isOpen, onButtonClick }) {
  return (
    <button
      type="button"
      className={isOpen ? 'toggler toggler--open' : 'toggler'}
      onClick={onButtonClick}
    >
      =
    </button>
  );
}

Toggler.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default Toggler;
