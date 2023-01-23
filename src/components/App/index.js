import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';
import currenciesList from 'src/data/currencies';
import './styles.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Currencies currencies={currenciesList} />
      <Result />
    </div>
  );
}

export default App;
