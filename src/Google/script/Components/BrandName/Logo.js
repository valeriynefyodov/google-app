import React, { Component } from 'react';
import brandnameStore from '../../Stores/BrandNameStore';
import '../../../css/BrandName/Logo.css';

class Logo extends Component {
    constructor(props) {
        super(props);

        this.state = brandnameStore.getLogoData(this.props.place);
    }

    render() {
        return (
            <div className={this.state.containerClass}>
                <a href="">
                    <figure>
                        <img className={this.state.imgClass} src={this.state.imgSrc} alt=""/>
                    </figure>
                    <h4 className={this.state.nameClass}><span>Brand</span> Name</h4>
                </a>
            </div>
        );
    }
}

export default Logo;