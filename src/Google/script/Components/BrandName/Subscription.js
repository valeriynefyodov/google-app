import React, { Component } from 'react';
import '../../../css/BrandName/Subscription.css';
import BlockTitle from "./BlockTitle";
import SubscriptionForm from "./SubscriptionForm";

class Subscription extends Component {
    render() {
        return (
            <section className='brandname-subscription clearfix'>
                <div className='brandname-container'>
                    <BlockTitle title='subscribe to our newsletter.' class='brandname-subscription__title'/>
                    <SubscriptionForm/>
                </div>
            </section>
        );
    }
}

export default Subscription;