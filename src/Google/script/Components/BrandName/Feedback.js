import React, { Component } from 'react';
import '../../../css/BrandName/Feedback.css';

class Feedback extends Component {
    render() {
        return (
            <article className='brandname-feedback'>
                <p className='brandname-feedback__text'>Fenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/><br/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/><br/></p>
                <p className='brandname-feedback__username'>@Jane Doe</p>
            </article>
        );
    }
}

export default Feedback;