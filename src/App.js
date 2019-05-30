import React, {Component} from 'react';
import Nav from './components/stateless/Nav'
import Body from './components/stateless/body'

class App extends Component {
render() {
  return (
    <div className="App">
      <header> <Nav /> </header>
      <body> 
        <Body />
      <div class="box"> </div>
      </body>
    </div>
  );
 }
}

export default App;
