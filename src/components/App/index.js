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

    this.handleTogglerClick = this.handleTogglerClick.bind(this);
    this.handleCurrencyClick = this.handleCurrencyClick.bind(this);
    this.makeConversion = this.makeConversion.bind(this);
  }

  handleTogglerClick() {
    const { isListOpen } = this.state;
    this.setState({ isListOpen: !isListOpen });
  }

  handleCurrencyClick(newCurrency) {
    this.setState({ selectedCurrency: newCurrency });
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
          onButtonClick={this.handleTogglerClick}
        />
        {isListOpen && (
          <Currencies
            currencies={currenciesList}
            onCurrencyClick={this.handleCurrencyClick}
          />
        )}
        <Result
          value={this.makeConversion()}
          selectedCurrency={selectedCurrency}
        />
      </div>
    );
  }
}

export default App;
