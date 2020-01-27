import React, { Component } from 'react';

import './Courses.css';
import {Link, Route} from "react-router-dom";
import Course from "../Course/Course";

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        selectedCourseId: null
    }

    selectCourse = (id) => {
        this.setState({
            selectedCourseId: id
        });
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return <Link
                                to={{ pathname: this.props.match.url + '/' + course.id, query: { title: course.title } }}
                                className="Course" key={course.id}
                                onClick={() => this.selectCourse(course.id)}>{course.title}</Link>;
                        } )
                    }
                </section>
                <Route path={this.props.match.url + '/:id'} render={() => (<Course id={this.state.selectedCourseId}/>)} />
            </div>
        );
    }
}

export default Courses;