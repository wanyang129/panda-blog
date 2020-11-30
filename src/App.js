import React from 'react';
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Header {...this.props} />
        <div>index home</div>
      </div>
    );
  }
}

export default App;
