import React, { Component } from 'react';
import BlockTitle from "./BlockTitle";

class CallToAction extends Component {
    render() {
        return (
            <section className='brandname-call-to-action clearfix'>
                <div className='brandname-container'>
                    <figure>
                        <img className='brandname-call-to-action__browser-image' src='img/BrandName/browser_image.png' alt=""/>
                    </figure>

                    <BlockTitle place='callToAction'/>

                    <p className='brandname-call-to-action__text'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore euna fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in pel culpa qui officia deserunt mollit anim id est laborum.</p>
                    <input type='button' className='brandname-call-to-action__button' value='sign up now!'/>
                </div>
            </section>
        );
    }
}

export default CallToAction;