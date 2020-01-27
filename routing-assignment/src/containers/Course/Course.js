import React, { Component } from 'react';
import withRouter from "react-router/withRouter";

class Course extends Component {
    render () {
        let comp = null;
        if (this.props.location.query !== undefined) {
            comp =  <div>
                        <h1>{this.props.location.query.title}</h1>
                        <p>You selected the Course with ID: {this.props.id}</p>
                    </div>
        }

        return (
            comp
        );
    }
}

export default withRouter(Course);