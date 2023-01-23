import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';
import currenciesList from 'src/data/currencies';
import './styles.scss';

function App() {
  return (
    <div className="app">
      <Header baseAmount={1} />
      <Currencies currencies={currenciesList} />
      <Result value={1.09} selectedCurrency="United States Dollar" />
    </div>
  );
}

export default App;
