import React, {Component} from 'react';
import classes from './Person.css';
import Auxiliary from '../../../hoc/Auxiliary';

// 'props' is passed by default by React
// It includes all the attributes you add to your component
class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <Auxiliary className={classes.Person}>
                <p onClick={this.props.click} >I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}
                />
            </Auxiliary>
        );
    }    
}

export default Person;