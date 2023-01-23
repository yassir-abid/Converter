/* eslint-disable react/prefer-stateless-function */
import { useEffect, useState } from 'react';

import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';
import Toggler from 'src/components/Toggler';
import currenciesList from 'src/data/currencies';
import './styles.scss';

function App() {
  const [isListOpen, setIsListOpen] = useState(true);
  const [baseAmount, setBaseAmount] = useState(1);
  const [selectedCurrency, setSelectedCurrency] = useState('United States Dollar');
  const [searchedCurrency, setSearchedCurrency] = useState('');

  const handleTogglerClick = () => {
    setIsListOpen(!isListOpen);
  };

  const handleCurrencyClick = (newCurrency) => {
    setSelectedCurrency(newCurrency);
  };

  const handleInputBaseAmountChange = (event) => {
    let value = event.target.valueAsNumber;
    if (Number.isNaN(value)) {
      value = 0;
    }
    setBaseAmount(value);
  };

  const handleInputCurrencyChange = (event) => {
    setSearchedCurrency(event.target.value);
  };

  const makeConversion = () => {
    const foundCurrency = currenciesList
      .find((currency) => currency.name === selectedCurrency);
    const convertedAmount = foundCurrency.rate * baseAmount;
    const convertedAmountFixed = parseFloat(convertedAmount.toFixed(2));

    return convertedAmountFixed;
  };

  useEffect(() => {
    document.title = `Conversion from euro to ${selectedCurrency}`;
  });

  return (
    <div className="app">
      <Header
        baseAmount={baseAmount}
        onInputBaseAmountChange={handleInputBaseAmountChange}
      />
      <Toggler
        isOpen={isListOpen}
        onButtonClick={handleTogglerClick}
      />
      {isListOpen && (
        <Currencies
          currencies={currenciesList}
          searchedCurrency={searchedCurrency}
          onCurrencyClick={handleCurrencyClick}
          onInputCurrencyChange={handleInputCurrencyChange}
        />
      )}
      <Result
        value={makeConversion()}
        selectedCurrency={selectedCurrency}
      />
    </div>
  );
}

export default App;
