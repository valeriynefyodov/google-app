import React, { Component } from 'react';
import '../../../css/Portfolio/Portfolio.css';
import '../../../css/Portfolio/Course.css';

import * as PortfolioActions from "../../Actions/PortfolioActions";

class Course extends Component {

    hideCourse(id){
        PortfolioActions.hideCourse(id);
    }

    render() {
        return (
            <div className='portfolio-course'>
                <div className={'portfolio-course__image ' + this.props.data.image}/>
                <div className='portfolio-course__frame'/>
                <div className='portfolio-course-content'>
                    <h4 className='portfolio-course-content__title'>{this.props.data.title}</h4>
                    <p className='portfolio-course-content__text'>{this.props.data.text}</p>
                    <span className='portfolio-course-content__time'><i className='fa fa-clock-o' />{this.props.data.time}</span>
                </div>
                <div className='portfolio-course-footer'>
                    <input type='checkbox' className='checkbox' id={'chb' + this.props.data.id} />
                    <label htmlFor={'chb' + this.props.data.id} onClick={this.hideCourse.bind(this, this.props.data.id)}>Посмотрел</label>
                </div>
            </div>
        );
    }
}

export default Course;