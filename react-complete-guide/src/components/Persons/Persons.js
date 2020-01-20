import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    
//    static getDerivedStateFromProps(props, state) {
//        console.log('[Persons.js] getDerivedStateFromProps');
//        return state;
//    }
    
    // Decide whether to continue or not. Do not cause side-effects
    //shouldComponentUpdate(nextProps, nextState) {
    //    console.log('[Persons.js] shouldComponentUpdate');
    //    return true;
    //}
    
    // Last-minute DOM ops. Do not cause side-effects.
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }
    
    // Cause side-effects, like making an HTTP request to get new data. Do not update state as this will trigger a re-render.
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }
    
    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }
    
    // lifecycle to prepare and structure your JSX code
    // child components are rendered after this
    render() {
        console.log('[Persons.js] rendering...');
        return (
            this.props.persons.map( (person, index) => {
                return (
                    <Person
                        click={ () => this.props.clicked(index) }
                        name={person.name} 
                        age={person.age} 
                        changed={ (event) => this.props.changed(event, person.id) } 
                        isAuth={this.props.isAuthenticated}
                    />
                );
            })
        );
    }
    
}

export default Persons;