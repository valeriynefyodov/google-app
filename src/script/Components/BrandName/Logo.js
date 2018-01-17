import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import brandnameStore from '../../Stores/BrandNameStore';

class Logo extends Component {
    constructor(props) {
        super(props);

        this.state = brandnameStore.getLogoData(this.props.place);
    }

    render() {
        return (
            <div className={this.state.containerClass}>
                <Link to='/'>
                    <figure>
                        <img className={this.state.imgClass} src={this.state.imgSrc} alt=""/>
                    </figure>
                    <h4 className={this.state.nameClass}><span>Brand</span> Name</h4>
                </Link>
            </div>
        );
    }
}

export default Logo;