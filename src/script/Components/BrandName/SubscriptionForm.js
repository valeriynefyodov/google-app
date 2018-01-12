import React, { Component } from 'react';
import '../../../css/BrandName/SubscriptionForm.css';
import brandnameStore from '../../Stores/BrandNameStore';
import * as BrandNameActions from '../../Actions/BrandNameActions';

class SubscriptionForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            email: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubscribe   = this.onSubscribe.bind(this);
        this.clearForm     = this.clearForm.bind(this);
    }

    componentWillMount() {
        brandnameStore.on('clear form', this.clearForm);
    }

    componentWillUnmount() {
        brandnameStore.removeListener('clear form', this.clearForm);
    }

    clearForm() {
        this.setState({
            text: '',
            email: ''
        });
    }

    onInputChange(event) {
        let type = event.target.type;

        this.setState({
            [type]: event.target.value
        });
    }

    onSubscribe() {
        if (this.state.text !== '' && this.state.email !== '')
            BrandNameActions.submitSubscribeForm(this.state.text, this.state.email);
        else if (this.state.text === '')
            alert('Please enter your name');
        else if (this.state.email === '')
            alert('Please enter your email');
    }

    render() {
        return (
            <form className='brandname-subscription-form' action=''>
                <input className='brandname-subscription-form__name'   type="text"   value={this.state.text}  placeholder="name"  onChange={this.onInputChange}/>
                <input className='brandname-subscription-form__email'  type="email"  value={this.state.email} placeholder="email" onChange={this.onInputChange}/>
                <input className='brandname-subscription-form__button' type="button" value="subscribe" onClick={this.onSubscribe}/>
            </form>
        );
    }
}

export default SubscriptionForm;