import React, { Component } from 'react';
import Posts from '../../containers/Blog/Posts/Posts'
import NewPost from "./NewPost/NewPost";
import {Route, Link} from "react-router-dom";
import './Blog.css';

class Blog extends Component {

    render () {
        //If you use a regular <a> tag for links, you will trigger a full update for the app
        //Instead, use Link which is the primary way to allow users to navigate around your application
        //Link will render a fully accessible anchor tag with the proper href.
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to="/new-post">New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                <Route path='/' exact component={Posts} />
                <Route path='/new-post' component={NewPost} />
            </div>
        );
    }
}

export default Blog;