import React, { Component } from 'react';
import '../../../css/BrandName/Feedback.css';

class Feedback extends Component {

    render() {
        return (
            <article className='brandname-feedback'>
                <p className='brandname-feedback__text'>{this.props.data.text.map((element, index) => {return <span key={index}>{element}<br/><br/></span>})}</p>
                <p className='brandname-feedback__username'>{this.props.data.author}</p>
            </article>
        );
    }
}

export default Feedback;