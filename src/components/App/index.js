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
      isListOpen: false,
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState({ isListOpen: !this.state.isListOpen });
  }

  render() {
    const { isListOpen } = this.state;
    return (
      <div className="app">
        <Header baseAmount={1} />
        <Toggler
          isOpen={isListOpen}
          onButtonClick={this.handleButtonClick}
        />
        {isListOpen && (<Currencies currencies={currenciesList} />)}
        <Result value={1.09} selectedCurrency="United States Dollar" />
      </div>
    );
  }
}

export default App;
