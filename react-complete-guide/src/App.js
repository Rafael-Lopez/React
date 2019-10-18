import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    
    // state is a special property for any React component (same for props). So you can only use this within classes that extend Component
    // What is special about 'state' is that if something in it changes, then React will re-render the component automatically to display the new value
    state = {
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 }
        ],
        otherState: 'some othe value',
        showPersons: false
    };

    switchNameHandler = (newName) => {
        // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
        
        // setState is a sepcial method provided by React. This will ensure React knows about the change in the state so that it can update the UI
        // The code below will merge the new info with the old one. This means, only the 'persons' property will be updated, and 'otherState' will remaind untouched
        this.setState({
            persons: [
                { name: newName, age: 28 },
                { name: 'Manu', age: 30}
            ]
        });
    };

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Maxi', age: 28 },
                { name: event.target.value, age: 30}
            ]
        });
    };

    tooglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState( {showPersons: !doesShow} );
    };
    
    render() {
        
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };
        
        // This is the JSX version
        // JSX is similar to HTML but it's not  
        return (
            // Typically, you only want one root element per component. In this case, 'div' is the root element.
            // In HTML, the original attribute is class, but since this is JSX, 'class' can't be used since it's a JS reserved word. Instead, we have to use className
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button 
                    style={style}
                    onClick={this.tooglePersonsHandler}>Toogle Persons</button>
                    { this.state.showPersons ? 
                        <div>
                            <Person 
                                name={this.state.persons[0].name} 
                                age={this.state.persons[0].age} />
                            <Person 
                                name={this.state.persons[1].name} 
                                age={this.state.persons[1].age}
                                click={this.switchNameHandler.bind(this, 'Maximilian!')}
                                changed={this.nameChangeHandler}>My hobbies: Racing
                            </Person>
                        </div> : null
                    }
            </div>
        );
        // Another way to do the same as above  
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));  
    }
}

export default App;
