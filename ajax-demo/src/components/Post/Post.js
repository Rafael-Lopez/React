import React from 'react';
import {withRouter} from "react-router-dom";
import './Post.css';

//The "withRouter" HOC we make this component Router-awared
//This means it will have access to the React-Router properties (history, match, etc)
//when rendered inside a component rendered by Route. "Posts" in this case.
//Otherwise, those properties are not available in our case.
const post = (props) => {
    console.log(props);

    return (
        <article className="Post" onClick={props.clicked}>
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
        </article>
    );
};

export default withRouter(post);