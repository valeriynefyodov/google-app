import React, { Component } from 'react';
import '../../css/Portfolio/Portfolio.css';
import '../../css/Portfolio/Fonts.css';

import Header from "../Components/Portfolio/Header";
import Student from "../Components/Portfolio/Student";
import Courses from "../Components/Portfolio/Courses";
import Footer from "../Components/Portfolio/Footer";

class Portfolio extends Component {

    render() {
        return (
            <div>
                <div className='portfolio-wrapper'>
                    <Header/>
                    <Student/>
                    <Courses/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Portfolio;