import React, { Component } from 'react';
import '../../../css/BrandName/Caption.css';

class Caption extends Component {
    render() {
        return (
            <section className='brandname-caption'>
                <div className='brandname-container'>
                    <h1 className='brandname-caption__title'>Excepteur occaecat cupidatat</h1>
                    <h2 className='brandname-caption__subtitle'>duis aute irure reprehenderit</h2>
                </div>
            </section>
        );
    }
}

export default Caption;