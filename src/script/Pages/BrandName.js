import React, { Component } from 'react';
import '../../css/BrandName/BrandName.css';
import '../../css/BrandName/Fonts.css';

import Header from "../Components/BrandName/Header";
import Caption from "../Components/BrandName/Caption";
import Services from "../Components/BrandName/Services";
import CallToAction from "../Components/BrandName/CallToAction";
import Feedbacks from "../Components/BrandName/Feedbacks";
import Footer from "../Components/BrandName/Footer";
import Subscription from "../Components/BrandName/Subscription";

class BrandName extends Component {

    // componentWillMount() {
    //     this.brandnameStore = new BrandNameStore();
    //     Dispatcher.register(this.brandnameStore.handleActions.bind(this.brandnameStore));
    // }

    render() {
        return (
            <div>
                <div className='brandname-wrapper'>
                    <div className='brandname-billboard'>
                        <Header/>
                        <Caption/>
                    </div>
                    <Services/>
                    <CallToAction/>
                    <Feedbacks/>
                    <Subscription/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default BrandName;