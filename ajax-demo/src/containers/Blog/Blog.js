import React, { Component } from 'react';
import Posts from '../../containers/Blog/Posts/Posts'
import NewPost from "./NewPost/NewPost";
import {Route, NavLink, Switch, Redirect} from "react-router-dom";
import './Blog.css';

class Blog extends Component {

    state = {
        auth: false
    }

    render () {
        //If you use a regular <a> tag for links, you will trigger a full update for the app
        //Instead, use Link which is the primary way to allow users to navigate around your application
        //Link will render a fully accessible anchor tag with the proper href.

        /*ABSOLUTE & RELATIVE paths
        ABSOLUTE: if your domain is example.com, then when you are at example.com/posts and in Link you
        set 'to="/new-post"', your path will be example.com/new-post. The "/posts" part is removed. You
        will always be re-directed to the root, which is example.com

        RELATIVE: if your domain is example.com, then when you are at example.com/posts and in Link you
        set 'to="/new-post"', your path will be example.com/posts/new-post.

        By default, "to" is always treated as an absolute path. If you want to use relative paths, then
        you can use this.props.match.url which is the currently loaded path and append the new path*/
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/posts/' exact>Posts</NavLink></li>
                            <li><NavLink to="/new-post">New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth ? <Route path='/new-post' exact component={NewPost} /> : null}
                    <Route path='/posts' component={Posts} />
                    {/*Route without 'path' catches all UNKNOWN paths*/}
                    <Route render={() => <h1>Not found</h1>} />
                    {/*<Redirect from='/' to='/posts'/>*/}
                    {/*OR <Route path='/' component={Posts} />*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;