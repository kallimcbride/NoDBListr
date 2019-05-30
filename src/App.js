import React, {Component} from 'react';
import Nav from './components/stateless/Nav'
import Body from './components/stateless/body'
import MainList from './components/mainList'

class App extends Component {
render() {
  return (
    <div className="App">
      <header> <Nav /> </header>
      <Body />
      <div>
        <MainList/>
      </div>
    </div>
  );
 }
}

export default App;
