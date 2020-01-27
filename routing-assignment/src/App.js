import React, { Component } from 'react';
import {BrowserRouter, Link, Redirect, Route, Switch} from "react-router-dom";
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import './App.css';

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div className="App">
                    <nav>
                        <Link to='/users'>Users</Link>
                        <Link to='/courses'>Courses</Link>
                    </nav>
                    <Switch>
                        <Route path='/users' component={Users}/>
                        <Route path='/courses' component={Courses}/>
                        <Redirect from='/all-courses' to='/courses'/>
                        {/*All unknown requests redirected to /users*/}
                        <Redirect from='/' to='/users'/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
