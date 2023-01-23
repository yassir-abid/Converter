import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';
import Toggler from 'src/components/Toggler';
import './styles.scss';

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [rate, setRate] = useState(0);
  const [isListOpen, setIsListOpen] = useState(true);
  const [baseAmount, setBaseAmount] = useState(1);
  const [selectedCurrency, setSelectedCurrency] = useState({ symbol: 'usd', name: 'United States dollar' });
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
    const convertedAmount = rate * baseAmount;
    const convertedAmountFixed = parseFloat(convertedAmount.toFixed(2));
    return convertedAmountFixed;
  };

  const loadCurrencies = async () => {
    try {
      const response = await axios.get('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json');
      setCurrencies(response.data);
    }
    catch (error) {
      console.error(error);
    }
  };

  const loadRate = async () => {
    try {
      const response = await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/${selectedCurrency.symbol}.json`);
      setRate(response.data[selectedCurrency.symbol]);
    }
    catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    document.title = `Conversion from euro to ${selectedCurrency.name}`;
  });

  useEffect(() => {
    loadCurrencies();
  }, []);

  useEffect(() => {
    loadRate();
  }, [selectedCurrency]);

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
          currencies={currencies}
          searchedCurrency={searchedCurrency}
          onCurrencyClick={handleCurrencyClick}
          onInputCurrencyChange={handleInputCurrencyChange}
        />
      )}
      <Result
        value={makeConversion()}
        selectedCurrency={selectedCurrency.name}
      />
    </div>
  );
}

export default App;
