import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
      return (
          <BrowserRouter>
              {/*When hosting your application, you need to be aware of things you need to do for deployment*/}
              {/*1) Make the server always go to index.html*/}
              {/*2) If your app lives in example.com, you're good to go. If it's something like example.com/myApp, then see below*/}
              {/*<BrowserRouter basename={'/myApp'}>*/}
              <div className="App">
                  <Blog />
              </div>
          </BrowserRouter>
      );
  }
}

export default App;
