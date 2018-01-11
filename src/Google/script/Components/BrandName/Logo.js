import React, { Component } from 'react';
import '../../../css/BrandName/Logo.css';
import HeaderImg from '../../../img/BrandName/header_logo.png';
import FooterImg from '../../../img/BrandName/footer_logo.png';

class Logo extends Component {
    constructor(props) {
        super(props);

        if (this.props.place === 'header')
            this.state = {
                containerClass: 'header-logo',
                imgClass: 'header-logo__img',
                nameClass: 'header-logo__name',
                imgSrc: HeaderImg
            };
        else if (this.props.place === 'footer')
            this.state = {
                containerClass: '',
                imgClass: 'footer-logo__img',
                nameClass: 'footer-logo__name',
                imgSrc: FooterImg
            };
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