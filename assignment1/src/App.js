import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
    
    state = {
        username: 'Username 1'
    };

    usernameChangeHandler = (event) => {
        this.setState( { username: event.target.value} );        
    };
    
    render() {
        return (
            <div className="App">
                <UserInput changed={this.usernameChangeHandler} currentName={this.state.username} />
                <UserOutput username={this.state.username} password="Bbb"/>
                <UserOutput username={this.state.username} password="Ddd"/>
            </div>
        );
    }
}

export default App;
