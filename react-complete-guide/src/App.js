import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // This is the JSX version
    // JSX is similar to HTML but it's not  
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
      </div>
    );
    // Another way to do the same as above  
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));  
  }
}

export default App;
