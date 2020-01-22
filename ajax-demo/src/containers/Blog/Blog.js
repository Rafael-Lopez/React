import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {

    componentDidMount() {

        //GET returns a Promise object. Once the promise is fulfilled, the THEN
        //part gets executed. Here's where you can manipulate the result
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then( response => {
                console.log(response);
            });
    }

    render () {
        return (
            <div>
                <section className="Posts">
                    <Post />
                    <Post />
                    <Post />
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;