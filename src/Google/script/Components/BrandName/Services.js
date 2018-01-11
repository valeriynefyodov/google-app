import React, { Component } from 'react';
import '../../../css/BrandName/Services.css';

import Service from "./Service";

class Services extends Component {
    constructor(props) {
        super(props);

        this.state = {
            serviceData: [
                {
                    imageClass: 'brandname-service__img_cup',
                    title: 'Duis Aute Irure',
                    subtitle: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur.',
                    isDecor: true
                },
                {
                    imageClass: 'brandname-service__img_crown',
                    title: 'Duis Aute Irure',
                    subtitle: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur.',
                    isDecor: true
                },
                {
                    imageClass: 'brandname-service__img_scroll',
                    title: 'Duis Aute Irure',
                    subtitle: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur.',
                    isDecor: false
                }
            ]
        };
    }

    render() {
        return (
            <div className='brandname-services clearfix'>
                <div className='brandname-container'>
                    {this.state.serviceData.map((element, index) => {
                        return <Service data={element} key={index}/>;
                    })}
                </div>
            </div>
        );
    }
}

export default Services;