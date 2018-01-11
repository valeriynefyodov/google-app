import React, { Component } from 'react';
import '../../../css/BrandName/SubscriptionForm.css';

class SubscriptionForm extends Component {
    render() {
        return (
            <form className='brandname-subscription-form' action=''>
                <input className='brandname-subscription-form__name'   type="text"   placeholder="name"/>
                <input className='brandname-subscription-form__email'  type="email"  placeholder="email"/>
                <input className='brandname-subscription-form__button' type="button" value="subscribe"/>
            </form>
        );
    }
}

export default SubscriptionForm;