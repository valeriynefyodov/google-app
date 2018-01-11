import React, { Component } from 'react';
import '../../css/Portfolio/Portfolio.css';
import '../../css/Portfolio/Fonts.css';
import PortfolioStore from '../Stores/PortfolioStore'
import Dispatcher from '../Dispatcher';

import Header from "../Components/Portfolio/Header";
import Student from "../Components/Portfolio/Student";
import Courses from "../Components/Portfolio/Courses";
import Footer from "../Components/Portfolio/Footer";

class Portfolio extends Component {

    componentWillMount() {
        this.portfolioStore = new PortfolioStore();
        Dispatcher.register(this.portfolioStore.handleActions.bind(this.portfolioStore));
    }

    render() {
        return (
            <div>
                <div className='portfolio-wrapper'>
                    <Header/>
                    <Student/>
                    <Courses portfolioStore={this.portfolioStore}/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Portfolio;