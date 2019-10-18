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

    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons;
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
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
        
        let persons = null;
        
        if (this.state.showPersons) {
            persons = (
                <div>
                    { this.state.persons.map( (person, index) => {
                        return <Person
                            click={ () => this.deletePersonHandler(index) }
                            name={person.name} 
                            age={person.age} />
                    } ) }
                </div>
            );    
        }
        
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
                    { persons }
            </div>
        );
        // Another way to do the same as above  
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));  
    }
}

export default App;
