import React, { Component } from 'react';
import brandnameStore from '../../Stores/BrandNameStore';
import '../../../css/BrandName/Services.css';

import Service from "./Service";

class Services extends Component {
    constructor(props) {
        super(props);

        this.state = {
            serviceData: brandnameStore.getServicesData()
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