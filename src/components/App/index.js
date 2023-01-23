/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';
import Toggler from 'src/components/Toggler';
import currenciesList from 'src/data/currencies';
import './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isListOpen: true,
      baseAmount: 1,
      selectedCurrency: 'United States Dollar',
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.makeConversion = this.makeConversion.bind(this);
  }

  handleButtonClick() {
    const { isListOpen } = this.state;
    this.setState({ isListOpen: !isListOpen });
  }

  makeConversion() {
    const { baseAmount, selectedCurrency } = this.state;
    const foundCurrency = currenciesList
      .find((currency) => currency.name === selectedCurrency);
    const convertedAmount = foundCurrency.rate * baseAmount;
    const convertedAmountFixed = parseFloat(convertedAmount.toFixed(2));

    return convertedAmountFixed;
  }

  render() {
    const { isListOpen, baseAmount, selectedCurrency } = this.state;
    return (
      <div className="app">
        <Header baseAmount={baseAmount} />
        <Toggler
          isOpen={isListOpen}
          onButtonClick={this.handleButtonClick}
        />
        {isListOpen && (<Currencies currencies={currenciesList} />)}
        <Result
          value={this.makeConversion()}
          selectedCurrency={selectedCurrency}
        />
      </div>
    );
  }
}

export default App;
