import React, { Component } from 'react';
import '../../../css/BrandName/Feedbacks.css';
import BlockTitle from "./BlockTitle";
import Feedback from "./Feedback";

class Feedbacks extends Component {
    render() {
        return (
            <section className='clearfix'>
                <div className='brandname-container'>
                    <BlockTitle class='brandname-feedbacks__title' title='Our Happy Clients.'/>
                    <div className='brandname-feedbacks'>
                        <Feedback/>
                        <Feedback/>
                        <Feedback/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Feedbacks;