import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';
import './styles.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Currencies />
      <Result />
    </div>
  );
}

export default App;
