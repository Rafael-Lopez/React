import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // This is the JSX version
    // JSX is similar to HTML but it's not  
    return (
        // Typically, you only want one root element per component. In this case, 'div' is the root element.
        // In HTML, the original attribute is class, but since this is JSX, 'class' can't be used since it's a JS reserved word. Instead, we have to use className
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
        </div>
    );
    // Another way to do the same as above  
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));  
  }
}

export default App;
