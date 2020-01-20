import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxiliary from '../hoc/Auxiliary';

class App extends Component {
    
    // Here you set up state. Do not cause side-effects
    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
    }
    
    // lifecycle to sync state. Do not cause side-effects
    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }
    
    // lifecycle where you can cause side-effects, like making HTTP requests to get new data, etc. Do not update state here as it triggers a render
    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }
    
    componentDidUpdate() {
        console.log('[App.js] componentDidUpdate');
    }  
    
    // state is a special property for any React component (same for props). So you can only use this within classes that extend Component
    // What is special about 'state' is that if something in it changes, then React will re-render the component automatically to display the new value
    state = {
        persons: [
            { id: 'aaa', name: 'Max', age: 28 },
            { id: 'bbe', name: 'Manu', age: 29 },
            { id: 'bse', name: 'Test', age: 30 }
        ],
        otherState: 'some othe value',
        showPersons: false,
        showCockpit: true,
        changeCounter: 0,
        authenticated: false
    };

    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons.slice();
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };
    
    nameChangeHandler = (event, id) => {       
        const personIndex = this.state.persons.findIndex( p => {
            return p.id === id;
        } );
        
        //It's a best practice to never mutate the original state directly
        //Instead, create a copy of what you're trying to change
        const person = {
            ...this.state.persons[personIndex]
        };
        
        person.name = event.target.value;
        
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        
        this.setState( (prevState, props) => {
            return {
                persons: persons,
                changeCounter: prevState.changeCounter + 1
            };
        });
    };

    tooglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState( {showPersons: !doesShow} );
    };

    loginHandler = () => {
        this.setState({authenticated: true});
    };
    
    // lifecycle to prepare and structure your JSX code
    // child components are rendered after this
    render() {
        console.log('[App.js] render');
        let persons = null;
        
        if (this.state.showPersons) {
            persons = <Persons 
                        persons = {this.state.persons}
                        clicked = {this.deletePersonHandler}
                        changed = {this.nameChangeHandler}
                        isAuthenticated={this.state.authenticated} />; 
        }
        
        // This is the JSX version. JSX is similar to HTML but it's not  
        return (
            // Typically, you only want one root element per component. In this case, 'div' is the root element.
            // In HTML, the original attribute is class, but since this is JSX, 'class' can't be used since it's a JS reserved word. Instead, we have to use className
            <Auxiliary>
                <button 
                    onClick={ () => {
                        this.setState({showCockpit: false})
                    }}>Remove Cockpit</button>
                    {this.state.showCockpit ?   
                        <Cockpit 
                            title={this.props.appTitle}
                            showPersons={this.state.showPersons}
                            personsLength={this.state.persons.length} 
                            clicked={this.tooglePersonsHandler} 
                            login={this.loginHandler} /> : null 
                    }
                { persons }
            </Auxiliary>
        );
        // Another way to do the same as above  
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));  
    }
}

export default withClass(App, classes.App);
