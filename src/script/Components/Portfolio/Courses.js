import React, { Component } from 'react';
import '../../../css/Portfolio/Portfolio.css';
import '../../../css/Portfolio/Courses.css';
import portfolioStore from '../../Stores/PortfolioStore';
import * as PortfolioActions from '../../Actions/PortfolioActions';

import BlockTitle from "./BlockTitle";
import Course from "./Course";

class Courses extends Component {
    constructor(props) {
        super(props);

        this.state = {
            coursesList: []
        };

        this.updateCoursesList = this.updateCoursesList.bind(this);
    }

    updateCoursesList() {
        this.setState({
            coursesList: portfolioStore.getAllCourses()
        });
    }

    componentWillMount() {
        portfolioStore.on('data changed', this.updateCoursesList);
        // this.updateCoursesList();
    }

    componentDidMount() {
        PortfolioActions.loadCourses();
    }

    componentWillUnmount() {
        portfolioStore.removeListener('data changed', this.updateCoursesList);
    }

    render() {
        return (
            <section className='portfolio-courses'>
                <div className='portfolio-container'>
                    <BlockTitle mainTitle='Курсы на loftblog' subtitle='которые мне помогут в выполениении этого задания'/>
                    <div className='portfolio-courses-container'>
                        {this.state.coursesList.map((item) => {
                            return <Course key={item.id} data={item}/>
                        })}
                    </div>
                </div>
                <div className='clr'/>
            </section>
        );
    }
}

export default Courses;