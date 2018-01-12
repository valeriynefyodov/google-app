import React, { Component } from 'react';
import '../../../css/BrandName/Subscription.css';
import BlockTitle from "./BlockTitle";
import SubscriptionForm from "./SubscriptionForm";

class Subscription extends Component {
    render() {
        return (
            <section className='brandname-subscription clearfix'>
                <div className='brandname-container'>
                    <BlockTitle place='subscription'/>
                    <SubscriptionForm/>
                </div>
            </section>
        );
    }
}

export default Subscription;