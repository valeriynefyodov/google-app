import React, { Component } from 'react';
import '../../../css/BrandName/Header.css';
import Logo from "./Logo";
import Menu from "./Menu";

class Header extends Component {
    render() {
        return (
            <header className='brandname-header clearfix'>
                <div className='brandname-container'>
                    <Logo place='header'/>
                    <Menu place='header'/>
                </div>
            </header>
        );
    }
}

export default Header;