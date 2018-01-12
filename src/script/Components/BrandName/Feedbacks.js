import React, { Component } from 'react';
import '../../../css/BrandName/Feedbacks.css';
import brandnameStore from '../../Stores/BrandNameStore';
import * as BrandNameActions from '../../Actions/BrandNameActions';

import BlockTitle from "./BlockTitle";
import Feedback from "./Feedback";

class Feedbacks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            feedbacks: []
        };

        this.updateFeedbacks = this.updateFeedbacks.bind(this);
    }

    componentWillMount() {
        brandnameStore.on('feedbacks received', this.updateFeedbacks);
    }

    componentDidMount() {
        BrandNameActions.loadFeedbacks();
    }

    componentWillUnmount() {
        brandnameStore.removeListener('feedbacks received', this.updateFeedbacks);
    }

    updateFeedbacks() {
        this.setState({
            feedbacks: brandnameStore.getFeedbacks()
        });
    }

    render() {
        return (
            <section className='clearfix'>
                <div className='brandname-container'>
                    <BlockTitle place='feedbacks'/>
                    <div className='brandname-feedbacks'>
                        {this.state.feedbacks.map((element) => {
                            return <Feedback data={element} key={element.id}/>;
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default Feedbacks;