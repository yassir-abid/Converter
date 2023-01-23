import PropTypes from 'prop-types';

import './styles.scss';

function Result({ value, selectedCurrency }) {
  return (
    <div className="result">
      <p className="result__amount">{value}</p>
      <p className="result__currency">{selectedCurrency}</p>
    </div>
  );
}

Result.propTypes = {
  value: PropTypes.number.isRequired,
  selectedCurrency: PropTypes.string.isRequired,
};

export default Result;
