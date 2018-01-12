import React, { Component } from 'react';
import '../../../css/BrandName/Footer.css';
import Logo from "./Logo";
import Menu from "./Menu";

class Footer extends Component {
    render() {
        return (
            <footer className='brandname-footer'>
                <div className='brandname-container'>
                    <Logo place='footer'/>
                    <Menu place='footer'/>
                    <p className='brandname-footer__copyright'>&copy; 2013 BrandName.com. All Rights Reserved.</p>
                </div>
            </footer>
        );
    }
}

export default Footer;